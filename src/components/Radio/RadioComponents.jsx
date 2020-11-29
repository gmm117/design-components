import React from 'react';
import cx from 'classnames';

import styles from './RadioComponents.module.scss';

function RadioComponents() {
  return (
    <>
      <div className={cx(styles.radio_wrapper)}>
        <input type="radio" name="radio_group" id="radio_input1" />
        <label htmlFor="radio_input1">Radio 1</label>
      </div>
      <div className={cx(styles.radio_wrapper)}>
        <input type="radio" name="radio_group" id="radio_input2" />
        <label htmlFor="radio_input2">Radio 2</label>
      </div>
      <div className={cx(styles.radio_wrapper)}>
        <input type="radio" name="radio_group" id="radio_input3" />
        <label htmlFor="radio_input3">Radio 3</label>
      </div>
    </>
  );
}

export default RadioComponents;
