import React, { useEffect, useState } from 'react';
import './Projects.css';
import LevelOverlay from '../components/LevelOverlay'; // ✅ Import the overlay

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [showLevel, setShowLevel] = useState(true); // ✅ Control overlay

  useEffect(() => {
    const levelAudio = new Audio('/sounds/level-start.mp3');
    levelAudio.volume = 0.5;
    levelAudio.play();

    const overlayTimer = setTimeout(() => setShowLevel(false), 1500);

    fetch('https://api.github.com/users/oshockley/repos?per_page=100')
      .then(res => res.json())
      .then(data => {
        const visible = data
          .filter(r => !r.fork && !r.private)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(visible);
      });

    return () => clearTimeout(overlayTimer);
  }, []);

  return (
    <section className="projects-page">
      {showLevel && <LevelOverlay levelName="LEVEL 2: Inventory Systems" />}
      <div className="scanlines"></div>

      <h1 className="page-title">>> Projects</h1>

      <div className="projects-grid">
        {repos.map(repo => (
          <a
            key={repo.id}
            href={repo.html_url}
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="repo-title">{repo.name}</h2>
            <p className="repo-desc">{repo.description}</p>
            <div className="repo-stats">
              <span>⭐ {repo.stargazers_count}</span>
              <span>🛠️ {repo.language || '—'}</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${Math.min(repo.stargazers_count, 10) * 10}%`
                }}
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
