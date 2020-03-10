import Layout from '../components/Layout';
import { attributes, html } from '../content/about.md'
const introStyle = {fontSize: 24};

const About = () => (
  <Layout>
    <div>
      <h1>{attributes.title}</h1>
      <p style={introStyle}>
        {attributes.introduction}
      </p>
    </div>
  </Layout>
);
export default About;