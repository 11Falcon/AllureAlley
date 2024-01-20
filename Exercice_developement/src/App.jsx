import React, { useState } from 'react';
import Modal from 'react-modal';
import Header from './components/Header';
import './App.css';

Modal.setAppElement('#root'); // Set the root element for accessibility

function App() {
  const [message, setMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchMessageFromFlask = async () => {
    try {
      const response = await fetch('http://localhost:5000/get_message');
      const data = await response.json();
      setMessage(data.message);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error fetching message:', error);
      // Handle error as needed
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='App'>
      <Header />
      <button onClick={fetchMessageFromFlask} className='Button-camera'>
        Fetch Message from Flask
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Message Modal"
        className="mod"
      >
        <button onClick={closeModal}>Close Modal</button>
        <p className='CenteredParagraph'>{message}</p>
      </Modal>
    </div>
  );
}

export default App;
