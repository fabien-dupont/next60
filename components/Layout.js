import Header from './Header';
const Layout = (props) => (
  <div>
    <Header/>
    <div className="container ">
      <section className="section">
        <div className="h-100 d-flex justify-content-center align-items-center">
          {props.children}
        </div>
      </section>
    </div>
  </div>
);
export default Layout;