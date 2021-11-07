import React from "react";
import BusinessList from "./BusinessList";
function Home({businesses}) {

	return (
		<div>
            <h2>Welcome to line succession</h2>
            
			<BusinessList businesses={businesses}/>
		</div>
	);
}

export default Home;