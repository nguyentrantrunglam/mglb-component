import { useState, useEffect } from "react";
import Slider from "../Slider/Slider";
import Indicator from "../Indicator/Indicator";
import { Item } from "../Interface";
import Avatars from "../Avatar/Avatar";
import "./AvatarSpinner.scss";
export default function AvatarSpinner() {
  const templateData = (): Array<Item> => {
    let list: Array<Item> = [];
    for (let i = 0; i < 10; i++) {
      list.push({
        id: i,
        label: `Card ${i}`,
        title: `this is a Title ${i}`,
        description: "this is description",
        image: `https://picsum.photos/200/300?random=${i}`,
        position: 0,
        oldPosition: 0,
      });
    }
    return list;
  };
  const POSITION: { [key: string]: number } = {
    ACTIVE: 270,
    LEFT: 330,
    RIGHT: 210,
    HIDDEN: 90,
  };
  function setListPosition(id: number) {
    const listLength = List.length;
    const activeIndex = List.findIndex((item) => item.id == id);
    const previousIndex = (activeIndex - 1 + listLength) % listLength;
    const nextIndex = (activeIndex + 1) % listLength;
    const list = JSON.parse(JSON.stringify(List));
    list.forEach((item: Item, index: number) => {
      switch (index) {
        case activeIndex:
          item.oldPosition = item.position;
          item.position = POSITION.ACTIVE;
          break;
        case previousIndex:
          item.oldPosition = item.position;
          item.position = POSITION.LEFT;
          break;
        case nextIndex:
          item.oldPosition = item.position;
          item.position = POSITION.RIGHT;
          break;
        default:
          item.oldPosition = item.position;
          item.position = POSITION.HIDDEN;
          break;
      }
    });
    setList(list);
  }

  const [List, setList] = useState(templateData);
  const [onAnimation, setOnAnimation] = useState(false);
  const [activeTabId, setActiveTabId] = useState(0);
  const [spinDirection, setSpinDirection] = useState(true);
  function handleSelectTab(id: number) {
    if (
      (activeTabId + 1) % List.length == id ||
      (activeTabId + 2) % List.length == id
    ) {
      setSpinDirection(true);
    } else {
      setSpinDirection(false);
    }
    setListPosition(id);
    setActiveTabId(id);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const nextPage = (activeTabId + 1) % List.length;
      handleSelectTab(nextPage);
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
        spinDirection={spinDirection}
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
