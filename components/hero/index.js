// Assets
import img from '../../assets/header-x1.png'

export default class Layout extends React.Component {
  render() {
    return <div>
      <div className="parallax">
        <h1>Electronics</h1>
      </div>  
      
      <style jsx>{`
        .parallax{
          width: 100%;
          height:412px;
          background-image: url(${img});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: right;
          padding-top:80px;
        }  
        h1{          
          font-size: 64px;
          color: #ffffff;
          text-align: left;
          padding-top: 284px;
          padding-left:132px;
          margin: 0;
        }  
        @media only screen and (max-width: 600px) {
          .parallax{            
            background-position: left;
          } 
          h1{          
            font-size: 44px;
            text-align: left;
            padding-left: 22px;
          }      
        }    
      `}</style>

    </div>    
  }
}