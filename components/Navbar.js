import { useRouter } from 'next/router';
import Link from "next/link" ;

const Navbar = (props) => {
  return (
  <nav className="navbar navbar-expand-lg ">
    <div className="container ">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">
          <h1>next60</h1>
        </a>
      </div>
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
};

export default Navbar;