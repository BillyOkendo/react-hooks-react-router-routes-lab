import Movies from "./Movies";
import { Switch,Route } from "react-router-dom";
import Directors from "./Directors";
import Actors from "./Actors";
import Home from "./Home";
import NavBar from "./NavBar";

function App() {
  
  return <div>
  <Switch>
        <Route exact path="/movies">
          < Movies/>
        </Route>
        <Route exact path="/directors">
          <Directors/>
        </Route>
        <Route exact path="/actors">
          <Actors/>
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
  <NavBar/>



  </div>;
}

export default App;