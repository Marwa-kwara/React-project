import "./App.css";
import Nav from "./pages/Navbar";
import About from "./pages/About";
import Borders from "./components/Border";
import Compare from "./components/Compare";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AllCountriesProvider } from "./components/AllCountriesContext";
import { CountryMoreInfoProvider } from "./components/CountryMoreInfoContext";
import CountryMoreInfo from "./components/CountryMoreInfo";

const App = () => {
  return (
    <AllCountriesProvider>
      <CountryMoreInfoProvider>
        <Router>
          <div className="App">
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/compare" component={Compare} />
              <Route path="/borders" component={Borders} />
              <Route path="/:name" exact component={CountryMoreInfo} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </CountryMoreInfoProvider>
    </AllCountriesProvider>
  );
};

export default App;
