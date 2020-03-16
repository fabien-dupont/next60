import { attributes, html } from '../config/seo.md' 

const Seo = () => (<>
    <title>{attributes.websiteTitle}</title>
    <meta name="description"
     content={attributes.websiteDescription}
    />
</>);
export default Seo;