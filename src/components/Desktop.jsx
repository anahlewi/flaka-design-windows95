import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';
import { Alert, List, Modal, TaskBar, TitleBar } from '@react95/core';
import cameraDesktopIcon from '../assets/progman_13_32x32-1bit.png';
import '../App.css';
import {
  ReaderClosed,
  WindowsExplorer, 
  FilePencil,
  Pbrush1,
  MsawtAwtIcon,
  Progman11,
  Wordpad,
  Awfxcg321304,
  FlyingThroughSpace100,
  CdMusic,
  Progman,
} from "@react95/icons";

import wallpaper3 from '../assets/wallpaper3.JPG';
import { ClippyProvider } from '@react95/clippy';
import { useModalManager } from '../hooks/useModalManager';
import { DesktopTaskBar } from './DesktopTaskBar';  
import { DesktopModal } from './DesktopModal';

const MODAL_IDS = {
  NOTES: 'notes',
  PAINT: 'paint',
  CODING: 'coding',
  ARTS: 'arts',
  RESUME: 'resume',
  CONTACT: 'contact',
  GALAXY: 'galaxy',
  MUSIC: 'music',
};

function Desktop(){
    const { toggleModal, isModalOpen, closeModal } = useModalManager();
    
    const closeAlert = () => {
      // Handle alert close action
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
        <div onDoubleClick={() => toggleModal(MODAL_IDS.NOTES)}>
          <FilePencil variant="32x32_4" />
          <p>Notes</p>
        </div>
        <div onDoubleClick={() => toggleModal(MODAL_IDS.PAINT)}>
          <Pbrush1 variant="32x32_4" />
          <p>Paint</p>
        </div>
        <div onDoubleClick={() => toggleModal(MODAL_IDS.CODING)}>
          <MsawtAwtIcon variant="32x32_4" />
          <p>Coding</p>
        </div>
        <div onDoubleClick={() => toggleModal(MODAL_IDS.ARTS)}>
          <img src={cameraDesktopIcon} alt="Arts & Crafts" width={32} height={32} />
          <p>Archives</p>
        </div>
        <div onDoubleClick={() => toggleModal(MODAL_IDS.RESUME)}>
          <Wordpad variant="32x32_4" />
          <p>Resume</p>
        </div>
        <div onDoubleClick={() => toggleModal(MODAL_IDS.CONTACT)}>
          <Awfxcg321304 variant="32x32_4" />
          <p>Contact</p>
        </div>
        <div onDoubleClick={() => toggleModal(MODAL_IDS.GALAXY)}>
          <FlyingThroughSpace100 variant="32x32_4" />
          <p>Galaxy</p>
        </div>
        <div onDoubleClick={() => toggleModal(MODAL_IDS.MUSIC)}>
          <CdMusic variant="32x32_4" />
          <p>Music</p>
        </div>
      </div>
      <Alert 
        title="emotional check-in" 
        type="warning" 
        message="Warning: do you feel like you have agency?" 
        titleBarOptions={[
          <TitleBar.Help
            key="help"
            onClick={() => window.open('https://en.wikipedia.org/wiki/Emotional_intelligence', '_blank')}
          />,
          <TitleBar.Close key="close" onClick={closeAlert} />,
        ]}
        buttons={[
           {
          value: 'Yes',
          onClick: closeAlert
          },
          {
          value: 'No',
          onClick: closeAlert
          }
        ]} 
      />
      <Alert 
        title="hyper-surveillance" 
        type="error" 
        message="critical error: I can't see you, can I see you?" 
        titleBarOptions={[
          <TitleBar.Help
            key="help"
          />,
          <TitleBar.Close key="close" onClick={closeAlert} />,
        ]}
        buttons={[
           {
          value: 'Yes',
          onClick: closeAlert
          },
          {
          value: 'No',
          onClick: closeAlert
          }
        ]} 
      />
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
        isOpen={isModalOpen(MODAL_IDS.CODING)}
        modalId={MODAL_IDS.CODING}
        onClose={() => closeModal(MODAL_IDS.CODING)}
      />
      <DesktopModal
        isOpen={isModalOpen(MODAL_IDS.ARTS)}
        modalId={MODAL_IDS.ARTS}
        onClose={() => closeModal(MODAL_IDS.ARTS)}
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

      </ClippyProvider>
  );
}

export default Desktop;