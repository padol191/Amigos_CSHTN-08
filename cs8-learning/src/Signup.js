const Signup = () => {
    return ( 
        <div>
            <div className="login-form">
            <div className="container">
                <h2>
                    Sign Up
                </h2>
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button type='submit'>Sign Up</button>
            </div>
            
        </div>
        </div>
     );
}
 
export default Signup;