import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} O’Neal Shockley. All rights reserved.</p>
        <div className="social-links">
          <a href="https://linkedin.com/in/onealshockley" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href="https://github.com/oshockley" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            GitHub
          </a>
          <a href="mailto:shockleyoneal@gmail.com" aria-label="Email">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}