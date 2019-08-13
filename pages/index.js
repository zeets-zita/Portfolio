
import Link from 'next/link'
import Layout from '../components/layout'

const background = {
	background: "url('../static/images/Desk.jpg')",
	backgroundRepeat: 'no-repeat, repeat',
	backgroundSize: 'cover',
	height: '580px',
	marginTop: '-8px'
}

export default () => (
	<Layout>
  		<div style={background}>
	    <h1>WELCOME</h1>
		</div>
		<style jsx>{`
		h1 {
			text-align: center;
			padding-top: 250px;
			letter-spacing: 5px;
			font-family: Alvaro-Condensed;
			font-size: 100px;
			animation: fadein 2s;
		}
		@-webkit-keyframes fadein {
			from {
			  opacity: 0;
			  -webkit-transform: translate3d(-50%, 0, 0);
			  transform: translate3d(-50%, 0, 0);
			}
		  
			to {
			  opacity: 1;
			  -webkit-transform: none;
			  transform: none;
			}
		  }
		  @keyframes fadein {
			from {
			  opacity: 0;
			  margin-left: 500px;
			  -webkit-transform: translate3d(-50%, 0, 0);
			  transform: translate3d(-50%, 0, 0);
			}
		  
			to {
			  opacity: 1;
			  -webkit-transform: none;
			  transform: none;
			}
		  }
		  
		  .fadein {
			-webkit-animation-name: fadein;
			animation-name: fadein;
		  }

		`}</style>
  </Layout>
  
)