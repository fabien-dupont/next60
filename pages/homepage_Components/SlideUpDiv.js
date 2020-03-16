
import $ from "jquery";
const slideUp_Div_Style= {zIndex:11,marginTop:"25vh",position:"absolute",backgroundColor:"rgba(255,255,255,0.5)" };
const SlideUpDiv= (props) =>(<>
  <div style={slideUp_Div_Style} className="slideUp 100-w p-4" id="slideUp_Div01">
    {props.children}
  </div>
  <style jsx>{`
.slideUp {
  animation-name: slideUp;
  -webkit-animation-name: slideUp;
  animation-duration: 1s;
  -webkit-animation-duration: 1s;
  visibility: visible;
}

@keyframes slideUp {
  0% {
      opacity: 0;
      -webkit-transform: translateY(70%);
  }
  100% {
      opacity: 1;
      -webkit-transform: translateY(0%);
  }
}

@-webkit-keyframes slideUp {
  0% {
      opacity: 0;
      -webkit-transform: translateY(70%);
  }
  100% {
      opacity: 1;
      -webkit-transform: translateY(0%);
  }
}

.slideUp {
  //
 postion:absolute;
}
`}</style>
</>);
export default SlideUpDiv;