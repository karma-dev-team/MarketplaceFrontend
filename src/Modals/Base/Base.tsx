import React, { ReactNode } from 'react';
import './Base.css';
import closeIcon from '../../Static/Images/close-icon.svg';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <button onClick={onClose} className="modal-close-button">
          <img src={closeIcon} alt="" width={24} height={24} />
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
