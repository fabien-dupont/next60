const sectionStyle = {marginTop:64};

const Section = (props) => (<>
  <section className="section w-100 h-100 p-0" style={sectionStyle}>
    <div className="container-fluid m-0 p-0" >
      <div className = "row m-0 p-0">
        {props.children}
      </div>
    </div>        
  </section>
</>);
export default Section;