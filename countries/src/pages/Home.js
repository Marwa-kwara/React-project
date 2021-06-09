import CountriesView from "../components/CountriesView";
import Search from "../components/Search";

export default function Home() {
  return (
    <section>
      <div>
        <Search />
      </div>
      <div>
        <CountriesView />
      </div>
    </section>
  );
}
