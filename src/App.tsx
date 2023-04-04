import { useState, useRef } from "react";
import "./App.scss";
import { Carousel } from "./components/Carousel";
import { SliderLayout } from "./components/SliderLayout";

function App() {
  const timerRef = useRef<any>();

  const line1 = [
    {
      id: 1,
      url: "http://27.72.29.21:3010/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.sao-khue-2022.d1b1a4a8.png&w=256&q=75",
    },
    {
      id: 2,
      url: "http://27.72.29.21:3010/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7.laravel-partner.f92b5ec8.png&w=256&q=75",
    },
    {
      id: 3,
      url: "http://27.72.29.21:3010/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAWS-Certified-Solutions-Architect-Associate_badge.de5e7544.png&w=256&q=75",
    },
    {
      id: 4,
      url: "http://27.72.29.21:3010/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.sao-khue-2020.a2d6528c.jpg&w=256&q=75",
    },
    {
      id: 5,
      url: "http://27.72.29.21:3010/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.top-10-ICT.ea9a48b1.png&w=256&q=75",
    },
    {
      id: 6,
      url: "http://27.72.29.21:3010/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.sao-khue-2021.d35a347c.png&w=256&q=75",
    },
    {
      id: 7,
      url: "http://27.72.29.21:3010/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.salesforce-consulting-partner.f73023ac.png&w=256&q=75",
    },
    {
      id: 8,
      url: "http://27.72.29.21:3010/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.ISTQB-platinum-partner.64c31cb1.png&w=256&q=75",
    },
  ];
  const line2 = [
    {
      id: 1,
      url: "http://27.72.29.21:3010/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPSM%20I.baf0f02c.png&w=256&q=75",
    },
    {
      id: 2,
      url: "http://27.72.29.21:3010/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAdministrator.6f2f0efc.png&w=256&q=75",
    },
    {
      id: 3,
      url: "http://27.72.29.21:3010/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FISTQB-foundation.9d1cc9c4.png&w=256&q=75",
    },
    {
      id: 4,
      url: "http://27.72.29.21:3010/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcer-ukas-2015.8a256ecd.jpg&w=256&q=75",
    },
    {
      id: 5,
      url: "http://27.72.29.21:3010/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJavaScript-Developer-I.d3a27ebf.png&w=256&q=75",
    },
    {
      id: 6,
      url: "http://27.72.29.21:3010/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fielts.ec531b95.png&w=256&q=75",
    },
    {
      id: 7,
      url: "http://27.72.29.21:3010/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMarketing-Cloud-Developer.2289f0ff.png&w=256&q=75",
    },
    {
      id: 8,
      url: "http://27.72.29.21:3010/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcer-ukas-2013.4b604487.jpg&w=256&q=75",
    },
    {
      id: 9,
      url: "http://27.72.29.21:3010/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPlatform-App-Builder.3cfc749c.png&w=256&q=75",
    },
    {
      id: 10,
      url: "http://27.72.29.21:3010/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FISTQB-advanced.425f6ca8.png&w=256&q=75",
    },
    {
      id: 11,
      url: "http://27.72.29.21:3010/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPMP.f4b8ed0f.png&w=256&q=75",
    },
    {
      id: 12,
      url: "http://27.72.29.21:3010/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAWS-Certified-Cloud-Practitioner_badge.27facee1.png&w=256&q=75",
    },
    {
      id: 13,
      url: "http://27.72.29.21:3010/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPardot-Consultant.7cf7c115.png&w=256&q=75",
    },
  ];
  const animationTime = 60;
  const itemSize = {
    width: 180,
    height: 94,
  };
  const [listImage, setListImage] = useState([
    { id: 1, url: "1", position: 1 },
    { id: 2, url: "2", position: 2 },
    { id: 3, url: "3", position: 3 },
    { id: 4, url: "4", position: 0 },
  ]);
  const active = listImage.findIndex((item) => item.position === 2);
  const [activeIndex, setActiveIndex] = useState(active);
  const handleClickImage = (index: number) => {
    swapImage(index);
    setActiveIndex(index);
  };
  const swapImage = (index: number) => {
    const list = [...listImage];
    list.forEach((item) => {
      item.position = 0;
    });
    if (index === 0) {
      list[0].position = 2;
      list[1].position = 3;
      list[list.length - 1].position = 1;
    } else if (index === list.length - 1) {
      list[index].position = 2;
      list[0].position = 3;
      list[index - 1].position = 1;
    } else {
      list[index].position = 2;
      list[index + 1].position = 3;
      list[index - 1].position = 1;
    }
    setListImage(list);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="list-image">
          {listImage.map((item, index) => {
            return (
              <div
                key={item.id}
                onClick={() => handleClickImage(index)}
                className={`image position-${item.position}`}
              >
                {item.url}
              </div>
            );
          })}
          {/* <div className="image top"></div> */}
        </div>
        <div className="client-info"></div>
      </div>
      <div className="list-buttons">
        {listImage.map((item, index) => {
          return (
            <button
              key={item.id}
              onClick={() => handleClickImage(index)}
              className={`button`}
            >
              {item.url}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
