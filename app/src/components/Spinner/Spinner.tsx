import React, { useState, useEffect } from 'react';
import './Spinner.css';
import { SpinnerProps } from '../../types/PropTypes';

function Spinner(props: SpinnerProps) {
  const [message, setMessage] = useState<string>(props.message[0]);
  const messageChangeIntervalInMilliseconds = 5000;
  const messageVisibilityIntervalInMilliseconds = 4000;

  useEffect(() => {
    const updateMessage = () => {
      setMessage(props.message[1]);
    };

    const intervalId = setInterval(updateMessage, messageChangeIntervalInMilliseconds);

    // Cleanup: Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [props.message]);

  useEffect(() => {
    // Add the 'visible' class to trigger the fade-in effect
    const messageElement = document.querySelector('.spinner-message');
    if (messageElement) {
      messageElement.classList.add('visible');

      // Remove the 'visible' class after the animation duration (1 second in this case)
      setTimeout(() => {
        messageElement.classList.remove('visible');
      }, messageVisibilityIntervalInMilliseconds);
    }
  }, [message]);

  return (
    <div className="spinner-container">
      <div className="spinner" style={{ width: props.size, height: props.size }}>
        <div className="spinner-inner"></div>
      </div>
      <div className="spinner-message">{message}</div>
    </div>
  );
};

export default Spinner;