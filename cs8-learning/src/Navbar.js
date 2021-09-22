const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>App Name</h1>
            <div className="links">
                <a href="">Home</a>
                <a href="" style={{
                    color: "white",
                    backgroundColor: "#DEC362",
                    borderRadius: '3px'}}>Log In</a>
            </div>
        </nav>
     );
}
 
export default Navbar;