import React, { useState } from "react";
import { Link } from "react-router-dom";

function CreateNewUser({ setUser, ADMIN}) {
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
            user:""
		});
	}

	const loginForm = (
		<>
			<h1>Create an account</h1>
			<form onSubmit={handleSubmit}>
            <label>Enter your username: 
                <input 
                type="username" 
                name="username" 
                placeholder="username"
                value={formData.username} 
                onChange={handleChange}
                />
            </label>
            <label> Password </label>
				<input
					type="text"
					placeholder="Password"
					name="password"
					value={formData.password}
					onChange={handleChange}
				/>

				<select value={formData.user} onChange={handleChange} name="user">
        			<option value="consumer"> Consumer </option>
        			<option value="business_user"> Business User </option>
				</select>

				<input type="submit"/>
            
			</form>
			
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