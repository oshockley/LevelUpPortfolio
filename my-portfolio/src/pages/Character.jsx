import { useEffect, useRef } from 'react';
import './Character.css';

export default function Character() {
  const spriteRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 6; // Number of frames in sprite sheet
    const frameWidth = 64; // width of a single frame
    const speed = 120; // ms between frames

    const interval = setInterval(() => {
      frame = (frame + 1) % totalFrames;
      if (spriteRef.current) {
        spriteRef.current.style.backgroundPosition = `-${frame * frameWidth}px 0px`;
      }
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="character-container">
      <div
        className="character-sprite"
        ref={spriteRef}
      ></div>
    </div>
  );
}
