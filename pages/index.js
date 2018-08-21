import 'isomorphic-fetch'
import LayoutFull from '../components/layout/LayoutFull'
import {Link} from'../routes';
import Error from './_error'

// components
import Hero from '../components/hero'
import Catalogue from '../components/catalogue'

export default class extends React.Component{		

	static async getInitialProps({ res }){		
		try {
			let [reqUser, reqProducts] = await Promise.all([
		        fetch(`https://aerolab-challenge.now.sh/user/me?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yjc2NTVjNGYyYjBlNzAwNTc5ZDgzODEiLCJpYXQiOjE1MzQ0ODE4NjB9.qthyWAKLfbrB-HQ9R26z8DAn-jfHrH4xOsQSwGCaiNk`),
		        fetch(`https://aerolab-challenge.now.sh/products?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yjc2NTVjNGYyYjBlNzAwNTc5ZDgzODEiLCJpYXQiOjE1MzQ0ODE4NjB9.qthyWAKLfbrB-HQ9R26z8DAn-jfHrH4xOsQSwGCaiNk`)
		    ])
			if( reqUser.status >= 400 ) {
		        return { user: null, products: null, statusCode: req.status }
		    }

		    let user = await reqUser.json()
		    let products = await reqProducts.json()

			return { user, products, statusCode: 200 }	
		} catch(e){
			res.statusCode = 503
			return { user: null, products: null, statusCode: 503 }	
		}		
	}

	constructor(props) {
	  	super(props);
		this.handleClickAddCoins = this.handleClickAddCoins.bind(this);
		this.handleClickRemoveCoins = this.handleClickRemoveCoins.bind(this);
		this.state = {
			user: this.props.user,
			products: this.props.products,
			statusCode: this.props.statusCode
		}
	}

	async handleClickAddCoins(arg){
		try {
			let reqPoints = await fetch('https://aerolab-challenge.now.sh/user/points', {
		        method: 'POST',
		        body: JSON.stringify({amount: 1000}),
		        headers: {
		            'Content-Type': 'application/json',
		            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yjc2NTVjNGYyYjBlNzAwNTc5ZDgzODEiLCJpYXQiOjE1MzQ0ODE4NjB9.qthyWAKLfbrB-HQ9R26z8DAn-jfHrH4xOsQSwGCaiNk'
		        }
		    })

		    if( reqPoints.status >= 400 ) {
			    alert('Error') 
		    }

		    let coins = await reqPoints.json()
		    alert(coins.message)	    
		    this.props.user.points = this.props.user.points + 1000 
		    this.setState({
		    	user: this.props.user
		    })
	    } catch(e){
			alert('Error')
		}
	}

	handleClickRemoveCoins(coins){
		this.props.user.points = this.props.user.points - coins 
		this.setState({
			user: this.props.user
		})
	}

	render(){
		const { user, products, statusCode } = this.state

		if( statusCode !== 200 ) {
	      return <Error statusCode={ statusCode } />
	    }	

		return <LayoutFull user={user.name} coins={user.points} title="Catalogue" eventAddCoins={this.handleClickAddCoins}>
			<Hero />
			<Catalogue user={user} products={products} eventRemoveCoins={this.handleClickRemoveCoins}/>
		</LayoutFull>
	}
}