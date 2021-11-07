import React, { useState, useEffect } from "react";
import "./App.css";
import Auth from "./Auth";

import {
	useHistory, Route
} from "react-router-dom";
import NavBar from "./Navbar";
import Home from "./Home"

function App() {
	const [user, setUser] = useState(null);
	const [reRender, setReRender] = useState(false);
	const [businesses, setBusinesses] = useState([])
	


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

	/*
	//geolocation functionality
	const [latitude, setLatitude] = useState(null)
	const [longitude, setLongitude] = useState(null)
	navigator.geolocation.getCurrentPosition(function(position) {
		setLatitude( position.coords.latitude)
		setLongitude(position.coords.longitude)
		  });
	
	
	function setLocation(longitude, latitude){
		fetch("/consumers",{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				longitude: {longitude},
				latitude: {latitude},
			}),
		})
			.then((r) => r.json())

	}*/
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
		<div className="App">
		<h1>Succession</h1>
		<NavBar handleLogout={handleLogout} user={user} />
		<Auth setUser={setUser} user={user} />
			<Route path="/consumers">
				<Home businesses={businesses}/>
			</Route>
		</div>
	);
}

export default App;