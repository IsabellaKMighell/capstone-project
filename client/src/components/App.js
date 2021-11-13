import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./Navbar";
import Auth from "./Auth";
import Header from "./Header"
import {
	useHistory, Route
} from "react-router-dom";

import Home from "./Home"
import IndividualBusiness from "./IndividualBusiness";
import TimeRemaining from "./TimeRemaining";

function App() {
	const [user, setUser] = useState(null);
	const [reRender, setReRender] = useState(false);
	const [businesses, setBusinesses] = useState([])
	const[business, setBusiness]=useState([]);
	const [lat, setLat] = useState(null)
	const [long, setLong] = useState(null)


	const history = useHistory();

	
	useEffect(() => {
		getBusinesses();
		getCurrentUser();
	}, [reRender]);
	function getCurrentUser(){
		fetch("/me")
			.then((response) => response.json())
			.then((data) => {
				setUser(data);
				console.log(data);
				console.log("RERENDER");
			})
			.catch((error) => {
				console.log(error.message);
			});}
	
	function getBusinesses(){
		fetch("/businesses")
			.then((response) => response.json())
			.then((businesses) => { setBusinesses(businesses)
			})
			.catch((error) => {
				console.log(error.message);
			});
	}
	

	
	navigator.geolocation.getCurrentPosition(function(position) {
		setLat( position.coords.latitude)
		setLong(position.coords.longitude)
		  });

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

	
	function handleLogout() {
		fetch("/logout", {
			method: "DELETE",
		}).then(() => {
			setUser(null);
			console.log(`${user.username} logged out!`);

			setReRender(!reRender);
			history.push("/login");
		});
	}
	

	
	return (
		<div>
		<Header/>
		<NavBar handleLogout={handleLogout} user={user} />
		<Auth setUser={setUser} user={user} />
			<Route path="/businesses">
				<Home businesses={businesses} user={user} handleIndividualBusiness={handleIndividualBusiness}/>
			</Route>
			<Route path="/business_page">
					<IndividualBusiness business={business} lat={lat} long={long} user={user}/>
			</Route>
			
		</div>
	);
}

export default App;