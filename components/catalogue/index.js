import Options from './options';
import Content from './content';

export default class extends React.Component{	
	constructor(props) {
	    super(props)
	    this.state = { 
	    	itemsPerPage: 15,	    	
	    	currentpagenumber:1,
	    	activeItem: 'Most recent',
	    	products: this.props.products,
	    }
	    this.handleClickRedeem = this.handleClickRedeem.bind(this);
	    this.handleClickPagination = this.handleClickPagination.bind(this);
	    this.handleClickSort = this.handleClickSort.bind(this);
	}

	async handleClickRedeem(arg){
		console.log(arg)
		try {
			let reqRedeem = await fetch('https://aerolab-challenge.now.sh/redeem', {
	        method: 'POST',
	        body: JSON.stringify({productId: arg.item._id}),
	        headers: {
	            'Content-Type': 'application/json',
	            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yjc2NTVjNGYyYjBlNzAwNTc5ZDgzODEiLCJpYXQiOjE1MzQ0ODE4NjB9.qthyWAKLfbrB-HQ9R26z8DAn-jfHrH4xOsQSwGCaiNk'
	        }})

	        let redeemeRes  = await reqRedeem.json()
	        alert(redeemeRes.message)
	        this.props.eventRemoveCoins(arg.item.cost)
		} catch(e){
			alert('Error')
		}
	}
	
	handleClickSort(arg) {
		const {products} = this.state	
		let productsAux = []	
		switch (arg.title) {
	        case "Lowest price": {
	          	productsAux = products.concat().sort((a, b) => a.cost - b.cost)
	          	break;
	        }
	        case "Highest price": {
	        	productsAux = products.concat().sort((a, b) => b.cost - a.cost) 
	        	break;
	        }
	        default:
	        	productsAux = this.props.products
	        	break;
	    }
	    this.setState({
      		activeItem: arg.title,
      		products: productsAux
      	}) 
    }

	handleClickPagination(arg) {
		const {currentpagenumber} = this.state		
		let newPage = arg == 'nextPage' ? currentpagenumber + 1 : currentpagenumber - 1
        this.setState({
          currentpagenumber: Number(newPage)
        });
    }

	render(){
		const { products, currentpagenumber, itemsPerPage, activeItem } = this.state
		const { user } = this.props

		// paginado
		const totalProducts = products.length
		const indexOfLastProducts = currentpagenumber * itemsPerPage;
        const indexOfFirstProducts = indexOfLastProducts - itemsPerPage;
        const currentProducts = products.slice(indexOfFirstProducts, indexOfLastProducts);
		const lastPage = Math.ceil(totalProducts / itemsPerPage);

	    return (
	        <div className="container">
	    		<Options 
	    			eventSort={this.handleClickSort} 
	    			activeItem={activeItem} 
	    			section="header" 
	    			actual={currentProducts.length} 
	    			total={totalProducts} 
	    			event={this.handleClickPagination} 
	    			currentpagenumber={currentpagenumber} 
	    			lastPage={lastPage}
	    		>
	    		</Options>
	        	<Content 
	        		user={user}
	        		eventRedeem={this.handleClickRedeem}
	        		currentProducts={currentProducts}	        			
	        	>
	        	</Content>
	            <Options 
	    			section="footer" 
	    			actual={currentProducts.length} 
	    			total={totalProducts} 
	    			event={this.handleClickPagination} 
	    			currentpagenumber={currentpagenumber} 
	    			lastPage={lastPage}
	    		>
	    		</Options>
	        </div>
    	);	
	}	
}