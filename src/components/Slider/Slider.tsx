import { Item, MyProps } from "../Interface";
import "./Slider.scss";
import chevron from "../../assets/chevron_right_FILL0_wght400_GRAD0_opsz48.svg";
export default function Slider({
  List,
  activeTabId,
  handleSetActiveTabId,
}: MyProps) {
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
  function handlerPreviousTab() {
    const currentIndex = List.findIndex((item: Item) => item.id == activeTabId);
    const previousTab = Math.abs(currentIndex - 1 + List.length) % List.length;

    handleSetActiveTabId(List[previousTab].id);
  }
  function handlerNextTab() {
    const currentIndex = List.findIndex((item: Item) => item.id == activeTabId);
    const nextTabId = Math.abs(currentIndex + 1 + List.length) % List.length;

    handleSetActiveTabId(List[nextTabId].id);
  }
  return (
    <div className="carousel-container">
      <div className="carousel-previous" onClick={handlerPreviousTab}>
        <img src={chevron} />
      </div>
      <div className="carousel-next" onClick={handlerNextTab}>
        <img src={chevron} />
      </div>
      {List.map((item: Item) => (
        <div
          className={`carousel-item ${`carousel-item` + item.id} ${checkActive(
            item.id
          )}`}
          key={item.id}
        >
          <img src={item.image} alt={item.description} />
          <div className="title">{item.title}</div>
          <div className="description">{item.description}</div>
        </div>
      ))}
    </div>
  );
}
