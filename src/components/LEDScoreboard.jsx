import './LEDScoreboard.css';

const LEDScoreboard = () => {

  return (
    <div style={{ height: '100%', backgroundColor: '#000', padding:'10px', display: 'flex', flexDirection: 'column' }}>
      {/* Scrolling LED Text */}
      <div className="scroller-container" style={{ flex: 1, marginBottom: '0', justifyContent: 'center' }}>
        <div className="marquee">
          <div className="marquee-content">
            <div className="led-text solid">
              NEW YORK KNICKS 2026 NBA CHAMPIONS
            </div>
          </div>
          <div className="marquee-content">
            <div className="led-text solid">
              NEW YORK KNICKS 2026 WORLD CHAMPIONS
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
