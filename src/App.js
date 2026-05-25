import { useState, useEffect } from 'react';
import Desktop from './components/Desktop';
import Confetti from './components/Confetti';
import './App.css';



function App() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
  }, []);

  return (
      <>
        <Desktop />
        {showConfetti && (
          <Confetti 
            autoPlay={true} 
            duration={300000} 
            onComplete={() => setShowConfetti(false)}
            colors={['#006BB6', '#F58426','#BEC0C2', "#FFF"]}
            spread={50}
            particleCount={6000}
          />
        )}
      </>
  );
}

export default App;
