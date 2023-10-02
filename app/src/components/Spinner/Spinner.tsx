import React, { useState, useEffect } from 'react';
import './Spinner.css';
import { SpinnerProps } from '../../types/PropTypes';

function Spinner(props: SpinnerProps) {
  const {loadingMessages, spinnerDiameter} = props;
  const [messageIndex, setMessageIndex] = useState<number>(0);
  const [message, setMessage] = useState<string>(loadingMessages[messageIndex]);
  const messageChangeIntervalInMilliseconds = 5000;
  const messageVisibilityIntervalInMilliseconds = 4000;

  useEffect(() => {
    //TO DO: Review this logic
    const updateMessage = () => {
      let index = messageIndex;
      setMessage(loadingMessages[++index]);
      setMessageIndex(index);

      if(index === loadingMessages.length - 1)
        setMessageIndex(-1);
    };

    const intervalId = setInterval(updateMessage, messageChangeIntervalInMilliseconds);

    // Cleanup: Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [message]);

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
      <div className="spinner" style={{ width: spinnerDiameter, height: spinnerDiameter }}>
        <div className="spinner-inner"></div>
      </div>
      <div className="spinner-message">{message}</div>
    </div>
  );
};

export default Spinner;