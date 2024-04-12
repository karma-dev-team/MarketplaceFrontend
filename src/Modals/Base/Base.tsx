import React, { ReactNode, MouseEvent } from 'react';
import './Base.css';

type iconProps = { width?: string, height?: string }

const CloseIcon: React.FC<iconProps> = (props: iconProps) => { 
  return ( 
    <svg 
      width={props.width || "24"} 
      height={props.height || "24"} 
      viewBox={`0 0 ${props.width || "24"} ${props.height || "24"}`}  
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="16.2781" height="2.32545" rx="1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 16.443 4.93213)" fill="#E9E9EA"/>
      <rect width="16.2781" height="2.32545" rx="1" transform="matrix(0.707107 0.707107 0.707107 -0.707107 4.93311 6.57715)" fill="#E9E9EA"/>
    </svg>
  )
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close only if the click was on the overlay and not its children
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <button onClick={onClose} className="modal-close-button">
          <CloseIcon />
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
