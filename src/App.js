import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/users/:id">
            <CountryDetails></CountryDetails>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
