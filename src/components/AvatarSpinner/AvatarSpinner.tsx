import { useState, useEffect } from "react";
import Slider from "../Slider/Slider";
import Indicator from "../Indicator/Indicator";
import { Item } from "../Interface";
import Avatars from "../Avatar/Avatar";
import "./AvatarSpinner.scss";
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const delay = 600;
export default function AvatarSpinner() {
  const templateData = (): Array<Item> => {
    let list: Array<Item> = [];
    for (let i = 0; i < 4; i++) {
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
  const [onAnimation, setOnAnimation] = useState(false);
  const [activeTabId, setActiveTabId] = useState(0);
  function HandleSetTab() {
    const start = activeTabId;
    setActiveTabId(start);
    const step1 = (start + 1) % List.length;
    const step2 = (start + 2) % List.length;
    sleep(delay)
      // start animation
      .then(() => {
        setOnAnimation(true);
        setActiveTabId(step1);
      })
      // animation happen
      .then(() => sleep(delay - 150))
      // end animation
      .then(() => {
        setOnAnimation(false);
        setActiveTabId(step2);
      });
  }
  function handleSelectTab(id: number) {
    if (
      (activeTabId + 1) % List.length == id ||
      (activeTabId - 1 + List.length) % List.length == id
    ) {
      setActiveTabId(id);
    } else {
      HandleSetTab();
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const nextPage = (activeTabId + 1) % List.length;
      setActiveTabId(nextPage);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeTabId]);
  return (
    <div className="carousel">
      <Avatars
        List={List}
        onAnimated={onAnimation}
        activeTabId={activeTabId}
        handleSetActiveTabId={handleSelectTab}
      />
      <div className="carousel-slider">
        <Slider
          List={List}
          activeTabId={activeTabId}
          handleSetActiveTabId={handleSelectTab}
        />
        <Indicator
          List={List}
          activeTabId={activeTabId}
          handleSetActiveTabId={handleSelectTab}
        />
      </div>
    </div>
  );
}
