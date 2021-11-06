import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function CreateNewUser({ setUser, ADMIN}) {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
		user: "",
	});
	
	const history = useHistory();

   

	function handleChange(e, { name, value }) {
		setFormData({ ...formData, [name]: value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(formData);
		fetch(`/signup`, {
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
				history.push(`/business_user`);
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
			<h1>Create New User</h1>
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
            <label>Password</label>
				<input
					type="text"
					placeholder="Password"
					name="password"
					value={formData.password}
					onChange={handleChange}
				/>

				<select value={formData.user} onChange={handleChange}>
        			<option value="consumer">Consumer</option>
        			<option value="business_user">Business User</option>
				</select>
            
			</form>
        </>
				
	);
	return (
		<div>{loginForm}</div>
	);
}
export default CreateNewUser;