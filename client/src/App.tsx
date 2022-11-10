import React from 'react';
import {
  Link,
  Route,
  Switch,
} from "react-router-dom";
import AboutContainer from './containers/AboutContainer';
import HomeContainer from './containers/HomeContainer';
import LocationContainer from './containers/LocationContainer';
import TruckContainer from './containers/TruckContainer';


function App() {
  return (
    <div>
      <nav>
      <Link  to={`/Home`}>Home</Link>{" "}
        <Link to={`/location`}>Location</Link>{" "}
        <Link to={`/truck`}>Truck</Link>
        <Link to={`/about`}>About</Link>
      </nav>
    <Switch>
      <Route path="/Home">
        <HomeContainer/>
      </Route> 
       <Route path="/location">
        <LocationContainer/>
      </Route> 
       <Route path="/truck">
        <TruckContainer/>
      </Route>
      <Route path="/about">
        <AboutContainer/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
