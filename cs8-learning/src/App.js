
import React from 'react';
import Login from './Components/Authentication/Login';
import SignUp from './Components/Authentication/SignUp';
import Home from './Components/HomeUI/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  const ReactRouter=()=>{
    return(
    <div className="auth">
        <Router>
          <Switch>
            <Route path= "/" exact component={Home}/>
            <Route path= "/signup" exact component={SignUp}/>
            <Route path= "/login" exact component={Login}/>
          </Switch>
        </Router>
      </div>)

  }
  
  return (

    <React.Fragment>
     <ReactRouter/>
    </React.Fragment>
       

   
  );
}

export default App;
