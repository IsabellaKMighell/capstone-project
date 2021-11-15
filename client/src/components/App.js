import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./Navbar";
import Header from "./Header"
import {
	useHistory, Route, Switch
} from "react-router-dom";
import Home from "./Home"
import CreateNewUser from "./CreateNewUser";
import Login from "./Login";
import BusinessHome from "./BusinessHome"
import IndividualBusiness from "./IndividualBusiness";


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
				setUser(null)
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
			history.push("");
		});
	}
	console.log(user)
	

	
	return (
	<div>
		<NavBar handleLogout={handleLogout} user={user} />
		<Header/>
		<Switch>

			<Route exact path="/login">
				<Login setUser={setUser}  user={user}/>
			</Route>
			<Route exact path="/new_user">
				<CreateNewUser setUser={setUser}  user={user}/>
			</Route>
			
			<Route exact path="/businesses">
				<BusinessHome businesses={businesses} user={user} handleIndividualBusiness={handleIndividualBusiness}/>
			</Route>
			<Route exact path="/business_page">
					<IndividualBusiness business={business} lat={lat} long={long} user={user}/>
			</Route>
			<Route exact path="">
				<Home />
			</Route>
		</Switch>
	</div>
	);
}

export default App;