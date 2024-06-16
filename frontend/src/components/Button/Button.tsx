import type { FC } from 'react';

import { cnButton } from './Button.classname';

import './Button.css';

type ButtonProps = {
  text?: string;
  icon?: React.ReactNode;
  scheme: 'cloudy' | 'primary';
  modification?: 'alpha' | 'base';
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({
  text, icon, scheme, modification = 'base', onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  console.log(scheme)

  return (
    <button className={cnButton({ theme: scheme === 'cloudy' ? modification : scheme })} onClick={handleClick}>
      {<span className={cnButton('Icon')}>{icon}</span> || null}
      <p className={cnButton('Text')}>{text}</p>
    </button>
  );
};

export { Button };
