import * as React from "react";
import "./Carousel.scss";
interface ICarouselProps {
  direction?: "left" | "right";
  propsSliders: { id: number; url: string }[];
  animationTime: number;
  uniqueKey: string;
  itemSize: { width: number; height: number };
}

export function Carousel(props: ICarouselProps) {
  function fillScreen() {
    if (props.itemSize.width * slider.length < 1920) {
      const multiplier = Math.ceil(
        1920 / (props.itemSize.width * slider.length)
      );
      const maxId = Math.max(...slider.map((slide) => slide.id));
      let newSlider:
        | any[]
        | ((
            prevState: { id: number; url: string }[]
          ) => { id: number; url: string }[]) = [];
      for (let i = 0; i < multiplier; i++) {
        let multipleSlider: { id: number; url: string }[] = [];
        slider.forEach((item, index) => {
          multipleSlider.push({
            id: maxId * i + index + 1,
            url: slider[index].url,
          });
        });
        newSlider = [...newSlider, ...multipleSlider];
      }
      setSlider(newSlider);
    }
  }
  function getSlideAnimation() {
    const app = document.querySelector(".app");
    const keyFrames = document.createElement("style");
    keyFrames.setAttribute("id", `keyFrames-${props.uniqueKey}`);
    keyFrames.innerHTML = `
  @keyframes slideleft-${props.uniqueKey} {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-${props.itemSize.width * slider.length}px);
    }
  }
  @keyframes slideright-${props.uniqueKey} {
    0% {
      transform: translateX(-${props.itemSize.width * slider.length}px);
    }
    100% {
      transform: translateX(0px);
    }
  }
  .carousel-${props.uniqueKey}{
    width: ${props.itemSize.width * slider.length}px;
  }
  .carousel__slider-${props.uniqueKey} {
    width: ${props.itemSize.width * slider.length * 2}px;
  }
  .carousel__slider-slide-left-${props.uniqueKey} {
    animation: slideleft-${props.uniqueKey} ${
      props.animationTime * 2
    }s linear infinite;
  }
  .carousel__slider-slide-right-${props.uniqueKey} {
    animation: slideright-${props.uniqueKey} ${
      props.animationTime * 2
    }s linear infinite;
  }
  .carousel__slider:hover {
    animation-play-state: paused;
  }
  .carousel__slide-${props.uniqueKey} {
    width: ${props.itemSize.width}px;
    height: ${props.itemSize.height}px;
  }
`;
    app?.appendChild(keyFrames);
  }
  function getStyleComponent() {
    fillScreen();
    getSlideAnimation();
  }

  const [slider, setSlider] = React.useState(props.propsSliders);
  React.useEffect(() => {
    getStyleComponent();
  }, [slider]);
  React.useEffect(() => {}, []);
  return (
    <div className={`carousel carousel-${props.uniqueKey}`}>
      <div
        className={`carousel__slider carousel__slider-${props.uniqueKey} carousel__slider-slide-${props.direction}-${props.uniqueKey}`}
      >
        {slider.map((slide) => (
          <div
            className={`carousel__slide carousel__slide-${props.uniqueKey}`}
            key={slide.id}
          >
            <img src={slide.url} alt="" />
          </div>
        ))}
        {slider.map((slide) => (
          <div
            className={`carousel__slide carousel__slide-${props.uniqueKey}`}
            key={slide.id}
          >
            <img src={slide.url} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
