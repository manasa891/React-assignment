import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <ul>
               <li> <NavLink exact="true" activeclassname='active' to='/'>Users</NavLink></li>
               {/* <li> <NavLink activeClassName='active' to='/about'>About</NavLink></li> */}
            </ul>
        </>
    )
}

export default Navbar;