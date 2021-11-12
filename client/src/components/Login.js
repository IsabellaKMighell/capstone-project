import React, { useState } from "react";
import {  Link } from "react-router-dom";
import { Button, Form } from 'semantic-ui-react'

function Login({ setUser}) {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
		user: "consumer",
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
			
  				<Form onSubmit={handleSubmit}>
    			<Form.Field>
      				<label>Username</label>
     		 		<input type='text'
						placeholder='Username'
						name='username'
						value={formData.username}
						onChange={handleChange} />
    			</Form.Field>
    			<Form.Field>
      				<label>Password</label>
      				<input type='text'
						placeholder='Password'
						name='password'
						value={formData.password}
						onChange={handleChange}/>
    			</Form.Field>
   
    			<Button type='submit'>Submit</Button>
  			</Form>
		</>
		)

		
	return (
		<div>
		<div>{loginForm}</div>
		<Link to={`/new_user`}><Button>Create an Account</Button></Link>
		<></>
		</div>
	);
}

export default Login;