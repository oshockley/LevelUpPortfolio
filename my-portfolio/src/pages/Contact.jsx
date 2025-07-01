import { useState, useEffect } from 'react';
import './Contact.css';
import LevelOverlay from '../components/LevelOverlay'; // ✅ import overlay

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [showLevel, setShowLevel] = useState(true); // ✅ overlay control

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  useEffect(() => {
    const finalLevelAudio = new Audio('/sounds/final-level.mp3'); // 🎵 optional unique sound
    finalLevelAudio.volume = 0.5;
    finalLevelAudio.play();

    const overlayTimer = setTimeout(() => {
      setShowLevel(false);
    }, 1500);

    return () => clearTimeout(overlayTimer);
  }, []);

  return (
    <section className="contact-section">
      {showLevel && <LevelOverlay levelName="FINAL LEVEL: Transmission Portal" />}
      <div className="scanlines"></div>

      <div className="contact-panel">
        <h1 className="glitch-title" data-text=":: CONTACT HQ ::">:: CONTACT HQ ::</h1>

        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" placeholder="📛 Your Name" required />
          <input type="email" placeholder="📧 Email Address" required />
          <textarea placeholder="📝 Transmission Message" required />

          <button type="submit" className="contact-button">
            {submitted ? '🛰️ Transmitting...' : '🚀 Send Transmission'}
          </button>
        </form>

        {submitted && (
          <div className="confirmation-glow">✅ Transmission Received</div>
        )}
      </div>
    </section>
  );
}
