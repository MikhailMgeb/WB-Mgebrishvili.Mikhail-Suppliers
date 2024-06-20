import React from 'react';
import { cn } from '@bem-react/classname';

import './FieldWrapper.css';

type FieldWrapperProps = {
  label?: string;
  children: React.ReactNode;
};

const cnFieldWrapper = cn('FieldWrapper');

export const FieldWrapper = ({ label, children }: FieldWrapperProps) => {
  return (
    <div className={cnFieldWrapper()}>
      <label className={cnFieldWrapper('Label')}>{label}</label>
      <div className={cnFieldWrapper('InputWrapper')}>{children}</div>
    </div>
  );
};
