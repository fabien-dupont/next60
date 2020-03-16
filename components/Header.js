import Head from 'next/head';
import Seo from "./Seo";
import Navheader from "./header/Navheader" ;
import Navlist from "./header/Navlist" ;
import Navbar from './header/Navbar';
const Header = () => (<>
  <Head>
    <Seo/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"/> 
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"/>
  </Head>
  <Navbar>
      <Navheader/>
      <Navlist/>
  </Navbar>
</>);

export default Header;
