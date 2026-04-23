import { Modal, TitleBar, Tabs, Tab, Fieldset, Checkbox, Input, Dropdown } from '@react95/core';
import { P5Canvas } from "@p5-wrapper/react"; 
import beachPhoto from '../processing-projects/photo-animaton.jsx';
import starsSimulation from '../processing-projects/stars-simulation.jsx';
import { FilePencil, Pbrush1, MsawtAwtIcon, Progman11, Wordpad, Awfxcg321304, FlyingThroughSpace100, CdMusic } from '@react95/icons';
import PhotoFolder from './PhotoFolder.jsx';

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
  if (!isOpen) return null;

  // Define modal configurations by type
  const modalConfigs = {
    notes: {
      title: 'Notes',
      icon: <FilePencil />,
      content: <div style={{ padding: '20px' }}>📝 Notes content goes here</div>,
    },
    paint: {
      title: 'Paint',
      icon: <Pbrush1 />,
      content: <div style={{ padding: '20px' }}>🎨 Paint editor goes here</div>,
    },
    coding: {
      title: 'Coding',
      icon: <MsawtAwtIcon />,
      content: <div style={{ padding: '20px' }}>💻 Coding projects go here</div>,
    },
    arts: {
      title: 'Arts & Crafts',
      icon: <Progman11 />,
      content: <PhotoFolder />,
    },
    resume: {
      title: 'Resume',
      icon: <Wordpad />,
      content: <div style={{ padding: '20px' }}>📄 Resume content goes here</div>,
    },
    contact: {
      title: 'Contact',
      icon: <Awfxcg321304 />,
      content: <Tabs width="350px" defaultActiveTab="Compatibility">
      <Tab title="General">
        <Fieldset legend="Logon validation" style={{
        marginBottom: '1em'
      }}>
          <Checkbox readOnly checked>
            Log on to Windows NT domain
          </Checkbox>
          <br />
          <p style={{
          marginLeft: 22,
          marginTop: 4
        }}>
            When you log on, your password will be verified in a Windows NT
            domain.
          </p>
          <p style={{
          marginBottom: 4,
          marginLeft: 22
        }}>Windows NT domain:</p>
          <Input style={{
          width: 180,
          marginLeft: 22
        }} />
        </Fieldset>

        <Fieldset legend="Network logon options">
          <Checkbox>Quick logon</Checkbox>
          <p style={{
          marginBottom: 4,
          marginLeft: 22,
          marginTop: 4
        }}>
            Windows logs you onto the network, but network drives are not
            reconnected until you use them.
          </p>
          <Checkbox>Logon and restore network connections</Checkbox>
          <p style={{
          marginBottom: 4,
          marginLeft: 22,
          marginTop: 4
        }}>
            When you log onto the network, Windows verifies that each network
            drive is ready to use.
          </p>
        </Fieldset>
      </Tab>
      <Tab title="Compatibility">
        <p style={{
        marginTop: 0,
        marginBottom: '1.6em'
      }}>
          If you have problems with this program and it worked correctly on an
          earlier version of Windows, select the compatibility mode that matches
          that earlier version.
        </p>

        <Fieldset legend="Compatibility mode" style={{
        marginBottom: '1.6em'
      }}>
          <Checkbox readOnly checked>
            Run this program in compatibility mode for:
          </Checkbox>
          <Dropdown style={{
          width: 200
        }} options={['Windows 95']} />
        </Fieldset>

        <Fieldset legend="Display Settings">
          <Checkbox>Run in 256 colors</Checkbox>
          <Checkbox>Run in 640 x 480 screen resolution</Checkbox>
          <Checkbox>Disable visual themes</Checkbox>
        </Fieldset>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>
          Learn more about <a href="#">program compatibility.</a>
        </p>
      </Tab>
    </Tabs>,
    },
    galaxy: {
      title: 'Galaxy',
      icon: <FlyingThroughSpace100 />,
      content: <P5Canvas sketch={starsSimulation} />,
    },
    music: {
      title: 'Music',
      icon: <CdMusic />,
      content: <iframe data-testid="embed-iframe" title="7/10" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/7AFtPXHSyqhQB9E31SeaHg?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
    },
  };

  const config = modalConfigs[modalId] || {
    title: 'Window',
    icon: <FilePencil />,
    content: <div>Content not found</div>,
  };

  return (
    <Modal
      width="auto"
      height="auto"
      style={{
        minWidth: '300px',
        maxWidth: '80vw',
        minHeight: '150px',
        maxHeight: '80vh',
      }}
      icon={config.icon}
      title={config.title}
      dragOptions={{
        defaultPosition,
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
      <div style={{ overflow: 'auto', maxHeight: 'calc(80vh - 100px)' }}>
        {config.content}
      </div>
    </Modal>
  );
};
