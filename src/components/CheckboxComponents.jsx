import React from "react";
import * as styles from "./CheckboxComponents.module.scss";

function CheckboxComponents() {
  return (
    <div className="checkbox_wrapper">
      <input id="checkbox_input" type="checkbox" />
      <label for="checkbox_input">체크해주세요~~</label>
    </div>
  );
}

export default CheckboxComponents;
