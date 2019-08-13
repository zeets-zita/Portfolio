import Link from 'next/link'
import Layout from '../components/layout'
import { Container, Row, Col } from 'react-bootstrap';

export default () => (
  <Layout>
    <div className='projects'>
      <div id='head'>
    <h2>PROJECTS</h2>
    <p>This is a list showcasing all my latest work. From basic html and javascript, to larger applications built with React and Node.
      Links to my code are provided below, just by simply clicking on the project name.  </p>
    </div>
    <Container>
      <Row id="firstRow">
        <Col xs lg="4">
          <img src='/static/images/Puzzle.jpg' alt='puzzle' height='300'></img>
          <div className="vl"></div>
          <p><a href="https://github.com/zeets-zita/Card-match" target="_blank">MEMORY GAME</a></p>
          </Col>
        <Col xs lg="4">
          <img src='/static/images/Itunes.jpg' alt='itunes' height='300'></img>
          <div className="vl"></div>
          <p><a href="https://github.com/zeets-zita/itunes-search" target="_blank">ITUNES API</a></p>
          </Col>
        <Col xs lg="4">
          <img src='/static/images/Weather.jpg' alt='weather' height='300'></img>
          <div className="vl"></div>
          <p><a href="https://github.com/zeets-zita/ReactApi" target="_blank">WEATHER API</a></p>
        </Col>
      </Row>
      <Row className="secondRow">
      <Col>
      <img src='/static/images/Shopping.jpg' alt='shopping' height='300'></img>
      <div className="vl"></div>
      <p><a href="https://github.com/zeets-zita/ShoppingCart" target="_blank">ONLINE SHOP</a></p>
      </Col>
      <Col><img src='/static/images/Loction.jpg' alt='location' height='300'></img>
      <div className="vl"></div>
      <p><a href="https://github.com/zeets-zita/Next.Js-API" target="_blank">NEXT.JS API</a></p>
      </Col>
      <Col>
      <img src='/static/images/Pencil.jpg' alt='pencil' height='300'></img>
      <div className="vl"></div>
      <p><a href="https://github.com/zeets-zita/eventage" target="_blank">EVENTS</a></p>
      </Col>
      </Row>
    </Container>
    </div>
    <style jsx>{`
    .projects {
      background-color: #f4f4f4; 
      padding: 20px;
      
    }
    img {
      padding: 20px;
      margin-left: 45px;
      padding-bottom: 50px;
    }
    p {
      font-family: Helvetica;
      text-align: center;
      color: #919191;
      font-size: 14px;
      letter-spacing: 1px;

    }
    h2 {
      font-family: MyriadPro-Regular;
      letter-spacing: 4px;
      font-size: 36px;
      margin-top: 40px;
      text-align: center;
    }
    #head {
      padding: 30px;
      padding-bottom: 40px;
      width: 58%;
      margin: 0 auto;
      max-width: 100%;
      line-height: 1.5;
    }
    a {
      color: #919191;
    }
    .vl {
      border-left: 5px solid black;
      height: 55px;
      position: absolute;
      left: 50%;
      margin-left: -3px;
      border-radius: 10px;
      top: 0;
      margin-top: 230px;
    }

  `}</style>
  </Layout>
)