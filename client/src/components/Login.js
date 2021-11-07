import React, { useState } from "react";
import {  Link } from "react-router-dom";

function Login({ setUser}) {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
		user: "",
	});
	
	
	const [errors, setErrors] = useState(null);

	function handleChange(e) {
		let name = e.target.name;
        let value = e.target.value;
		setFormData({ ...formData, [name]: value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		fetch(`/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				user: formData.user,
				username: formData.username,
				password: formData.password,
			}),
		})
			.then((r) => {
				if (r.ok) {
					r.json().then((data) => {
						setUser(data);
					});
				} else {
					r.json().then((err) => {
						setErrors(err.errors);
						console.log(errors);
					});
				}
			});
		
			
		
		
		setFormData({ username: "", password: "", user: "" });
	}

	const loginForm = (
		<>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
					<label>Username</label>
					<input
						type="text"
						placeholder="Username"
						name="username"
						value={formData.username}
						onChange={handleChange}
					/>
				
					<label>Password</label>
					<input
						type="text"
						placeholder="Password"
						name="password"
						value={formData.password}
						onChange={handleChange}
					/>

					<select value={formData.user} onChange={handleChange} name="user">
        				<option value="consumer">Consumer</option>
        				<option value="business_user">Business User</option>
					</select>

					<input type="submit"/>

			</form>

		</>
	);
	return (
		<div>
		<div>{loginForm}</div>
		<Link to={`/new_user`}><button>Create an Account</button></Link>
		</div>
	);
}

export default Login;