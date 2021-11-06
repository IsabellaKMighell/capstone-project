import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Login from "./Login";

function NavBar({ retrieveLoggedInStatus, setLoggedInStatus, loggedInStatus, setUser }) {
	

	return (
		<div>
			<Menu>
				<Link to="/">
					<Menu.Item
						name="home"
						// active={activeItem === "home"}
						// onClick={handleItemClick}
					>
						Homepage
					</Menu.Item>
				</Link>
            {loggedInStatus ? (
				<Link to="/user_profile">
					<Menu.Item
						name="user_profile"
					>
						User Profile
					</Menu.Item>
				</Link>
                ) : null}

				<Menu.Item style={{ float: "right" }}>
					<Login
						retrieveLoggedInStatus={retrieveLoggedInStatus}
						loggedInStatus={loggedInStatus}
                        setLoggedInStatus={setLoggedInStatus}
                        setUser={setUser}
					/>
				</Menu.Item>
			</Menu>
		</div>
	);
}

export default NavBar;