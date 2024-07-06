import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import ContactForm from './FormSubmission';

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px 20px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ModalContent = styled.div`
  padding: 20px; /* Adjust padding as needed */
`;

type FormSubmissionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

const FormSubmissionModal: React.FC<FormSubmissionModalProps> = ({ isOpen, onRequestClose }) => {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="ReactModal__Overlay"
      className="ReactModal__Content"
    >
      <ModalContent>
        <CloseButton onClick={onRequestClose}>Close</CloseButton>
        <ContactForm />
      </ModalContent>
    </Modal>
  );
};

export default FormSubmissionModal;
