import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar"
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Category from "./pages/Category"
import Footer from "./components/Footer/Footer";
import Quiz from './components/Quiz/QuizComponent';
import Create from './pages/Create';
import Results from './components/QuizResults/results';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/category" component={Category}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/signin" component={Signin}/>
            <Route path = "/quiz/:id" component={Quiz}/>
            <Route exact path= "/create" component={Create}/>
            <Route exact path= "/update" component={Create}/>
            <Route exact path="/results" component={Results}/>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
