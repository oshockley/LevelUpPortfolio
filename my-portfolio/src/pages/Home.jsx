import './Home.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const handleStart = () => {
    const audio = new Audio('/sounds/click.mp3');
    audio.volume = 0.6;
    audio.play();
    setTimeout(() => navigate('/about'), 250);
  };

  // Animate the loading bar from 0% to 100%
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 5) + 1;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => setLoading(false), 300); // Short pause before showing start
      }
      setProgress(current);
    }, 50);
  }, []);

  return (
    <section className="game-home">
      <div className="scanlines"></div>
      <div className="hud-panel">
        <h1 className="hud-title glitch">🎮 Initiating <span>O'Neal's Portfolio</span></h1>
        {loading ? (
          <div className="loading-container">
            <p className="loading-text">Loading into Game... {progress}%</p>
            <div className="loading-bar-outer">
              <div className="loading-bar-inner" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        ) : (
          <>
            <p className="hud-subtext">Press Start to Deploy</p>
            <button className="start-button pixel-border" onClick={handleStart}>
              ▶ Start Mission
            </button>
          </>
        )}
      </div>
    </section>
  );
}
