import React, { useState } from "react";
import "./App.css";
import data from './data';
import Tours from "./components/Tours";

const App = () => {

  const [tours, setTours] = useState(data);

  function removeTour(id)
  {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0)
  {
    return (
      <div className="refresh flex flex-col items-center justify-center w-screen h-screen">
        <h2 className=" font-black text-2xl">No Tours Left</h2>
        <button className="btn-white mt-[18px] py-[10px] px-[80px] cursor-pointer bg-gray-100 hover:bg-white transition-all duration-200" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen">

      <Tours tours={tours} removeTour={removeTour}></Tours>

    </div>
  );
}

export default App;
