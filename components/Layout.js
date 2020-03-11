import Header from './Header';
import Footer from './Footer';

const sectionStyle = {minHeight:"96vh"};
const Layout = (props) => (
  <div>
    <Header/>
    <section  style={sectionStyle} className="section w-100 h-100">
      <div className="container-fluid p-4 ">
        {props.children}
      </div>    
    </section>
    <Footer/>
  </div>
);

export default Layout;