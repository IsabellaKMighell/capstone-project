import CreateNewUser from "./CreateNewUser";
import Login from "./Login";
import { BrowserRouter as Route , Switch} from "react-router-dom";

function Auth({ setUser, user, ADMIN }) {
	// if (!user) return <Login setUser={setUser} />;
	// if (user) return <Parent user={user} />;

	return (
		<Switch>
		<Route path="/login">
			<Login setUser={setUser} ADMIN={ADMIN} user={user}/>
		</Route>
		<Route exact path="/new_user">
			<CreateNewUser setUser={setUser} ADMIN={ADMIN} user={user}/>
		</Route>
		</Switch>
	);
}
export default Auth;