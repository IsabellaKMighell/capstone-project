import {Link} from "react-router-dom"
import React from 'react'
import {
	Icon,
	Menu,
  } from 'semantic-ui-react'

function NavBar({handleLogout, user}) {
	console.log(user)

	return (
	<Menu horizontal className="navbar">
		
	  
      	<Link to="">
      		<Menu.Item as='a'>
        		<Icon name='home' />
        		Home
    		</Menu.Item>
    	</Link>
		
		<Link to="" onClick={handleLogout}>	
      		<Menu.Item as='a'>
        		<Icon name='sign-out' />
        		Logout
      		</Menu.Item>
      	</Link>

    	<Link to="/login">
      		<Menu.Item as='a'>
        		<Icon name='sign-in' />
        		Login
      		</Menu.Item>
      	</Link>

		
		  
		
	
		<Link to="/businesses">
			<Menu.Item as='a'>
        		<Icon name='map outline' />
        		Businesses
    		</Menu.Item>
    	</Link>

    	
			
	</Menu>
	);
}

export default NavBar;


