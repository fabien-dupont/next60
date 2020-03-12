import Layout from '../components/Layout'
import { attributes, html } from '../content/index.md'
const imgURL = "https://source.unsplash.com/random";

const introStyle = {fontSize: 32};
const Index = () => (
  <Layout>
    <div className="container-fluid" >
      <div className = "row flex-row ">
        <div id="zone_api_result"  className="p-4 ml-auto mr-0">
           
            <img src={imgURL} height={320} /> 
        </div>  
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 p-2 mr-auto ml-2">
        <h1 className="text-uppercase">{attributes.title}</h1>
          
          <p style={introStyle}>
            {attributes.introduction}
            <a href={attributes.link_url_01} >{attributes.link_name_01}</a>
          </p>
        </div>
       
      
      <style jsx>
      {`
        img
        {
          maxWidth:320px;
          
          display:cover;

        }
      `}
      
      </style>
      </div>

    </div>
  </Layout>
);
export default Index;