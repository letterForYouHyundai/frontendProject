import React from 'react';
import Modal from 'react-modal';

const customModalStyles = {
  overlay: {
    backgroundColor: ' rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: '100vh',
    zIndex: '10',
    position: 'fixed',
    top: '0',
    left: '0',
  },
  content: {
    width: '360px',
    height: '180px',
    zIndex: '150',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
    backgroundColor: 'white',
    justifyContent: 'center',
    overflow: 'auto',
  },
};

const ModalContainer = ({ children, modalOpen, onClose }) => {
  console.log('modal open');
  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={onClose}
      style={customModalStyles}
      contentLabel="Pop up Message"
      shouldCloseOnOverlayClick
    >
      <button
        type="button"
        style={{
          border: 'none', float: 'right', padding: '0.5rem',
        }}
        onClick={onClose}
      >
        X
      </button>
      {children}
    </Modal>
  );
};

export default ModalContainer;
