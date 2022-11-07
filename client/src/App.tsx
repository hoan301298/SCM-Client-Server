import React from 'react';
import {
  Link,
  Route,
  Switch,
} from "react-router-dom";
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
    </Switch>
    </div>
  );
}

export default App;
