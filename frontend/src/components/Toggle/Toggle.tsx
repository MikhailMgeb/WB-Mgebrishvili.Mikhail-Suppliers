import { useState } from 'react';

import { cnToggle } from './Toggle.classname';

import './Toggle.css';

type ToggleProps = {
  scheme: 'primary' | 'success';
  initialActive?: boolean;
  onToggle: (active: boolean) => void;
};

export const Toggle = ({ scheme, initialActive, onToggle }: ToggleProps) => {
  const [active, setActive] = useState(initialActive);

  const handleChange = () => {
    setActive(!active);
    onToggle(!active);
  };

  return (
    <div className={cnToggle()}>
      <label htmlFor="toggle-id" className={cnToggle('Switch')} />
      <input id="toggle-id" onChange={handleChange} type="checkbox"></input>
      <span id="toggle-id" className={cnToggle('Switch', { slider: true, scheme })}></span>
    </div>
  );
};
