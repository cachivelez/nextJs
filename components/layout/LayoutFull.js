import {Link} from'../../routes';
import Head from 'next/head'

// Assets
import logo from '../../assets/aerolab-logo.svg'
import coin from '../../assets/icons/coin.svg'

export default class LayoutFull extends React.Component {
  render() {
    const { children, title, user, coins, eventAddCoins } = this.props
    
    return <div>
      <Head>
        <title>{ title }</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      <header>
        <div className="content">
          <Link route="/">
            <a>
              <img className="logo" src={logo} alt="logo" />
            </a>
          </Link>  
          <div className="user-info">      
            <div className="user">{user}</div>   
            <div className="coins" onClick={e => eventAddCoins()}>
              <div><div><span>{coins}</span><img src={coin} alt="coin" /></div></div>            
            </div> 
          </div> 
        </div>  
      </header>

      { children } 

      <style jsx>{`
        header {
          background: #fff;
          position:fixed;
          width:100%;
          box-shadow:2px 2px 4px 0 rgba(0,0,0,0.10);
          z-index:99;
        }
        .content{
          padding: 16px 42px;
        }
        .logo{  
          width:48px;      
        }
        .user-info{
          float:right;
        }
        .user{
          float:left;
          font-size:24px;
          color:#616161;
          letter-spacing:-0.15px;
          line-height:48px;
          text-align:left;
          margin-right:18px;
        }
        .coins{
          float:right;
          background:#ededed;
          border-radius:100px;
          width:103px;
          height:48px;
          margin: 0 auto;
          cursor:pointer;
        }
        .coins div{
          font-size:24px;
          color:#616161;
          letter-spacing:-0.15px;
          line-height:48px;   
          margin-right: 18px;
          text-align:right;    
        }
        .coins img{
          position: absolute;
          top: calc(48px /2);
        }
      `}</style>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');
        body {
          margin: 0;
          font-family: 'Source Sans Pro', sans-serif;
          background: white;
        }
        .container{
          padding:67px 132px;
        }
        .disabled{
          display:none;
        }
        @media only screen and (max-width: 600px) {
          .container{
            padding:15px;
          }  
          .user{
            display:none;
          }   
        } 
      `}</style>
    </div>
  }
}