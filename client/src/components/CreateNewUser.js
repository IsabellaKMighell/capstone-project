import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

function CreateNewUser({ setUser, ADMIN}) {
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
		console.log(formData);
		ADMIN = formData.user;
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