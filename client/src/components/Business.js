import {Link} from "react-router-dom"
function Business({id, name, address, logo, handleIndividualBusiness}) {
    
      

    //below is the list card, each list will be created with the table below. 
    //need to add a border to table
    return (
        <div className="businessesDiv">
            <img src={logo} alt="Business Logo" className="logo"/>
            <Link to="/business_page"><button onClick={() =>handleIndividualBusiness(id)}>{name}</button> </Link>
            <h4>{address}</h4>
            
        </div>
    );
}

export default Business;
