import { Modal, TitleBar, Tabs, Tab} from '@react95/core';
import { P5Canvas } from "@p5-wrapper/react"; 
import { useRef, useEffect, useState } from 'react';
import starsSimulation from '../processing-projects/stars-simulation.jsx';
import { FilePencil, Pbrush1, Wordpad, Awfxcg321304, FlyingThroughSpace100, CdMusic } from '@react95/icons';
import cameraDesktopIcon from '../assets/progman_13_32x32-1bit.png';
import knicksLogo from '../assets/nyknicks_logo.svg';
import terminalIcon from '../assets/terminal-72.png';
import crystalBallIcon from '../assets/crystal_ball.png';
import PhotoFolder from './PhotoFolder.jsx';
import Resume from './Resume.jsx';
import TarotDraw from './TarotDraw.jsx';
import LEDScoreboard from './LEDScoreboard.jsx';

/**
 * Reusable modal component for desktop windows
 * Renders different content based on modalType
 */
export const DesktopModal = ({
  isOpen,
  modalId,
  onClose,
  defaultPosition = { x: 50, y: 20 },
}) => {
  const modalRef = useRef(null);
  const [centerPosition, setCenterPosition] = useState({ x: 0, y: 0 });

  // Measure and center knicks modal
  useEffect(() => {
    if (isOpen && modalId === 'knicks' && modalRef.current) {
      const rect = modalRef.current.getBoundingClientRect();
      const centerX = (window.innerWidth - rect.width) / 2;
      const centerY = (window.innerHeight - rect.height) / 2;
      setCenterPosition({ x: Math.max(0, centerX), y: Math.max(0, centerY) });
    }
  }, [isOpen, modalId]);

  if (!isOpen) return null;

  // Define modal configurations by type
  const modalConfigs = {
    notes: {
      title: 'notes',
      icon: <FilePencil />,
      content: <div style={{ padding: '20px' }}>📝 Notes content goes here</div>,
    },
    paint: {
      title: 'paint',
      icon: <Pbrush1 />,
      content: <iframe
        src="https://paint.js.org/"
        title="Paint"
        style={{ width: '100%', height: '100%', minHeight: '500px', border: 'none', display: 'block' }}
        allowFullScreen
      />,
    },
    archives: {
      title: 'archives',
      icon: <img src={cameraDesktopIcon} alt="Archives" style={{ width: 16, height: 16, display: 'block', marginRight: 4 }} />,
      content: <PhotoFolder />,
    },
    resume: {
      title: 'resume',
      icon: <Wordpad />,
      content: <Resume />,
    },
    contact: {
      title: 'contact',
      icon: <Awfxcg321304 />,
      content: <Tabs width="350px" defaultActiveTab="About">
      <Tab title="About">
        <div style={{ padding: '10px', fontSize: '14px', lineHeight: '1.6' }}>
          <p style={{ marginTop: 0, fontWeight: 'bold' }}>
            Welcome to my Windows 95 Portfolio
          </p>
          <p>
            This nostalgic desktop environment recreates the classic Windows 95 experience while showcasing my projects and skills. Navigate through the desktop to explore my work, resume, and creative projects.
          </p>
          <p style={{ marginTop: '12px', fontWeight: 'bold' }}>
            Built With:
          </p>
          <ul style={{ marginTop: '8px', marginBottom: '8px' }}>
            <li>React - Interactive UI components</li>
            <li>React95 - Authentic Windows 95 styling</li>
            <li>p5.js - Generative art and simulations</li>
            <li>Vite - Fast build tooling</li>
          </ul>
          <p style={{ fontSize: '12px', color: '#666', marginTop: '12px' }}>
            Explore the desktop icons to discover more about my work, experiments, and creative endeavors.
          </p>
        </div>
      </Tab>
      <Tab title="Apps">
        <div style={{ padding: '10px', fontSize: '13px', lineHeight: '1.8' }}>
          <p style={{ marginTop: 0, fontWeight: 'bold', marginBottom: '8px' }}>
            Available Applications:
          </p>
          <ul style={{ marginLeft: '16px', marginTop: '0' }}>
            <li><strong>📝 Notes</strong> - Quick note-taking</li>
            <li><strong>🎨 Paint</strong> - Browser-based drawing tool</li>
            <li><strong>📷 Archives</strong> - Photo gallery</li>
            <li><strong>📄 Resume</strong> - My professional background</li>
            <li><strong>🌌 Galaxy</strong> - Interactive star field simulation</li>
            <li><strong>🎵 DJ Annita</strong> - Music playlist</li>
            <li><strong>💻 Terminal</strong> - Command-line interface</li>
            <li><strong>🔮 Solitarot</strong> - A three-card tarot reading</li>
          </ul>
        </div>
      </Tab>
    </Tabs>,
    },
    galaxy: {
      title: 'galaxy',
      icon: <FlyingThroughSpace100 />,
      content: <P5Canvas sketch={starsSimulation} />,
    },
    music: {
      title: 'dj annita',
      icon: <CdMusic />,
      content: <iframe data-testid="embed-iframe" title="7/10" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/7AFtPXHSyqhQB9E31SeaHg?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
    },
    terminal: {
      title: 'terminal',
      icon: <img src={terminalIcon} alt="Terminal" style={{ width: 16, height: 16, display: 'block', marginRight: 4 }} />,
      content: <iframe
        src="https://anahlewi.github.io/personal-website-term/"
        title="Terminal"
        style={{ width: '100%', height: '100%', minHeight: '500px', border: 'none', display: 'block' }}
        allowFullScreen
      />,
    },
    tarot: {
      title: 'solitarot',
      icon: <img src={crystalBallIcon} alt="Tarot Draw" style={{ width: 16, height: 16, display: 'block', marginRight: 4 }} />,
      content: <TarotDraw />,
    },
    knicks: {
      title: 'knicks',
      icon: <img src={knicksLogo} alt="Knicks" style={{ width: 16, height: 16, display: 'block', marginRight: 4 }} />,
      content: <LEDScoreboard />,
    },
  };

  const config = modalConfigs[modalId] || {
    title: 'window',
    icon: <FilePencil />,
    content: <div>Content not found</div>,
  };

  const isFullScreen = ['archives', 'paint', 'terminal'].includes(modalId);
  const isFixedSize = ['tarot', 'knicks'].includes(modalId);
  const isKnicks = modalId === 'knicks';

  return (
    <Modal
      ref={modalRef}
      width={isFullScreen ? '100vw' : isFixedSize ? (isKnicks ? '90vw' : '700px') : 'auto'}
      height={isFullScreen ? '100vh' : 'auto'}
      style={isFullScreen ? {
        position: 'fixed',
        top: 0,
        left: 0,
        margin: 0,
        maxWidth: '100vw',
        maxHeight: '100vh',
      } : isKnicks ? {
        position: 'fixed',
        left: `${centerPosition.x}px`,
        top: `${centerPosition.y}px`,
        margin: 0,
      } : {
        minWidth: '300px',
        maxWidth: '80vw',
        minHeight: '150px',
        maxHeight: '80vh',
      }}
      icon={config.icon}
      title={config.title}
      dragOptions={{
        defaultPosition: isFullScreen ? { x: 0, y: 0 } : isKnicks ? centerPosition : defaultPosition,
      }}
      titleBarOptions={[
        <Modal.Minimize key="minimize" />,
        <TitleBar.Help
          key="help"
          onClick={() => {
            alert(`Help for ${config.title}`);
          }}
        />,
        <TitleBar.Close key="close" onClick={onClose} />,
      ]}
    >
      <div style={{ overflow: 'auto', height: isFullScreen ? 'calc(100vh - 60px)' : undefined, maxHeight: isFullScreen ? undefined : 'calc(80vh - 100px)' }}>
        {config.content}
      </div>
    </Modal>
  );
};
