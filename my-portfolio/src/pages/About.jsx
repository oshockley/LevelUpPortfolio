import './About.css';
import { useEffect, useState } from 'react';
import LevelOverlay from '../components/LevelOverlay'; // ✅ import

export default function About() {
  const [typedText, setTypedText] = useState('');
  const [showLevel, setShowLevel] = useState(true); // ✅ control overlay

  const fullText = "👾 Hey, I'm a full-stack developer creating interactive experiences with code, design, and style.";

  useEffect(() => {
    // ✅ Play level start sound
    const levelAudio = new Audio('/sounds/level-start.mp3');
    levelAudio.volume = 0.5;
    levelAudio.play();

    // ✅ Hide level overlay after 1.5s
    const overlayTimer = setTimeout(() => {
      setShowLevel(false);

      // ✅ Start typing after level overlay finishes
      let i = 0;
      const interval = setInterval(() => {
        setTypedText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) clearInterval(interval);
      }, 30);
    }, 1500);

    return () => clearTimeout(overlayTimer);
  }, []);

  return (
    <section className="about">
      {showLevel && <LevelOverlay levelName="LEVEL 1: Character Data" />}
      <div className="scanlines"></div>

      <div className="about-panel">
        <h1 className="glitch-title" data-text=":: ABOUT ME ::">:: ABOUT ME ::</h1>
        <p className="typewriter">{typedText}</p>

        <div className="stats-grid">
          <div className="holo-card">
            <h2>⚡ Skills</h2>
            <p>JavaScript, React, Node.js, Three.js</p>
          </div>
          <div className="holo-card">
            <h2>🧠 Lore</h2>
            <p>Passionate about design systems, game interfaces & immersive UX.</p>
          </div>
          <div className="holo-card">
            <h2>🎮 Current Quest</h2>
            <p>Building a next-gen portfolio site with shaders, motion, and game logic.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
