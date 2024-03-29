/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import { Link } from "react-router-dom";
import Books from "./Books";

const Navigations = ({ onLinkClick }) => {
    // console.log('Nav Here')

    return (
        <div id="nav-bar">
            <Link to={`/Account`} className="link">Account</Link>
            <Link to={`/Books`} className="link" onClick={onLinkClick}>Library</Link>
            <Link to={`/Login`} className="link">Login</Link>
            <Link to={`/Register`} className="link">Register</Link>
        </div>
    )
    }
    
    export default Navigations;