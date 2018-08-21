import React from 'react'
import {Link} from'../routes';
import LayoutSimple from '../components/layout/LayoutSimple'

// Assets
import error from '../assets/error.png'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    const { statusCode } = this.props

    return (
      <LayoutSimple>
        { statusCode === 404 ?
          <div className="message">
            <img src={error} />
            <h1>No encontramos la página solicitada</h1>
            <p><Link route="/"><a>Volver al inicio</a></Link></p>
          </div>
          :
          <div className="message">
            <img src={error} />
            <h1>Tuvimos un problema</h1>
            <p>Intentá nuevamente en unos segundos</p>
          </div>
         }
         <style jsx>{`
          img{
            width: 250px;
          }
          .message {
            padding: 100px 30px;
            text-align: center;
          }
          h1 {
            font-size:24px;
            color:#616161;
            letter-spacing:-0.15px;
            line-height:48px;
            text-align:left;
            text-align:center;
          }
          a, p{
            font-size:16px;
            color:#a3a3a3;
            letter-spacing:-0.04px;
            text-align:center;
          }
         `}</style>
      </LayoutSimple>
    )
  }
}