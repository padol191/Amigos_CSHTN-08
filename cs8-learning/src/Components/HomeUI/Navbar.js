import { Link } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="links">
                    <div className="link-item1 ">
                        <h1>#ES</h1>
                    </div>
                    <div className="link-item2">
                        <Link to="/">
                            <a>Home</a>
                        </Link>
                    </div>
                    
                    <div className="link-item3">
                        <Link to="/forums">
                            <a>Forum</a>
                        </Link>
                    </div>
                    <div className='link-item4'>
                        <Link to= "/login">
                            <a>Log In</a>
                        </Link>
                    </div>  
                </div>
            </nav>
        </div> 
     );
}
 
export default Navbar;