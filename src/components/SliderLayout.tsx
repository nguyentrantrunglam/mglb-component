import * as React from "react";
import "./SliderLayout.scss";

interface ISliderLayoutProps {
  propsSliders: { id: number; url: string }[];
}

const buttons = [
  { id: 1, isActive: true },
  { id: 2, isActive: false },
  { id: 3, isActive: false },
];

export function SliderLayout(props: ISliderLayoutProps) {
  function handleChangeTab(id: number) {
    document.querySelectorAll(
      ".slider-bar"
    )[0].style.transform = `translateX(calc(-${(id - 1) * 100}%  - (${
      (id - 1) * 44
    }px))`;
  }
  return (
    <div className="slider-layout">
      <div className="slider-bar">
        {props.propsSliders.map((item) => {
          return <div key={item.id} className="slider-item"></div>;
        })}
      </div>
      <div className="buttons">
        {buttons.map((item) => {
          return (
            <button
              key={item.id}
              className="button"
              onClick={() => handleChangeTab(item.id)}
            >
              {item.id}
            </button>
          );
        })}
      </div>
    </div>
  );
}
