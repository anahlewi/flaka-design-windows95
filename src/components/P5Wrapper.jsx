import React from 'react';
import p5 from 'p5';

const P5Wrapper = ({ sketch }) => {
  const containerRef = React.useRef(null);
  const p5InstanceRef = React.useRef(null);

  React.useEffect(() => {
    if (!containerRef.current) return;

    try {
      // Create a new p5 instance in instance mode
      // Pass the sketch function directly, which receives the p5 instance
      p5InstanceRef.current = new p5(sketch, containerRef.current);

      return () => {
        // Cleanup p5 instance on unmount
        if (p5InstanceRef.current) {
          p5InstanceRef.current.remove();
        }
      };
    } catch (error) {
      console.error('Error initializing p5 sketch:', error);
    }
  }, [sketch]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default P5Wrapper;

