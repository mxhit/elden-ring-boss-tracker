"use client"

import BossPerLocation from "./components/BossPerLocation";
import { locations } from "./data/data"

export default function Home() {

  function resetProgress() {
    if (typeof window !== 'undefined') {
      alert("Resetting progress will clear all saved data. Are you sure?");
      localStorage.clear();
    }
  }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 id="page_title" className="font-serif font-bold text-6xl my-4 text-center">Elden Ring Boss Tracker</h1>
      <br />
      <button className="bg-red-500 hover:bg-red-700 py-2 px-4 font-semibold text-white text-center rounded" onClick={resetProgress}>Reset Progress</button>
      <br />
      {
        locations.map(location => (
          <BossPerLocation key={location} location={location} />
        ))
      }
    </div>
  );
}
