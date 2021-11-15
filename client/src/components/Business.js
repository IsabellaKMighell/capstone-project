import {Link} from "react-router-dom"
import { Grid, Button} from 'semantic-ui-react'

function Business({id, name, address, logo, handleIndividualBusiness}) {
    
      

    //below is the list card, each list will be created with the table below. 
    //need to add a border to table
    return (
        <div className="businessesDiv">
            <Grid celled='internally'>
    <Grid.Row>
      <Grid.Column width={3}>
      <img src={logo} alt="Business Logo" className="logo"/>
      </Grid.Column>
      <Grid.Column width={3}>
      <h2>{name}</h2>
      </Grid.Column>
      <Grid.Column width={5}>
      <h4>{address}</h4>
      </Grid.Column>
      <Grid.Column width={3}>
      <Link to="/business_page"><Button onClick={() =>handleIndividualBusiness(id)}>View Details</Button> </Link>
      </Grid.Column>
    </Grid.Row>
    </Grid>
            
            
            
            
            
        </div>
    );
}

export default Business;
