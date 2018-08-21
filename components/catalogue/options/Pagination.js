// Assets
import right from '../../../assets/icons/arrow-right.svg'
import left from '../../../assets/icons/arrow-left.svg'

export default class extends React.Component {
    constructor(props) {
	    super(props)
	}
    render() {
    	const {event, currentpagenumber, lastPage} = this.props    	

	    return (
	        <div> 
	        	<span>Page {currentpagenumber}</span>
	        	<img className={currentpagenumber === lastPage ? 'disabled' : ''} src={right} alt="Página siguiente" onClick={e => event('nextPage')} /> 	
	        	<img className={currentpagenumber === 1 ? 'disabled' : ''} src={left} alt="Página anterior" onClick={e => event('prevPage')} />	        	   
	        	<style jsx>{`
	        		img{
	        			float:right;
	        			padding-left:12px;
	        			cursor:pointer;
	        		}
	        	`}</style>      
	        </div>
	    );
	}
}