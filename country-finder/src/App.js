import "./App.css";
import Nav from "./pages/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountryContextProvider from "./contexts /CountryContext";
import Details from "./pages/Details";
import DetailsContextProvider from "./contexts /DetailsContext";
import OneCountry from "./components/OneCountry";

const App = () => {
  return (
    <CountryContextProvider>
      <DetailsContextProvider>
        <Router>
          <div className="App">
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/:alpha3Code" component={Details} />
              {/* <Route path="/:name" component={OneCountry} /> */}
            </Switch>
          </div>
        </Router>
      </DetailsContextProvider>
    </CountryContextProvider>
  );
};

export default App;
