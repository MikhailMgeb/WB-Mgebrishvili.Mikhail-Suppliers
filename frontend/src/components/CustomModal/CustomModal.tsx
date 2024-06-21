import React from 'react';
import Modal from 'react-modal';
import { cn } from '@bem-react/classname';

import IconClose from '../../assets/icons/icon-close.svg';
import { Button } from '../Button/Button';

import './CustomModal.css';

const cnCustomModal = cn('CustomModal');

const customStyles = {
  content: {
    width: '400px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0px 0px 26px 0px rgba(0, 0, 0, 0.19)',
    maxHeight: '80%',
    padding: '32px 48px',
    background: 'rgba(45, 44, 50, 1)',
    borderRadius: '16px',
  },
};

Modal.setAppElement('#root');

type CustomModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  title: string;
  children: React.ReactNode;
};

export const CustomModal = ({
  isOpen, onRequestClose, title, children,
}: CustomModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Modal"
    >
      <div className={cnCustomModal('Description')}>
        <h2 className={cnCustomModal('Title')}>{title}</h2>
      </div>
      <div className={cnCustomModal('CloseButton')}>
        <Button scheme="cloudy" onClick={onRequestClose} icon={<IconClose />} />
      </div>
      {children}
    </Modal>
  );
};
