import Link from "next/link" ;
import Navheader from "./Navheader" ;
const Navbar = () =>   (
  <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
      <Navheader/>
      
      <ul className="nav navbar-nav flex-row">
        <li className="m-auto p-2">
          <Link href="/"><a>Home</a></Link>
        </li>
        <li className="m-auto p-2">
          <Link href="about"><a>About</a></Link>
        </li>
        <li className="m-auto p-2">
          <Link href="contact"><a>Contact</a></Link>
        </li>
      </ul>
    </div>
  </nav>
  );
 

export default Navbar;