import { useState, useRef } from "react";
import "./App.scss";
import { Carousel } from "./components/Carousel";
import { SliderLayout } from "./components/SliderLayout";
import { SwapCard } from "./components/SwapCard";
import { SpinList } from "./components/SpinList";
import Indicator from "./components/Indicator/Indicator";
import Slider from "./components/Slider/Slider";
import AvatarSpinner from "./components/AvatarSpinner/AvatarSpinner";
function App() {
  return (
    <div className="app">
      <AvatarSpinner />
      {/* <SwapCard></SwapCard> */}

      {/* <SpinList></SpinList> */}
    </div>
  );
}

export default App;
