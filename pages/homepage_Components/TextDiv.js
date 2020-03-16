const Div_Style= {overflowY:"hidden",zIndex:11,position:"absolute",bottom:64,backgroundColor:"rgba(255,255,255,0.9)" };
const TextDiv= (props) =>(<>
  <div style={Div_Style} className="100-w p-4" id="_Div01">
    {props.children}
  </div>
</>);
export default TextDiv;
