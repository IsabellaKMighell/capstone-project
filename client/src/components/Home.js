import React from "react";
import BusinessList from "./BusinessList";

function Home({businesses, handleIndividualBusiness}) {
	

	return (
		<div>
            <h2>Welcome to line succession</h2>
            
			<BusinessList businesses={businesses} handleIndividualBusiness={handleIndividualBusiness}/>
		
				
			
		</div>
	);
}

export default Home;