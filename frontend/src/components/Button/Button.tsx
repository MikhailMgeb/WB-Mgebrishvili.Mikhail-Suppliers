import { cnButton } from './Button.classname';

import './Button.css';

type ButtonProps = {
  text?: string;
  icon?: React.ReactNode;
  scheme: 'cloudy' | 'primary';
  modification?: 'alpha' | 'base';
  onClick?: () => void;
};

export const Button = ({
  text, icon, scheme, modification = 'base', onClick,
}: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className={cnButton({ theme: scheme === 'cloudy' ? modification : scheme })} onClick={handleClick}>
      {<span className={cnButton('Icon')}>{icon}</span> || null}
      <p className={cnButton('Text')}>{text}</p>
    </button>
  );
};
