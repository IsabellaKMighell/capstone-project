import {
    Route, Switch
} from "react-router-dom";
import React, { useState } from "react";
import Home from "../Home"
import BusinessHome from "./BusinessHome"
import IndividualBusiness from "./IndividualBusiness";

function Authenticated({ businesses, user, setReRender, reRender}){
    const [lat, setLat] = useState(null)
	const [long, setLong] = useState(null)
    const[business, setBusiness]=useState([]);
    function handleIndividualBusiness(id){
		console.log(id)
		fetch(`/businesses/${id}`)
		.then(r=>r.json())
		.then(data => {
			console.log(data)
			setBusiness(data)
			setReRender(!reRender)
				
		})
	
	}
    navigator.geolocation.getCurrentPosition(function(position) {
		setLat( position.coords.latitude)
		setLong(position.coords.longitude)
		  });

    return(
    <>
        <Switch>
            <Route exact path="/home">
                <Home/>
            </Route>

            <Route exact path="/businesses">
				<BusinessHome businesses={businesses} user={user} handleIndividualBusiness={handleIndividualBusiness}/>
			</Route>
			<Route exact path="/business_page">
					<IndividualBusiness business={business} lat={lat} long={long} user={user}/>
			</Route>
    
        </Switch>
    </>
    )

}

export default Authenticated;