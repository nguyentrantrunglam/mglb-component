import { Item, MyProps } from "../Interface";
import "./Indicator.scss";

export default function Indicator({
  List,
  activeTabId,
  handleSetActiveTabId,
}: MyProps) {
  function checkActive(id: number) {
    return id == activeTabId ? "active" : "non-active";
  }

  return (
    <div className="indicator">
      {List.map((item: Item) => (
        <div
          key={item.id}
          className={`indicator-item ${checkActive(item.id)}`}
          onClick={() => handleSetActiveTabId(item.id)}
        ></div>
      ))}
    </div>
  );
}
