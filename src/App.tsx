import { useState, useRef } from "react";
import "./App.scss";
import { Carousel } from "./components/Carousel";
import { SliderLayout } from "./components/SliderLayout";
import { SwapCard } from "./components/SwapCard";
import {SpinList} from "./components/SpinList";

function App() {
  return (
    <div className="app">
      <SwapCard></SwapCard>
      {/* <SpinList></SpinList> */}
    </div>
  );
}

export default App;
