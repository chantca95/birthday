import React from "react";
import {
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  End,
  Home
} from './Pages/AllPages';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Router>
        {/* Use https://ezgif.com/loop-count to change loop count for gifs. */}
        
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Home} />
          <Route exact path="/one" component={One} />
          <Route exact path="/two" component={Two} />
          <Route exact path="/three" component={Three} />
          <Route exact path="/four" component={Four} />
          <Route exact path="/five" component={Five} />
          <Route exact path="/six" component={Six} />
          <Route exact path="/seven" component={Seven} />
          <Route exact path="/eight" component={Eight} />
          <Route exact path="/end" component={End} />
        </Switch>
      </Router>
    </div>
  );
}