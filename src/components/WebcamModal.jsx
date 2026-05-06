import { useState, useRef, useEffect } from 'react';
import { Modal, TitleBar } from '@react95/core';

export const useWebcam = () => {
  const [webcamOpen, setWebcamOpen] = useState(false);
  const [webcamStream, setWebcamStream] = useState(null);

  const openWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setWebcamStream(stream);
      setWebcamOpen(true);
    } catch (err) {
      console.error('Webcam access denied', err);
    }
  };

  const closeWebcam = () => {
    if (webcamStream) {
      webcamStream.getTracks().forEach(track => track.stop());
      setWebcamStream(null);
    }
    setWebcamOpen(false);
  };

  return { webcamOpen, webcamStream, openWebcam, closeWebcam };
};

export const WebcamModal = ({ webcamOpen, webcamStream, onClose }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (webcamOpen && videoRef.current && webcamStream) {
      videoRef.current.srcObject = webcamStream;
    }
  }, [webcamOpen, webcamStream]);

  if (!webcamOpen) return null;

  return (
    <Modal
      title="webcam"
      titleBarOptions={[
        <TitleBar.Close key="close" onClick={onClose} />,
      ]}
      defaultPosition={{ x: 200, y: 150 }}
      width="340px"
    >
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{ width: '100%', display: 'block' }}
      />
    </Modal>
  );
};
