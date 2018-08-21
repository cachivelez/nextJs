// Assets
import buy from '../../../assets/icons/buy-blue.svg'
import coin from '../../../assets/icons/coin.svg'

export default class LayoutFull extends React.Component {
    render() {
    	const {item, user, eventRedeem} = this.props
	    return (
	        <div>
	            <div className='card'>         	
	            	<div className="content">
            			<div className="price">
            				<div><span>{item.cost}</span><img src={coin} alt="coin" /></div>
            			</div>
            			<div className={item.cost > user.points ? 'insufficient' : 'disabled'}>
            				<div><span>You need {item.cost - user.points}</span><img src={coin} alt="coin" /></div>
            			</div>
	            		<img className={item.cost > user.points ? 'disabled' : 'buy'} src={buy} onClick={e => eventRedeem({item})}/>
            			<img src={item.img.url} />
		            	<hr />
		            	<div className="category">{item.category}</div>
		            	<div className="item">{item.name}</div>
	            	</div>
	            </div>
	            <style jsx>{`
	            	.content{
	            		padding:25px;
	            	}
			        .card{
			        	background:#ffffff;
						box-shadow:2px 2px 4px 0 rgba(0,0,0,0.10);
						width:100%;
			        }
			        .buy:hover{
			        	box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
			        	transition: all 1s;
        				transform: scale(1.05);        				
			        }
			        hr{
			        	border-top: 1px solid #d9d9d9;
			        }
			        .price{		
						float:left;
					    display: flex;
			        }
			        .price div{
			            font-size:16px;
						color:#616161;
						letter-spacing:-0.03px;
			            line-height:42px;   
		                margin: 0 auto;   
			        }
			        .price img{
			            width:20px;
			            position: relative;
    					top: 6px;
    					left: 6px;
			        }
			        .insufficient{
			        	opacity:0.8;
						background:#616161;
						border-radius:100px;
						width:142px;
						height:42px;
						float:right;
					    display: flex;
			        }
			        .insufficient div{
			            font-size:14px;
						color:#ffffff;
						letter-spacing:-0.03px;
			            line-height:42px;   
		                margin: 0 auto;   
			        }
			        .insufficient img{
			            width:20px;
			            position: relative;
    					top: 6px;
    					left: 6px;
			        }
			        .buy{
			        	cursor:pointer;
			        	width:42px;
			        	float:right;
		        	    border-radius: 100%;
			        }
			        img{
			        	width:100%;
			        }
			        .category{
			        	font-size:16px;
						color:#a3a3a3;
						letter-spacing:-0.04px;
						text-align:left;
			        }
			        .item{
			        	font-size:18px;
						color:#616161;
						letter-spacing:-0.04px;
						text-align:left;
			        }
			    `}</style>
	        </div>
	    );
	}
}