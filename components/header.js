import Link from 'next/link'
import Head from 'next/head'


const linkStyle = {
  padding: '15px',
  textDecoration: 'none',
  color: 'black',
  marginTop: '50px',
}


const Header = () => (
    <div className='nav'>
        <h3 >ZITA PREUSS</h3>
        <div className='links'>
        <Link href="/">
          <a style={linkStyle}>HOME</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>ABOUT</a>
        </Link>
        <Link href="/projects">
          <a style={linkStyle}>PROJECTS</a>
        </Link>
        <Link href="/contact">
          <a style={linkStyle}>CONTACT</a>
        </Link>
        </div>
        <style jsx>{`
    .nav {
      display: 'inline';
      background-color: white;
      margin-top: 15px;
      border-bottom: 1px solid #f4f4f4;
    }
    @font-face {
      font-family: 'Alvaro-Condensed';
      src: url(../static/fonts/Alvaro-Condensed.otf);
    }
    @font-face {
      font-family: 'MyriadPro-Regular';
      src: url(../static/fonts/MyriadPro-Regular.otf);
    }
    h3 {
      padding-right: 14px;
      font-family: Alvaro-Condensed;
      font-size: 38px;
      font-style: normal;
      margin-left: 60px;
      padding-top: 20px;
    }
    .links {
      font-family: MyriadPro-Regular;
      margin-top: 33px;
      margin-left: 20px;
      font-size: 16;
      letter-spacing: 2px;
    }

  `}</style>
    </div>


)

export default Header