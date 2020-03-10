import Layout from '../components/Layout';
import { attributes, html } from '../content/contact.md'
const introStyle = {fontSize: 24};

const Contact = () => (
  <Layout>
    <div> 
      <h1>{attributes.title}</h1>
      <p style={introStyle}>
        {attributes.introduction}
      </p>
    </div>
  </Layout>
);

export default Contact;