import React from "react";
import Login from "./Components/Authentication/Login";
import SignUp from "./Components/Authentication/SignUp";
import Home from "./Components/HomeUI/Home";
import Techs from "./Components/MainContent/Techs";
import Forum from "./Components/MainContent/Forum";
import ReactInfo from "./Components/Subjects/ReactInfo";
import ReactSubtopicDetails1 from "./Components/Subjects/react-subtop1";
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
import ExpressSubtopicDetails1 from "./Components/Subjects/Express-subtop1";
import NodeSubtopicDetails1 from "./Components/Subjects/Node-subtop1";
import MongoSubtopicDetails1 from "./Components/Subjects/Mongo-subtop1";
import Navbar from "./Components/HomeUI/Navbar";
import Footer from "./Components/HomeUI/Footer";
import ForumSubmit from "./Components/MainContent/ForumSubmit";
import CommentDiscussions from "./Components/MainContent/CommentDiscussions";

function App() {
  const value = localStorage.getItem("logininfo");
  return (
    <BrowserRouter>
      <React.Fragment>
        <div className="auth">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" component={SignUp} isLoggedin={value} />
            <Route path="/login" component={Login} isLoggedin={value} />
            <Route path="/create" component={ForumSubmit} isLoggedin={value} />
            

            <ProtectedRoute
              path="/techs"
              component={Techs}
              isLoggedin={value}
            />
            <ProtectedRoute
              path="/comments"
              component={CommentDiscussions}
              isLoggedin={value}
            />
            <ProtectedRoute
              path="/forums"
              component={Forum}
              isLoggedin={value}
            />
            <ProtectedRoute
              path="/React"
              component={ReactInfo}
              isLoggedin={value}
            />
            <ProtectedRoute
              path="/Express"
              component={Express}
              isLoggedin={value}
            />
            <ProtectedRoute path="/git" component={Gits} isLoggedin={value} />
            <ProtectedRoute
              path="/Node"
              component={NodejsInfo}
              isLoggedin={value}
            />
            <ProtectedRoute
              path="/MongoDB"
              component={DatabasesInfo}
              isLoggedin={value}
            />
            <ProtectedRoute
              path="/rsubtop1"
              component={ReactSubtopicDetails1}
              isLoggedin={value}
            />
            <ProtectedRoute
              path="/esubtop1"
              component={ExpressSubtopicDetails1}
              isLoggedin={value}
            />
            <ProtectedRoute
              path="/nsubtop1"
              component={NodeSubtopicDetails1}
              isLoggedin={value}
            />
            <ProtectedRoute
              path="/msubtop1"
              component={MongoSubtopicDetails1}
              isLoggedin={value}
            />

            <Redirect to="/" />
          </Switch>
          <Footer />
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
