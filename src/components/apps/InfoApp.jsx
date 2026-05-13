import { Tabs, Tab } from '@react95/core';

const InfoApp = () => {
  return (
    <Tabs width="100%" defaultActiveTab="About">
      <Tab title="About">
        <div style={{
          padding: '15px',
          fontFamily: 'MS Sans Serif, Arial',
          fontSize: '14px',
          lineHeight: '1.6',
        }}>
          <h2 style={{ marginTop: 0, fontSize: '16px', marginBottom: '15px' }}>About this portfolio</h2>
          
          <p style={{ marginBottom: '12px' }}>
            This portfolio is built with <strong>React 95</strong>, a retro Windows 95-themed UI component library. 
            The nostalgic interface provides a playful way to explore my work while paying homage to the classic operating system.
          </p>

          <h3 style={{ fontSize: '14px', marginTop: '15px', marginBottom: '8px', textDecoration: 'underline' }}>Built with:</h3>
          <ul style={{ marginTop: '5px', marginBottom: '15px', paddingLeft: '20px' }}>
            <li><strong>React</strong> — Frontend framework</li>
            <li><strong>React 95</strong> — UI component library</li>
            <li><strong>p5.js</strong> — Creative coding visualizations</li>
            <li><strong>Spotify API</strong> — Music playlist integration</li>
            <li><strong>Modern web standards</strong> — Responsive design and accessibility</li>
          </ul>

          <p style={{ marginBottom: '12px', fontStyle: 'italic' }}>
            The interface blends retro aesthetics with modern functionality, creating a unique browsing experience.
          </p>
        </div>
      </Tab>
      <Tab title="Apps">
        <div style={{
          padding: '15px',
          fontFamily: 'MS Sans Serif, Arial',
          fontSize: '14px',
          lineHeight: '1.6',
        }}>
          <h2 style={{ marginTop: 0, fontSize: '16px', marginBottom: '15px' }}>Available applications</h2>
          
          <ul style={{ marginTop: '5px', paddingLeft: '0px', listStyle: 'none' }}>
            <li style={{ marginBottom: '12px' }}>
              <strong>📸 archives</strong>
              <p style={{ margin: '4px 0 0 20px', color: '#666' }}>
                Browse my photography collection organized by location and project. Double-click to view images in full detail.
              </p>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>📄 resume</strong>
              <p style={{ margin: '4px 0 0 20px', color: '#666' }}>
                View my professional background, experience, skills, and education.
              </p>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>🎨 paint</strong>
              <p style={{ margin: '4px 0 0 20px', color: '#666' }}>
                A fully functional drawing application for creative expression and sketching.
              </p>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>✨ galaxy</strong>
              <p style={{ margin: '4px 0 0 20px', color: '#666' }}>
                An interactive stars simulation visualization built with p5.js. Watch particles move through space.
              </p>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>🎵 dj annita</strong>
              <p style={{ margin: '4px 0 0 20px', color: '#666' }}>
                A curated music playlist powered by Spotify. Listen to my favorite tracks.
              </p>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>💻 terminal</strong>
              <p style={{ margin: '4px 0 0 20px', color: '#666' }}>
                Access to my personal blog and additional web projects. Explore more of my work.
              </p>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>📝 note</strong>
              <p style={{ margin: '4px 0 0 20px', color: '#666' }}>
                Navigate to my work-in-progress blog for the latest thoughts and updates.
              </p>
            </li>
          </ul>
        </div>
      </Tab>
    </Tabs>
  );
};

export default InfoApp;
