import React, { ReactNode } from 'react';
import "./Base.css"
import closeIcon from "../../Static/Images/close-icon.svg"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-container" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className='modal-close-button'><img src={closeIcon} alt="" width={34} height={35}/></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;