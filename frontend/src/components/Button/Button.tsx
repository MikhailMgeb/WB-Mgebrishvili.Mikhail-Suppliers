import { cn } from '@bem-react/classname';

import './Button.css';

const cnButton = cn('Button');

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
      className={cnButton({ theme: scheme === 'cloudy' ? modification : scheme, size, centered: !text })}
      onClick={handleClick}
    >
      {icon && <span className={cnButton('Icon', { centered: !!text })}>{icon}</span>}
      {text && <p className={cnButton('Text')}>{text}</p>}
    </button>
  );
};
