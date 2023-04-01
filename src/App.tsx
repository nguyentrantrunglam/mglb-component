import * as React from "react";
import "./App.scss";
import { Carousel } from "./components/Carousel";

function App() {
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
    width: 200,
    height: 86,
  };
  return (
    <div className="app">
      <div className="slider">
        <Carousel
          itemSize={itemSize}
          direction="left"
          propsSliders={line1}
          animationTime={animationTime}
          uniqueKey="line1"
        ></Carousel>
        <Carousel
          itemSize={itemSize}
          direction="right"
          propsSliders={line2}
          animationTime={animationTime}
          uniqueKey="line2"
        ></Carousel>
      </div>
    </div>
  );
}

export default App;
