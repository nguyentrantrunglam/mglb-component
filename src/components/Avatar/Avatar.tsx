import { useEffect, useState } from "react";
import { Item, MyProps } from "../Interface";
import "./Avatar.scss";
import { useAnimate } from "framer-motion";
interface AvatarProps extends MyProps {
  onAnimated: boolean;
  spinDirection: boolean;
}
export default function Avatars({
  List,
  activeTabId,
  handleSetActiveTabId,
  onAnimated,
  spinDirection,
}: AvatarProps) {
  const [avatars, animate] = useAnimate();
  const STEP_DEGREE = 1;
  function createCircleCoordination() {
    const centreX = 150; // centre x of circle
    const centreY = 150; // centre y of circle
    const r = 150; // radius

    let result = new Map();
    const numberInt = (floatNum: number) => {
      return parseInt(floatNum.toFixed(0));
    };
    let _step = STEP_DEGREE;
    for (let angleDeg = 0; angleDeg < 360; angleDeg = angleDeg + _step) {
      const radians = angleDeg * (Math.PI / 180);
      const pointY = numberInt(centreY - Math.cos(radians) * r); // specific point y on the circle for the angle
      const pointX = numberInt(centreX + Math.sin(radians) * r); // specific point x on the circle for the angle
      result.set(angleDeg, { pointX, pointY });
    }
    return result;
  }
  const [coordination, setCoordination] = useState(createCircleCoordination());
  function calculateTimes(count: number) {
    let times = [];
    for (let index = 0; index < count; index++) {
      times.push(Number(((index * 1) / count).toFixed(2)));
    }
    return times;
  }
  function calculateFrame(from: number, to: number, direction: boolean) {
    let positionX: Array<number> = [];
    let positionY: Array<number> = [];
    let current = from;
    const _step = direction ? STEP_DEGREE : -1 * STEP_DEGREE; // 10 degree each STEP_DEGREE, clockwise or counter clockwise
    while (Math.abs(current) != to) {
      const { pointX, pointY } = coordination.get(Math.abs(current));
      positionX.push(pointX);
      positionY.push(pointY);
      current = direction
        ? (current + _step) % 360
        : (current + _step + 360) % 360;
    }

    return { positionX, positionY };
  }
  function createAnimationPath(from: number, to: number, direction: boolean) {
    /*
    from: position start, by degree
    to: position end, by degree
    direction: true: clockwise or false: counterclockwise
    */
    const { positionX, positionY } = calculateFrame(from, to, direction);
    let times = calculateTimes(positionX.length);
    return {
      animate: { left: positionX, top: positionY },
      options: { times, duration: 1 },
    };
  }

  useEffect(() => {
    const _spinDirection = spinDirection;
    List.forEach((item: Item) => {
      let activePosition = createAnimationPath(
        item.oldPosition,
        item.position,
        _spinDirection
      );
      animate(
        `.avatar-${item.id}`,
        {
          height: item.id == activeTabId ? 150 : 100,
          width: item.id == activeTabId ? 150 : 100,
          ...activePosition.animate,
        },
        {
          ...activePosition.options,
          ease: "linear",
        }
      );
    });
  }, [activeTabId]);
  return (
    <div
      className={`${onAnimated ? "disabled-size" : ""} avatars`}
      ref={avatars}
    >
      {List.map((item: Item) => (
        <div
          key={`avatar-${item.id}`}
          className={`avatar avatar-${item.id}  ${
            item.id == activeTabId ? "active" : ""
          }`}
          onClick={() => handleSetActiveTabId(item.id)}
        >
          <img src={item.image} />
        </div>
      ))}
    </div>
  );
}
