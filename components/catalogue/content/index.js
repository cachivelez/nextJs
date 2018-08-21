import 'isomorphic-fetch'
import Card from './Card'

export default class extends React.Component{	    
    render(){
    	const {currentProducts, user, eventRedeem} = this.props

    	return (
	        <div className="content">
	            <div className="grid-container">
		            { currentProducts.map((item, index) => (
			        	<Card user={user} item={item} key={item._id} eventRedeem={eventRedeem} />
			      	))}
	            </div>
	            <style jsx>{`
	            	.content{
	            		width:100%;
	            		float:left;
	            		padding-bottom: 60px;
	            	}
			        .grid-container {
			            display: grid;
			            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		                grid-gap: 25px 25px;
			        }
			    `}</style>
	        </div>       
	    );	
    }
    
}