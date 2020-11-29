import React from 'react';
import cx from 'classnames';

import heart from '../../../img/free-icon-heart.svg';
import eye from '../../../img/free-icon-eye.svg';

import styles from './TextFieldComponents.module.scss';

function TextFieldComponents() {
  const onHeartClick = (e) => {
    console.log(e);
  };

  const onEyeClick = (e) => {
    console.log(e);
  };

  return (
    <div className={cx(styles.textfield_wrapper)}>
      <i
        style={{ backgroundImage: `url(${heart})` }}
        onClick={onHeartClick}
      ></i>
      <i style={{ backgroundImage: `url(${eye})` }} onClick={onEyeClick}></i>
      <input type="text" />
    </div>
  );
}

export default TextFieldComponents;
