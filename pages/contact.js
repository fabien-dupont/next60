import Header from '../components/Header'
import { attributes, html } from '../content/contact.md'

const sectionStyle = {marginTop:64};
const paragraphStyle = {fontSize: 24,lineHeight:2};

const Contact = () => (<>
  <Header/>
  <section className="section w-100 h-100 p-0" style={sectionStyle}>
    <div className="container-fluid m-0 p-0" >
      <div className = "row m-0 p-0">
        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 m-0 p-4">
          <h1>{attributes.title}</h1>
          <p style={paragraphStyle}>
          {attributes.introduction}
          </p>
        </div>
      </div>
    </div>
  </section>
</>);

export default Contact;