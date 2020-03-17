const splashDivContainer = { position:"absolute",zIndex:10,overflowY:"hidden"}
const imgURL = "https://source.unsplash.com/random";
const imgAlt = "Unsplash";
const imgStyle = {display: "cover",position:"fixed",top:64,/*width:"100%",*/height:"100%"/*,minHeight:640*/};

const UnsplashDiv = () => (<>
  <div id="SplashDiv"  className="w-100 m-0 p-0" style={splashDivContainer}>
    <img className="p-0 m-0" src={imgURL}  style={imgStyle} alt={imgAlt}/> 
  </div>  
</>);

export default UnsplashDiv;