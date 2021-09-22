const Login = () => {
    return ( 
        <div className="login-form">
            <div className="container">
                <h2>
                    Login
                </h2>
                <input type="text" placeholder="Username"/>
                
                <input type="password" placeholder="Password" />
                <button type='submit'>Login</button>
            </div>
            
        </div>
     );
}
 
export default Login;