import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const li = {
  marginLeft: '5em'
};

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const AppRouter = () => (
  <Router>
    <div style={{backgroundColor: '#DCE1E3'}}>
      <nav>
        <ul style={{display:'inline-flex'}}>
          <li style={li}>
            <Link to="/">Home</Link>
          </li>
          <li style={li}>
            <Link to="/about/">About</Link>
          </li>
          <li style={li}>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
    </div>
  </Router>
);

export default AppRouter;