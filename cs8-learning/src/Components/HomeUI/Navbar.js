import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            
            <nav className="navbar">
            <h1>App Name</h1>
                <div className="links">
                <Link to="/">
                <a>Home</a>
                </Link>
                <Link to= "/login">
                <a style={{
                    color: "white",
                    backgroundColor: "#DEC362",
                    borderRadius: '3px'}}>Log In</a>
                </Link>
            </div>
        </nav>
        </div> 
     );
}
 
export default Navbar;