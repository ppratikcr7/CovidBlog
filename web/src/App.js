import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Add component
import Home from './Component/Page/Home';
import Signup from './Component/Page/Signup';
import Header from "./widget/Header/Header"
import Signin from './Component/Page/Signin';
import Dashboard from './Component/DashBoard/Dashboard';
// import AboutPage from './pages/AboutPage';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/login" component={Signin}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          {/* <Route path="/ViewRecipe" ><ViewRecipePage /></Route> */}
        </Switch>
      </Router>
    </>
  )
}

export default App;
