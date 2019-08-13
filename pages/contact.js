
import Layout from '../components/layout'
import {Col, Row} from 'react-bootstrap'


export default () => (
  <Layout>
    <div>
    <div id='container' className='contact'>
      <Row>
        <Col md={{ span: 3, offset: 2 }}>
            <h2>CONTACT</h2>
              </Col>
                </Row>
                    <Row className="justify-content-md-center">
                      <Col md={{ span: 3, offset: 2 }}>
                      <div id='info'>
                      <p>HAVE QUESTIONS?</p>
                      <p>FEEL FREE TO CONTACT ME.</p>
                      <ul>
                        <li>ZITAPREUSS382@GMAIL.COM</li>
                        <li>081 240 6993</li>
                      </ul>
                      </div>
                      </Col>
                      <Col md={6}>
                      <div id='right'>
                      <img src='/static/images/Phone.jpg' alt='Phone' height='380'></img>
                      <div id='colorSquare'>
                      </div>
                      </div>
                      </Col>
                    </Row>
                  </div>
      <style jsx>{`
        @font-face {
          font-family: 'MyriadPro-Regular';
          src: url(../static/fonts/MyriadPro-Regular.otf);
        }
        .contact{
          font-family: MyriadPro-Regular;
          width: 98%;

        }  
        h2 {
          font-family: Alvaro-Condensed;
          font-size: 85px;
          letter-spacing: 5px;
          margin-left: 54px;
          margin-top: 30px;
        }        
        p, ul, li {
          list-style-type: none;
          margin-left: 0;
          padding: 0;
          letter-spacing: 2px;
          font-family: MyriadPro-Regular;
        }  
        li {
          padding-bottom: 10px;
        }
        h2, #info {
          padding: 10px;
        }
        #info {
          margin-top: 15px;
        }
        #right {
          margin-right: 40px;
          margin-top: -60px;
        }
        img {
          display: block;
          float: right;
          margin-right: 100px;
          padding: 4px;
          box-shadow: 50px 45px #C6C5B9;
        }

      `}</style>
        </div>
  </Layout>
)