import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Form } from 'semantic-ui-react'

function CreateNewUser({setUser}) {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
		user: "",
	});
	
	const history = useHistory();

   

	function handleChange(e) {
		let name = e.target.name;
        let value = e.target.value;
		setFormData({ ...formData, [name]: value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		fetch(`/${formData.user}_signup`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: formData.username,
				password: formData.password,
			}),
		}).then(res => {
			if (res.ok) {
				res.json().then(user => {
					setUser(user)
					history.push("/businesses")
				})
			} else {
				res.json().then(errors => {
					console.error(errors)
				})
			}
		})

		setFormData({
			username: "",
			password: "",
            user:"consumer"
		});
		
	}

	const loginForm = (
		<>
			
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
				
	);
	return (
		<div className="formDiv">
			<h1>Create an account</h1>
			<div className="userForm">{loginForm}</div>
			<div className="loginSwitch">
				<h3>Already have an account?</h3>
				<Link to={`/login`}><Button className="loginButton">Login</Button></Link>
			</div>
		</div>
	);
}
export default CreateNewUser;