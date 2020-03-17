const Div_Style= {overflowY:"hidden",zIndex:11,position:"absolute",top: 128,backgroundColor:"rgba(0,0,0,0.6)",color:"#fff" };
const TextDiv= (props) =>(<>
  <div style={Div_Style} className="100-w p-4" id="_Div01">
    {props.children}
  </div>
</>);
export default TextDiv;
