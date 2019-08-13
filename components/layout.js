import Link from 'next/link'

import Head from 'next/head'
import Header from './header'

const layoutStyle = {
    margin: 0,
	padding: 0,
}


const Layout = (props) => (
   <div>
	<Head>
	   <link
  			rel="stylesheet"
  			href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  			integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  			crossOrigin="anonymous"
		/>
	</Head>
	<Header />
  	<div style={layoutStyle}>

    	{props.children}
  	</div>
  </div>
)

export default Layout