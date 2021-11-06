import React, { useState, useEffect } from "react";
import "./App.css";
import Auth from "./Auth";
import BusinessUser from "./BusinessUser"

import {
	Switch,
	Route,
	Redirect,
	useHistory,
} from "react-router-dom";
import NavBar from "./Navbar";

function App() {
	let ADMIN = null;
	const [user, setUser] = useState(null);
	const [reRender, setReRender] = useState(false);

	const history = useHistory();
	
	useEffect(() => {
		fetch("/me")
			.then((response) => response.json())
			.then((data) => {
				setUser(data);
				console.log(data);
				console.log("RERENDER");
			})
			.catch((error) => {
				console.log(error.message);
			});
	}, [reRender]);
	

	function setAdmin(data) {
		console.log(data);
		if (data.hasOwnProperty("business_user")) {
			ADMIN = "business_user";
		} else if (data.hasOwnProperty("consumer")) {
			ADMIN = "consumer";
		} else {
			ADMIN = null;
		}
	}

	function handleLogout() {
		fetch("/logout", {
			method: "DELETE",
		}).then(() => {
			setUser(null);
			ADMIN = null;
			console.log(`${user.username} logged out!`);

			setReRender(!reRender);
			history.push("/login");
		});
		ADMIN = null;
	}

	if (user) {
		setAdmin(user);
		console.log(user);
		console.log(ADMIN);
	}
	return (
		<div className="App">
		<NavBar handleLogout={handleLogout} user={user} ADMIN={ADMIN} />
			
		<Auth setUser={setUser} user={user} ADMIN={ADMIN} />
		</div>
	);
}

export default App;