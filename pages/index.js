import Layout from '../components/Layout'
import { attributes, html } from '../content/index.md'
const imgURL = "https://source.unsplash.com/random";

const introStyle = {fontSize: 32};
const Index = () => (
  <Layout>
    <div className="container-fluid" >
      <h1 className="text-uppercase">{attributes.title}</h1>
      <br/>
      <div className="mt-2 mb-2" id="zone_api_result" >
        <img width="100%" src={imgURL}/>
      </div>
      <p style={introStyle}>
        {attributes.introduction}
        <a href={attributes.link_url_01} >{attributes.link_name_01}</a>
      </p>
    </div>
  </Layout>
);
export default Index;