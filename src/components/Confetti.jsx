import { useEffect, useRef } from 'react';
import { tsParticles } from 'tsparticles-engine';
import { loadConfettiPreset } from 'tsparticles-preset-confetti';

const Confetti = ({ 
  autoPlay = true, 
  duration = 5000, 
  onComplete,
  colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#F38181'],
  spread = 360,
  particleCount = 50,
  includeEmoji = true
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    let particlesInstance = null;

    const initConfetti = async () => {
      try {
        // Load the confetti preset
        await loadConfettiPreset(tsParticles);

        // Initialize confetti with realistic physics
        particlesInstance = await tsParticles.load('confetti-container', {
          preset: 'confetti',
          particles: {
            color: {
              value: colors,
            },
            number: {
              value: particleCount,
              max: particleCount,
            },
            move: {
              direction: 'spread',
              enable: true,
              outModes: {
                default: 'split',
                bottom: 'out',
              },
              random: false,
              speed: 1,
              straight: false,
            },
            gravity: {
              enable: true,
              acceleration: 0.1,
              maxSpeed: 5,
            },
            opacity: {
              value: {
                min: 0.3,
                max: 1,
              },
            },
            size: {
              value: {
                min: 3,
                max: 8,
              },
            },
            rotate: {
              value: {
                min: 0,
                max: 360,
              },
              direction: 'random',
              animation: {
                enable: true,
                speed: 10,
              },
            },
            tilt: {
              direction: 'random',
              enable: true,
              value: {
                min: 0,
                max: 360,
              },
              animation: {
                enable: true,
                speed: 10,
              },
            },
            wobble: {
              distance: 10,
              enable: true,
              speed: {
                min: -5,
                max: 5,
              },
            },
            life: {
              count: 0,
              duration: {
                sync: true,
                value: 0,
              },
            },
          },
          emitters: {
            direction: 'top',
            rate: {
              delay: 0.1,
              quantity: Math.ceil(particleCount / 10),
            },
            position: {
              x: 50,
              y: -10,
            },
          },
        });

        if (onComplete && duration > 0) {
          setTimeout(() => {
            if (particlesInstance) {
              particlesInstance.destroy();
            }
            if (onComplete) {
              onComplete();
            }
          }, duration);
        }
      } catch (error) {
        console.error('Error loading confetti:', error);
      }
    };

    if (autoPlay && containerRef.current) {
      initConfetti();
    }

    return () => {
      if (particlesInstance) {
        particlesInstance.destroy();
      }
    };
  }, [autoPlay, duration, onComplete, colors, spread, particleCount, includeEmoji]);

  return (
    <div
      ref={containerRef}
      id="confetti-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default Confetti;
