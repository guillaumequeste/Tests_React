import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Header = () => (
    <ul style={{display:'inline-flex'}}>
      <li style={{marginLeft:'5em'}}>
        <Link to="/">Home</Link>
      </li>
      <li style={{marginLeft:'5em'}}>
        <Link to="/about">About</Link>
      </li>
      <li style={{marginLeft:'5em'}}>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  );

const Home = () => <h2>Home</h2>;

const About = () => <h2>About</h2>;

const Topic = ({ match }) => <h3>Requested Param: {match.params.id}</h3>;

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>

    <ul style={{display:'inline-flex'}}>
      <li style={{marginLeft: '5em'}}>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li style={{marginLeft:'5em'}}>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:id`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const AppRouter2 = () => (
  <Router>
    <div style={{backgroundColor: '#DCE1E3'}}>
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

export default AppRouter2;