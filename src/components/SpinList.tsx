import React from "react";
import "./SpinList.scss";

type Props = {};

export const SpinList = (props: Props) => {
//   var cube = document.querySelector(".cube");
//   var radioGroup = document.querySelector(".radio-group");
//   var currentclassName = "";

//   function changeSide() {
//     var checkedRadio = radioGroup.querySelector(":checked");
//     var showclassName = "show-" + checkedRadio.value;
//     if (currentclassName) {
//       cube.classNameList.remove(currentclassName);
//     }
//     cube.classNameList.add(showClass);
//     currentClass = showClass;
//   }
//   changeSide();
//   radioGroup.addEventListener("change", changeSide);
  return (
    <div className="container">
      <div className="scene">
        <div className="cube show-right">
          <div className="cube__face cube__face--front">front</div>
          <div className="cube__face cube__face--back">back</div>
          <div className="cube__face cube__face--right show-right">right</div>
          <div className="cube__face cube__face--left">left</div>
          <div className="cube__face cube__face--top">top</div>
          <div className="cube__face cube__face--bottom">bottom</div>
        </div>
      </div>
    </div>
  );
};
