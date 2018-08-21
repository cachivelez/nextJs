export default class extends React.Component {    

    render() {
	    const { title = 'No title', activeItem = false, event } = this.props
	   	
	    return (
	        <div className="content">        	
	            <div className={activeItem === title ? 'chip active' : 'chip'} onClick={e => event({title})}>
	            	{ title }
	            </div>
	            <style jsx>{`
			        .chip{
			            background:#ededed;
						border-radius:100px;
						width:163px;
						height:48px;	
						font-size:24px;
						color:#a3a3a3;						
						letter-spacing:-0.15px;
						line-height:48px;
						text-align:center;	
						float:left;
						margin-right:24px;	
						cursor:pointer;
			        }
			        .active{
			        	background:#0ad4fa;
			        	color:#ffffff;
			        }
			        @media only screen and (max-width: 600px) {
                        .chip{
                            margin: 20px;
                        }   
                    }
			    `}</style>
	        </div>
	    );
	}
}