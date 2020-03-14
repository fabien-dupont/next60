 
import { attributes, html } from '../content/contact.md'
const introStyle = {fontSize: 24};

const Contact = () => (
 
    <div> 
      <h1>{attributes.title}</h1>
      <p style={introStyle}>
        {attributes.introduction}
      </p>
    </div>
 
);

export default Contact;