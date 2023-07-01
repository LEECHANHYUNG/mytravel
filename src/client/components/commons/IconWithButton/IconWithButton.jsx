import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import style from './IconWithButton.module.scss';
const IconWithButton = ({ Icon, children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    mounted && (
      <div className={style.IconWithButton}>
        <div className={style.IconWithButton__icon}>{Icon}</div>
        <div>{children}</div>
      </div>
    )
  );
};

export default IconWithButton;
