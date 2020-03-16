const imgURL = "https://source.unsplash.com/random";
const imgStyle = {display: "cover",position:"relative",minHeight:480,width:"100%"};
const splashDivContainer = {zIndex:10, minHeight:"100%"}
const SplashDiv = () => (<>
  <div id="SplashDiv"  className="w-100 m-0 p-0" style={splashDivContainer}>
    <img className="p-0 m-0" src={imgURL}  style={imgStyle}/> 
  </div>  
</>);
export default SplashDiv;