import Link from "next/link";
const Footer = () => (
  <footer className="footer pt-4 mt-4  text-center text-md-left">
    <div className="container-fluid">
        © 2020 - <Link href="https://github.com/fabien-dupont"><a>Fabien Dupont</a> </Link>
     </div>
  </footer>
);

export default Footer;