import React from "react";
import Login from "./Components/Authentication/Login";
import SignUp from "./Components/Authentication/SignUp";
import Home from "./Components/HomeUI/Home";
import Techs from "./Components/MainContent/Techs";
import Forum from "./Components/MainContent/Forum";
import ReactInfo from "./Components/Subjects/ReactInfo";
import DatabasesInfo from "./Components/Subjects/DatabasesInfo";
import Express from "./Components/Subjects/Express";
import Gits from "./Components/Subjects/GitInfo";
import NodejsInfo from "./Components/Subjects/NodejsInfo";
import Ruby from "./Components/Subjects/Ruby";
import ProtectedRoute from "./Components/MainContent/PrivateRoute";
import SignRoute from "./Components/MainContent/SignRoute";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { ReactDOM } from "react-dom";
import "./App.css";
import Navbar from "./Components/HomeUI/Navbar";
import Footer from "./Components/HomeUI/Footer";

function App() {
  const value = localStorage.getItem("logininfo");
  return (
    <BrowserRouter>
      <React.Fragment>
        <div className="auth">
          <Switch>
            <Route path="/" exact component={Home} />
            <SignRoute path="/signup" component={SignUp} isLoggedin={value} />
            <SignRoute path="/login" component={Login} isLoggedin={value} />
            <ProtectedRoute
              path="/techs"
              component={Techs}
              isLoggedin={value}
            />
            <ProtectedRoute
              path="/forums"
              component={Forum}
              isLoggedin={value}
            />
            <ProtectedRoute
              path="/react"
              component={ReactInfo}
              isLoggedin={value}
            />
            <ProtectedRoute
              path="/express"
              component={Express}
              isLoggedin={value}
            />
            <ProtectedRoute path="/git" component={Gits} isLoggedin={value} />
            <ProtectedRoute
              path="/nodejs"
              component={NodejsInfo}
              isLoggedin={value}
            />
            <ProtectedRoute
              path="/databases"
              component={DatabasesInfo}
              isLoggedin={value}
            />
            <ProtectedRoute path="/ruby" component={Ruby} isLoggedin={value} />
            <Redirect to="/" />
          </Switch>
        </div>
      </React.Fragment>
      <React.Fragment>
        <div className="auth">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/techs" component={Techs} />
            <Route path="/forums" component={Forum} />
            <Route path="/react" component={ReactInfo} />
            <Route path="/express" component={Express} />
            <Route path="/git" component={Gits} />
            <Route path="/nodejs" component={NodejsInfo} />
            <Route path="/databases" component={DatabasesInfo} />
            <Route path="/ruby" component={Ruby} />
            <Redirect to="/" />
          </Switch>

          <Footer />
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
