import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';
import { useState } from 'react';
import cameraDesktopIcon from '../assets/progman_13_32x32-1bit.png';
import terminalIcon from '../assets/terminal-72.png';
import crystalBallIcon from '../assets/crystal_ball.png';
import '../App.css';
import {
  FilePencil,
  Pbrush1,
  Wordpad,
  Awfxcg321304,
  FlyingThroughSpace100,
  CdMusic,
} from "@react95/icons";

import wallpaper3 from '../assets/wallpaper3.JPG';
import { ClippyProvider } from '@react95/clippy';
import { useModalManager } from '../hooks/useModalManager';
import { DesktopTaskBar } from './DesktopTaskBar';  
import { DesktopModal } from './DesktopModal';
import { DesktopAlert } from './DesktopAlert';
import { useWebcam, WebcamModal } from './WebcamModal';

const MODAL_IDS = {
  NOTES: 'notes',
  PAINT: 'paint',
  ARCHIVES: 'archives',
  RESUME: 'resume',
  CONTACT: 'contact',
  GALAXY: 'galaxy',
  MUSIC: 'music',
  TERMINAL: 'terminal',
  TAROT: 'tarot',
};

function Desktop(){
    const { toggleModal, isModalOpen, closeModal } = useModalManager();

    const { webcamOpen, webcamStream, openWebcam, closeWebcam } = useWebcam();

    const [alerts, setAlerts] = useState({
      emotionalCheckin: true,
      hyperSurveillance: true,
      leavingSite: false,
    });

    const closeAlert = (key) => setAlerts(prev => ({ ...prev, [key]: false }));
    const openLeavingSiteAlert = () => setAlerts(prev => ({ ...prev, leavingSite: true }));

    const confirmLeavingSite = () => {
      closeAlert('leavingSite');
      window.open('https://work-in-progress-blog.vercel.app/', '_blank');
    };

    return (
      <ClippyProvider>
         <div 
          id="background-image"
          style={{
            backgroundImage: `url(${wallpaper3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
        />
      {/* Taskbar */}
      <DesktopTaskBar
        MODAL_IDS={MODAL_IDS}
        toggleModal={toggleModal}
      />

      {/* Desktop Icons */}
      <div className="desktop-icons">
        <div onDoubleClick={openLeavingSiteAlert}>
          <FilePencil variant="32x32_4" />
          <p>notes</p>
        </div>
        <div onDoubleClick={() => toggleModal(MODAL_IDS.PAINT)}>
          <Pbrush1 variant="32x32_4" />
          <p>paint</p>
        </div>
        <div onDoubleClick={() => toggleModal(MODAL_IDS.ARCHIVES)}>
          <img src={cameraDesktopIcon} alt="Archives" width={32} height={32} />
          <p>archives</p>
        </div>
        <div onDoubleClick={() => toggleModal(MODAL_IDS.RESUME)}>
          <Wordpad variant="32x32_4" />
          <p>resume</p>
        </div>
        <div onDoubleClick={() => toggleModal(MODAL_IDS.CONTACT)}>
          <Awfxcg321304 variant="32x32_4" />
          <p>contact</p>
        </div>
        <div onDoubleClick={() => toggleModal(MODAL_IDS.GALAXY)}>
          <FlyingThroughSpace100 variant="32x32_4" />
          <p>galaxy</p>
        </div>
        <div onDoubleClick={() => toggleModal(MODAL_IDS.MUSIC)}>
          <CdMusic variant="32x32_4" />
          <p>dj annita</p>
        </div>
        <div onDoubleClick={() => toggleModal(MODAL_IDS.TERMINAL)}>
          <img src={terminalIcon} alt="Terminal" width={32} height={32} />
          <p>terminal</p>
        </div>
        <div onDoubleClick={() => toggleModal(MODAL_IDS.TAROT)}>
          <img src={crystalBallIcon} alt="Tarot Draw" width={32} height={32} />
          <p>solitarot</p>
        </div>
      </div>
      {alerts.leavingSite && (
        <DesktopAlert
          title="navigation"
          type="warning"
          message="you're about to leave this site. continue?"
          position={{ x: Math.floor(window.innerWidth / 2) - 190, y: Math.floor(window.innerHeight / 2) - 90 }}
          onHelp={null}
          onClose={() => closeAlert('leavingSite')}
          buttons={[
            { label: 'Yes', onClick: confirmLeavingSite },
            { label: 'No', onClick: () => closeAlert('leavingSite') },
          ]}
        />
      )}
      {alerts.leavingSite && (
        <DesktopAlert
          title="navigation"
          type="warning"
          message="you're about to leave this site. continue?"
          position={{ x: Math.floor(window.innerWidth / 2) - 190, y: Math.floor(window.innerHeight / 2) - 90 }}
          onHelp={null}
          onClose={() => closeAlert('leavingSite')}
          buttons={[
            { label: 'Yes', onClick: confirmLeavingSite },
            { label: 'No', onClick: () => closeAlert('leavingSite') },
          ]}
        />
      )}
      {alerts.emotionalCheckin && (
        <DesktopAlert
          title="emotional check-in"
          type="warning"
          message="Warning: do you feel like you have agency?"
          position={{ x: 400, y: 100 }}
          onHelp={() => window.open('https://en.wikipedia.org/wiki/Emotional_intelligence', '_blank')}
          onClose={() => closeAlert('emotionalCheckin')}
          buttons={[
            { label: 'Yes', onClick: () => closeAlert('emotionalCheckin') },
            { label: 'No', onClick: () => closeAlert('emotionalCheckin') },
          ]}
        />
      )}
      {alerts.hyperSurveillance && (
        <DesktopAlert
          title="hyper-surveillance"
          type="error"
          message="critical error: I can't see you, can I see you?"
          position={{ x: 300, y: 500 }}
          onClose={() => closeAlert('hyperSurveillance')}
          buttons={[
            { label: 'Yes', onClick: openWebcam },
            { label: 'No', onClick: () => closeAlert('hyperSurveillance') },
          ]}
        />
      )}
      {/* Render all modals based on open state */}
      <DesktopModal
        isOpen={isModalOpen(MODAL_IDS.NOTES)}
        modalId={MODAL_IDS.NOTES}
        onClose={() => closeModal(MODAL_IDS.NOTES)}
      />
      <DesktopModal
        isOpen={isModalOpen(MODAL_IDS.PAINT)}
        modalId={MODAL_IDS.PAINT}
        onClose={() => closeModal(MODAL_IDS.PAINT)}
      />
      <DesktopModal
        isOpen={isModalOpen(MODAL_IDS.ARCHIVES)}
        modalId={MODAL_IDS.ARCHIVES}
        onClose={() => closeModal(MODAL_IDS.ARCHIVES)}
      />
      <DesktopModal
        isOpen={isModalOpen(MODAL_IDS.RESUME)}
        modalId={MODAL_IDS.RESUME}
        onClose={() => closeModal(MODAL_IDS.RESUME)}
      />
      <DesktopModal
        isOpen={isModalOpen(MODAL_IDS.CONTACT)}
        modalId={MODAL_IDS.CONTACT}
        onClose={() => closeModal(MODAL_IDS.CONTACT)}
      />
      <DesktopModal
        isOpen={isModalOpen(MODAL_IDS.GALAXY)}
        modalId={MODAL_IDS.GALAXY}
        onClose={() => closeModal(MODAL_IDS.GALAXY)}
      />
      <DesktopModal
        isOpen={isModalOpen(MODAL_IDS.MUSIC)}
        modalId={MODAL_IDS.MUSIC}
        onClose={() => closeModal(MODAL_IDS.MUSIC)}
      />
      <DesktopModal
        isOpen={isModalOpen(MODAL_IDS.TERMINAL)}
        modalId={MODAL_IDS.TERMINAL}
        onClose={() => closeModal(MODAL_IDS.TERMINAL)}
      />
      <DesktopModal
        isOpen={isModalOpen(MODAL_IDS.TAROT)}
        modalId={MODAL_IDS.TAROT}
        onClose={() => closeModal(MODAL_IDS.TAROT)}
      />

      <WebcamModal
        webcamOpen={webcamOpen}
        webcamStream={webcamStream}
        onClose={closeWebcam}
      />
      </ClippyProvider>
  );
}

export default Desktop;