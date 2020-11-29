import React from 'react';
import cx from 'classnames';

import styles from './CheckboxComponents.module.scss';

function CheckboxComponents() {
  return (
    <>
      <div className={cx(styles.checkbox_wrapper)}>
        <input id="checkbox_input" type="checkbox" />
        <label htmlFor="checkbox_input">체크박스</label>
      </div>
      <div className={styles.checkbox_wrapper}>
        <input id="checkbox_input1" type="checkbox" />
        <label htmlFor="checkbox_input1">체크박스</label>
      </div>
      <div className={styles.checkbox_wrapper}>
        <input id="checkbox_input2" type="checkbox" />
        <label htmlFor="checkbox_input2">체크박스</label>
      </div>
    </>
  );
}

export default CheckboxComponents;
