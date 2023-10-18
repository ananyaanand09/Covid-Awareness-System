import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import News from './components/News';
import Guidelines from './components/Guidelines';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/news" component={News} />
          <Route path="/guidelines" component={Guidelines} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
