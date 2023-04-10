import { Item, MyProps } from "../Interface";
import "./Avatar.scss";
interface AvatarProps extends MyProps {
  onAnimated: boolean;
}
export default function Avatars({
  List,
  activeTabId,
  handleSetActiveTabId,
  onAnimated,
}: AvatarProps) {
  function checkActive(id: number) {
    const listLength = List.length;
    let result: string;
    const index = List.findIndex((item) => item.id == id);
    const activeIndex = List.findIndex((item) => item.id == activeTabId);
    const previousIndex = (activeIndex - 1 + listLength) % listLength;
    const nextIndex = (activeIndex + 1) % listLength;

    switch (true) {
      case List[index].id == List[activeIndex].id:
        result = "active";
        break;
      case List[index].id == List[previousIndex].id:
        result = "left";
        break;
      case List[index].id == List[nextIndex].id:
        result = "right";
        break;
      default:
        result = "non-active";
        break;
    }
    return result;
  }

  return (
    <div className={`${onAnimated ? "disabled-size" : ""} avatars`}>
      {List.map((item: Item) => (
        <div
          key={`avatar-${item.id}`}
          className={`avatar avatar-${item.id} ${checkActive(item.id)}  `}
          onClick={() => handleSetActiveTabId(item.id)}
        >
          <img src={item.image} />
        </div>
      ))}
    </div>
  );
}
