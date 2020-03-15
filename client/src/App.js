import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <p>
          <Link to="/">Home</Link> &nbsp;
          <Link to="/otherpage">Another Page</Link>
        </p>
        <p>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </p>
      </div>
    </Router>
  );
}

export default App;
