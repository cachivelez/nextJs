import {Link} from'../../routes';
import Head from 'next/head'

// Assets
import logo from '../../assets/aerolab-logo.svg'

export default class LayoutFull extends React.Component {
  render() {
    const { children, title } = this.props

    return <div>
      <Head>
        <title>{ title }</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      { children } 

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');
        body {
          margin: 0;
          font-family: 'Source Sans Pro', sans-serif;
          background: white;
        }
      `}</style>
    </div>
  }
}