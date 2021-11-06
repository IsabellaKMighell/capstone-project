import React, { useState, useEffect } from "react";
import "./App.css";
import Auth from "./Auth";

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
		if (data.hasOwnProperty("businesses")) {
			ADMIN = "business_user";
		} else if (data.hasOwnProperty("lines")) {
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
			<Switch>
				<Route exact path="/">
					{user ? (
						<Redirect to="/business_user" />
					) : (
						<Redirect to="/login" />
					)}
				</Route>
				{user ? (
					<>
						{ADMIN === "business_user" ? (
							<div>
								<Route exact path="/business_user">
								</Route>
							</div>
						) : (
							<>
								{ADMIN === "consumer" ? (
									<>
										<Route exact path="/consumer">
										</Route>
									</>
								) : null}
							</>
						)}
					</>
				) : null}
				;
				<Auth setUser={setUser} user={user} ADMIN={ADMIN} />
			</Switch>
		</div>
	);
}

export default App;