import BusinessList from "./BusinessList";
import {useState} from 'react';
import Search  from "./Search";

function BusinessHome({businesses, handleIndividualBusiness}) {
	const[search,setSearch]=useState("")

	return (
		<main>
            <Search search={search} setSearch={setSearch}/>
			<BusinessList businesses={businesses} handleIndividualBusiness={handleIndividualBusiness} search={search}/>
		
			
		</main>
	);
}

export default BusinessHome;