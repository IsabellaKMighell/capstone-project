import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./Navbar";
import Header from "./Header"
import { useHistory} from "react-router-dom";
import Unauthenticated from "./unauthenticated/Unauthenticated";
import Authenticated from "./authenticated/Authenticated";


function App() {
	const [user, setUser] = useState(null);
	const [reRender, setReRender] = useState(false);
	const [authChecked, setAuthChecked] = useState(false)
	const [businesses, setBusinesses] = useState([])
	
	const history = useHistory();

	
	useEffect(() => {
		getBusinesses();
		getCurrentUser();
	}, [reRender]);
	function getCurrentUser(){
		fetch("/me")
		.then(res => {
			if (res.ok) {
			  res.json().then((user) => {
				setUser(user)
				setAuthChecked(true)
			  })
			} else {
			  setAuthChecked(true)
			}
		})
	}
	console.log(user)
	
	function getBusinesses(){
		fetch("/businesses")
			.then((response) => response.json())
			.then((businesses) => { setBusinesses(businesses)
			})
			.catch((error) => {
				console.log(error.message);
			});
	}
	
	function handleLogout() {
		fetch("/logout", {
			method: "DELETE",
		}).then(() => {
			setUser(null);
			console.log(`${user.username} logged out!`);

			setReRender(!reRender);
			history.push("/");
		});
	}
	console.log(user)
	
	
	if (!authChecked) { return <div></div> }
	return (
	<div>
		<NavBar handleLogout={handleLogout} user={user} />
		<Header/>
		{user?(
			<Authenticated 
				businesses={businesses} 
				user={user}  
				setReRender={setReRender} 
				reRender={reRender}
			/>
		):(
			<Unauthenticated setUser={setUser} />
			) 
		}

		
		
	</div>
	);
}

export default App;