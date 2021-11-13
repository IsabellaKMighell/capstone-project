import {Link} from "react-router-dom"
import { Button} from 'semantic-ui-react'

function NavBar({handleLogout, user}) {
	

	return (
		<>
			<div>
						
						<Link to="/businesses">
							<Button>Businesses</Button>
						</Link>
						
					
						<Link to="/" onClick={handleLogout}>
							<Button>Logout</Button>
						</Link>
				
						<Link to="/login">
						<Button>Login</Button>
						</Link>
				
			</div>
		</>
	);
}

export default NavBar;