import React from "react";
import "./App.css";
import Scoreboard from "./components/Scoreboard";
import { Switch, Route } from "react-router-dom";
import Discover from "./components/Discover";
import DetailsPage from "./components/DetailsPage";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Switch>
          <Route path='/discover/:searchTerm?' component={Discover} />
          <Route path='/details/:movieId' component={DetailsPage} />
          <Route path='/' component={Scoreboard} exact />
        </Switch>
      </header>
    </div>
  );
}

export default App;
