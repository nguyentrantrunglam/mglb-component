import { useState, useRef } from "react";
import "./App.scss";
import { Carousel } from "./components/Carousel";
import { SliderLayout } from "./components/SliderLayout";
import { SwapCard } from "./components/SwapCard";

function App() {
  return (
    <div className="app">
      <SwapCard></SwapCard>
    </div>
  );
}

export default App;
