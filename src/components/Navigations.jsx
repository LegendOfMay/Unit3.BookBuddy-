/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import { Link } from "react-router-dom";
const Navigations = ({onLinkClick}) => {
    // console.log('Nav Here')
    return (
        <div id="nav-bar">
            <Link to={`/Account`}>Account</Link>
            <Link to={`/Books`} onClick={onLinkClick}>Library</Link>
            <Link to={`/Login`}>Login</Link>
            <Link to={`/Register`}>Register</Link>
        </div>
    )
    }
    
    export default Navigations;