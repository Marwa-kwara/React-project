import CountriesView from "../components/AllCountries";
//import Search from "../components/Search";
import "../App.css";

export default function Home() {
  return (
    <section className="section">
      {/* <div>
        <Search />
      </div> */}
      <div className="AllCountries">
        <CountriesView />
      </div>
    </section>
  );
}
