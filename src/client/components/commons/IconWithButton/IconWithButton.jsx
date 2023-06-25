import React from 'react';
import { Button } from 'reactstrap';
import style from './IconWithButton.module.scss';
const IconWithButton = ({ Icon, color, children }) => {
  return (
    <Button color={color} className={style.IconWithButton}>
      <div className={style.IconWithButton__icon}>{Icon}</div>
      <div>{children}</div>
    </Button>
  );
};

export default IconWithButton;
