import { useState, useEffect } from 'react';
import './LEDScoreboard.css';

const LEDScoreboard = () => {
  const [score1, setScore1] = useState(88);
  const [score2, setScore2] = useState(92);
  const [time, setTime] = useState('12:34');
  const [period, setPeriod] = useState('4TH');

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ height: '100%', backgroundColor: '#000', padding:'10px', display: 'flex', flexDirection: 'column' }}>
      {/* Scrolling LED Text */}
      <div className="scroller-container" style={{ flex: 1, marginBottom: '0', justifyContent: 'center' }}>
        <div className="marquee">
          <div className="marquee-content">
            <div className="led-text solid">
              NEW YORK KNICKS 2026 ECF CHAMPIONS
            </div>
          </div>
          <div className="marquee-content">
            <div className="led-text solid">
              NEW YORK KNICKS 2026 ECF CHAMPIONS
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '40px',
          alignItems: 'center',
          justifyItems: 'center',
        }}
      >
        {/* Additional content can go here */}
      </div>
    </div>
  );
};

export default LEDScoreboard;
