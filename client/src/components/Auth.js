import CreateNewUser from "./CreateNewUser";
import Login from "./Login";
import { BrowserRouter as Route } from "react-router-dom";

function Auth({ setUser, user, ADMIN }) {
	// if (!user) return <Login setUser={setUser} />;
	// if (user) return <Parent user={user} />;

	return (
		<>
			<Route exact path="/login">
				<Login setUser={setUser} ADMIN={ADMIN} />
			</Route>
			<Route exact path="/add_new_user">
				<CreateNewUser setUser={setUser} ADMIN={ADMIN} />
			</Route>
		</>
	);
}
export default Auth;