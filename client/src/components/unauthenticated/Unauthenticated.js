import {
	 Route, Switch
} from "react-router-dom";
import Home from "../Home"
import Login from "./Login";
import CreateNewUser from "./CreateNewUser";

function Unauthenticated({setUser}){
    return(
    <>
        <Switch>
            <Route exact path="/home">
                <Home/>
            </Route>

            <Route exact path="/login">
                <Login setUser={setUser} />
            </Route>

            <Route exact path="/new_user">
                <CreateNewUser setUser={setUser} />
            </Route>
    
        </Switch>
    </>
    )

}

export default Unauthenticated;