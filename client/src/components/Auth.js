import CreateNewUser from "./CreateNewUser";
import Login from "./Login";
import { BrowserRouter as Route , Switch} from "react-router-dom";

function Auth({ setUser, user}) {
	// if (!user) return <Login setUser={setUser} />;
	// if (user) return <Parent user={user} />;

	return (
		<Switch>
		<Route path="/login">
			<Login setUser={setUser}  user={user}/>
		</Route>
		<Route exact path="/new_user">
			<CreateNewUser setUser={setUser}  user={user}/>
		</Route>
		</Switch>
	);
}
export default Auth;