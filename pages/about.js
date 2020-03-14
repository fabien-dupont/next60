 
import { attributes, html } from '../content/about.md'
const introductionStyle = {fontSize: 24};

const About = () => (
 
    <div>
      <h1>{attributes.title}</h1>
      <p style={introductionStyle}>
        {attributes.introduction}
      </p>
    </div>
 
);
export default About;