import Layout from '../components/Layout'
import { attributes, html } from '../content/index.md'
const introStyle = {fontSize: 32};
const Index = () => (
  <Layout>
    <div>
      <h1 className="text-uppercase">{attributes.title}</h1>
      <p style={introStyle}>
        {attributes.introduction}
      </p>
    </div>
  </Layout>
);
export default Index;