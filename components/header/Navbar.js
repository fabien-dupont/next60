const Navbar = (props) => (
  <nav className="navbar navbar-expand-lg fixed-top bg-white">
    <div className="container-fluid">
      {props.children}
    </div>
  </nav>
  );
export default Navbar;