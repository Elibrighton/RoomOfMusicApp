import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import About from './About'
import Contact from './Contact';
import Home from './Home';

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        path="/about"
        component={About}
      />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
}

export default App;
