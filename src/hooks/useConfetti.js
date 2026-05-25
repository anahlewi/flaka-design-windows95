import { useCallback, useState } from 'react';

export const useConfetti = (duration = 5000) => {
  const [showConfetti, setShowConfetti] = useState(false);

  const triggerConfetti = useCallback(() => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, duration);
  }, [duration]);

  return { showConfetti, triggerConfetti };
};
