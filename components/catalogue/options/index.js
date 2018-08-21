import Chip from './Chip';
import Pagination from './Pagination'; 

export default class extends React.Component{
    constructor(props) {
        super(props)             
    }
    
    render() {
        const { eventSort, total, section, actual, event, currentpagenumber, lastPage, activeItem } = this.props
        return (
            <div>
                <div className="content">
                    <div className="amount">
                        <span>{actual} of {total} products</span>
                    </div>
                    <div className={section !== 'header' ? 'disabled' : ''}>
                        <div className="sort">
                            <span className="Disabled">Sort by:</span>
                        </div>
                        <div className="options grid">
                            <Chip event={eventSort} activeItem={activeItem} title="Most recent" />
                            <Chip event={eventSort} activeItem={activeItem} title="Lowest price" />
                            <Chip event={eventSort} activeItem={activeItem} title="Highest price" />
                        </div>
                    </div>
                    <div className="pagination">
                        <Pagination event={event} currentpagenumber={currentpagenumber} lastPage={lastPage}/>
                    </div>
                </div>
                <style jsx>{`
    		        .content{
    					font-size:24px;
    					color:#616161;
    					font-weigth:regular;
    					letter-spacing:-0.15px;
    					line-height:48px;
    					text-align:left;
                        float: left;
                        width: 100%;  
                        padding-bottom: 24px;
                        margin-bottom: 42px;
                        border-bottom: 1px solid #d9d9d9;               
    		        }
                    .amount{
                        float:left;
                        padding-right:24px;
                    }
                    .sort{
                        float:left;
                        font-size:24px;
                        color:#a3a3a3;
                        letter-spacing:-0.15px;
                        line-height:48px;
                        text-align:left;
                        border-left: 1px solid #d9d9d9;
                    }
                    .sort span{
                        padding:0 24px;
                    }
                    .options{
                        display: flex;
                        flex-wrap: wrap;
                        float:left;
                    }
                    .pagination{
                        float:right;
                        display: flex;
                    }                    
    		    `}</style>
            </div>
        );
    }
}