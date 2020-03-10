import Header from './Header';
import Footer from './Footer';
const Layout = (props) => (
  <div>
    <Header/>
    <section className="section">
      <div className="container  h-100  justify-content-center align-items-center">
        {props.children}
      </div>
    </section>
    <Footer/>

  </div>
);
export default Layout;