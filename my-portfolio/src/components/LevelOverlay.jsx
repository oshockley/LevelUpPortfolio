// src/components/LevelOverlay.jsx
import './LevelOverlay.css';

export default function LevelOverlay({ levelName }) {
  return (
    <div className="level-overlay">
      <h2>{levelName}</h2>
    </div>
  );
}
