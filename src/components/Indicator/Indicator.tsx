import { Item, MyProps } from "../Interface";
import "./Indicator.scss";

export default function Indicator({
  List,
  activeTab,
  handleSetActiveTab,
}: MyProps) {
  function checkActive(id: number) {
    return id == activeTab ? "active" : "non-active";
  }

  return (
    <div className="indicator">
      {List.map((item: Item) => (
        <div
          key={item.id}
          className={`indicator-item ${checkActive(item.id)}`}
          onClick={() => handleSetActiveTab(item.id)}
        >
          {item.id}
        </div>
      ))}
    </div>
  );
}
