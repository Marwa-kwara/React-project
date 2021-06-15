import "./App.css";
import Nav from "./pages/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountryContextProvider from "./contexts /CountryContext";
import Details from "./pages/Details";

const App = () => {
  return (
    <CountryContextProvider>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/:alpha3Code" component={Details} />
          </Switch>
        </div>
      </Router>
    </CountryContextProvider>
  );
};

export default App;
