const splashDivContainer = { position:"fixed",zIndex:10,overflowY:"hidden"}
const imgURL = "https://source.unsplash.com/random";
const imgStyle = {display: "cover",bottom:0,minWidth:360,width:"100%"};

const SplashDiv = () => (<>
  <div id="SplashDiv"  className="w-100 m-0 p-0" style={splashDivContainer}>
    <img className="p-0 m-0" src={imgURL}  style={imgStyle}/> 
  </div>  
</>);
export default SplashDiv;