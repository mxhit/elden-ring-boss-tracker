import BossPerLocation from "./components/BossPerLocation";
import { locations } from "./data/data"

export default function Home() {


  return (
    <>
      <h1 id="page_title" className="font-serif font-bold text-6xl my-4 text-center">Elden Ring Boss Tracker</h1>
      <br />
      {
        locations.map(location => (
          <BossPerLocation key={location} location={location} />
        ))
      }
    </>
  );
}
