import Header from '../components/Header'
import { attributes, html } from '../content/index.md'

const imgURL = "https://source.unsplash.com/random";
const imgStyle = {display: "contain",position:"relative" };
const sectionStyle = {marginTop:64};
const paragraphStyle = {fontSize: 24,lineHeight:2};

const Index = () => (<>
  <Header/>
  <section className="section w-100 h-100 p-0" style={sectionStyle}>
    <div className="container-fluid m-0 p-0" >
      <div className = "row m-0 p-0">
        <div id="zone_api_result"  className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 m-0 p-0">
          <img className="p-0 m-0" src={imgURL} width={"100%"} style={imgStyle}/> 
        </div>        
        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 m-0 p-4">
          <h1 className="text-uppercase">{attributes.title}</h1>
          <p className="text-uppercase text-strong" style={paragraphStyle}>
            {attributes.introduction}
            <a href={attributes.link_url_01} >{attributes.link_name_01}</a>
          </p>
        </div>
      </div>
    </div>        
  </section>
</>);
export default Index;