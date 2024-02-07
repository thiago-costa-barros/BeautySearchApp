import Header from "../_components/header";
import Search from "./_components/search";
import Welcome from "./_components/welcome";


export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-5">
        <Welcome />
      </div>
      <div className="px-5 mt-6">
        <Search />
      </div>
    </div>
  );
}
