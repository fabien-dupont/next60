 
import { attributes, html } from '../content/contact.md'
const introductionStyle = {fontSize: 24};

const Contact = () => (
 
    <div> 
      <h1>{attributes.title}</h1>
      <p style={introductionStyle}>
        {attributes.introduction}
      </p>
    </div>
 
);

export default Contact;