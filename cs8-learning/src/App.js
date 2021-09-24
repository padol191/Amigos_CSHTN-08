import './App.css';
import React from 'react';
import Login from './Components/Authentication/Login';
import SignUp from './Components/Authentication/SignUp';
import Home from './Components/HomeUI/Home';
import Techs from './Components/MainContent/Techs';
import Forum from './Components/MainContent/Forum';
import ReactInfo from './Components/Subjects/ReactInfo';
import DatabasesInfo from './Components/Subjects/DatabasesInfo';
import Express from './Components/Subjects/Express';
import Gits from './Components/Subjects/GitInfo';
import NodejsInfo from './Components/Subjects/NodejsInfo';
import Ruby from './Components/Subjects/Ruby';
import ForumDiscussion from './Components/MainContent/ForumDiscussion';
import ForumSubmit from './Components/MainContent/ForumSubmit';

import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import Navbar from './Components/HomeUI/Navbar';
import Footer from './Components/HomeUI/Footer';




function App() {

  
    
  return (
    <BrowserRouter>
    <React.Fragment>
     <div className="auth">
      
     <Navbar />
        <Switch>
          <Route path= "/" exact component={Home}/>
          <Route path= "/signup" component={SignUp}/>
          <Route path= "/login" component={Login}/>
          <Route path= "/techs"  component={Techs}/>
          <Route path= "/forums" component={Forum}/>
          <Route path= "/react" component={ReactInfo}/>
          <Route path= "/express" component={Express}/>
          <Route path= "/git" component={Gits}/>
          <Route path= "/nodejs" component={NodejsInfo}/>
          <Route path= "/databases" component={DatabasesInfo}/>
          <Route path= "/ruby" component={Ruby}/>
          <Route path= "/discussions" component={ForumDiscussion}/>
          <Route path= "/create" component={ForumSubmit}/>

          <Redirect to="/"/>
        </Switch>
  
        <Footer />
      
  
    </div>
    </React.Fragment>
    </BrowserRouter>
  
  );
}

export default App;
