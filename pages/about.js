import Link from 'next/link'
import Layout from '../components/layout'
import {Container, Row, Col} from 'react-bootstrap'

export default () => (
  <Layout>
    <div className='container'>
        <Row>
          <Col md={6}>
            <div id='descrip'>
          <h3>ABOUT</h3>
          <p>Hello, I'm a recent graduate of a Full Stack Webdeveloper course. <br/>This portfolio will display my most recent work.
          What I love and am best at is working on frontend development, creating and coding beautiful websites is my passion.
          I hope you like what you see. Thank you for your time.</p>
          </div>
          </Col>
          <Col md={6}>
          <img src='/static/images/Collage.png' alt='Me' height='400'></img>
          </Col>
          </Row>
    </div>
    <style jsx>{`
      .container {
        padding: 80px;
      }
      #descrip {
        text-align: center;

      }
      h3 {
        letter-spacing: 3px;
			  font-family: 'MyriadPro-Regular';
        font-size: 30px;
        margin-top: 30px;
        padding: 30px;
      }
      p {
        font-family: Helvetica;
        text-align: center;
        color: #919191;
      }
    
    `}</style>
  </Layout>
)