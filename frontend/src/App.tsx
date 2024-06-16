import { Button } from './components/Button/Button';

import MyIcon from './assets/icons/icon-check.svg';

const App = () => {
  return (
    <div>
      <Button scheme="cloudy" text="Просто кнопка" icon={<MyIcon />} modification="alpha" />
    </div>
  );
};

export { App };
