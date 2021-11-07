import {Link} from "react-router-dom"

function NavBar({handleLogout, user}) {
	

	return (
		<>
			<div>
				
						<Link to="/consumers">
							<button>Home</button>
						</Link>
						
					
						<Link to="/" onClick={handleLogout}>
							<button>Logout</button>
						</Link>
				
						<Link to="/login">
						<button>Login</button>
						</Link>
				
			</div>
		</>
	);
}

export default NavBar;