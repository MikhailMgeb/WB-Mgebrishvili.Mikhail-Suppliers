import { cnButton } from './Button.classname';
import './Button.css';

type ButtonProps = {
  text?: string;
  icon?: React.ReactNode;
  scheme: 'cloudy' | 'primary';
  modification?: 'alpha' | 'base';
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
};

export const Button = ({
  text, icon, scheme, modification = 'alpha', onClick, size = 'medium',
}: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={cnButton({ theme: scheme === 'cloudy' ? modification : scheme, size })}
      onClick={handleClick}
    >
      {icon && <span className={cnButton('Icon')}>{icon}</span>}
      {text && <p className={cnButton('Text')}>{text}</p>}
    </button>
  );
};
