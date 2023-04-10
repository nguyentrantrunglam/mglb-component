import { useState, useRef } from "react";
import Slider from "../Slider/Slider";
import Indicator from "../Indicator/Indicator";
import { Item } from "../Interface";
export default function AvatarSpinner() {
  const templateData = (): Array<Item> => {
    let list: Array<Item> = [];
    for (var i = 0; i < 4; i++) {
      list.push({
        id: i,
        label: `Card ${i}`,
        title: `this is a Title ${i}`,
        description: "this is description",
        image: `https://source.unsplash.com/random/550x300?sig=${(
          Math.random() * 10
        ).toFixed(0)}`,
      });
    }
    return list;
  };
  const [List, setList] = useState(templateData);
  const [activeTab, setActiveTab] = useState(1);
  function handleClick(id: number) {
    console.log("setActive tab", id);
    setActiveTab(id);
  }

  return (
    <div className="carousel">
      <div className="carousel-avatar">
        <div className="avatar"></div>
      </div>
      <div className="carousel-slider">
        <Slider
          List={List}
          activeTab={activeTab}
          handleSetActiveTab={(num: number) => handleClick(num)}
        />
        <Indicator
          List={List}
          activeTab={activeTab}
          handleSetActiveTab={(num: number) => handleClick(num)}
        />
      </div>
    </div>
  );
}
