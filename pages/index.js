import Header from '../components/Header'
import Section from '../components/Section'
import SplashDiv from "./homepage_Components/SplashDiv"
import TextDiv from './homepage_Components/TextDiv'
import { attributes, html } from '../content/index.md' 

const paragraphStyle = {fontSize: 24,lineHeight:2}; 
const Index = () => (<>
  <Header/>
  <Section>
    <SplashDiv/> 
    
    <TextDiv>
      <h1 className="text-uppercase">{attributes.title}</h1>
      <p className="text-uppercase text-strong" style={paragraphStyle}>
        {attributes.introduction}
        <a href={attributes.link_url_01} >{attributes.link_name_01}</a>
      </p>
    </TextDiv>
  </Section>
</>);

export default Index;