import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form } from 'semantic-ui-react'

function CreateNewUser({ setUser}) {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
		user: "",
	});
	
	

   

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
		})
			.then((r) => r.json())
			.then((data) => {
				setUser(data);	
				
				
			});
		// .catch((err) => setUser(null));

		setFormData({
			username: "",
			password: "",
            user:"consumer"
		});
	}

	const loginForm = (
		<>
			<h1>Create an account</h1>
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
		<div>
			<div>{loginForm}</div>
			<div>
				Already have an account?
			<Link to={`/login`}><button>Login</button></Link>
			</div>
		</div>
	);
}
export default CreateNewUser;