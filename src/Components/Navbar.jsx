import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [screen, setScreen] = useState(window.innerWidth);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth);
      if (window.innerWidth > 992) setOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = screen <= 992;

  return (
    <>
      <style>
        {`
          @keyframes spinBox {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes darkWave {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }

          .nav-links a {
            text-decoration: none;
            color: #e0f2fe;
            font-weight: 500;
            padding: 10px 14px;
            border-radius: 6px;
            transition: 0.3s;
          }

          .nav-links a:hover {
            color: #38bdf8;
            background: rgba(56,189,248,0.12);
          }
        `}
      </style>

      <div style={styles.nav}>
        {/* LOGO */}
        <div style={styles.logoWrapper}>
          <div style={styles.logoBox}>
            <div style={styles.spinner}></div>
            <div style={styles.logoText}>C</div>
          </div>
          <h2 style={styles.name}>Chinnareddaiah</h2>
        </div>

        {/* HAMBURGER */}
        {isMobile && (
          <div style={styles.hamburger} onClick={() => setOpen(!open)}>
            ☰
          </div>
        )}

        {/* LINKS */}
        <div className="nav-links" style={styles.links(isMobile, open)}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/certificates" onClick={() => setOpen(false)}>Certificates</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

          <a
            href="/src/assets/Chinnareddiah_Chagalamarri_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            style={styles.resumeBtn}
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "75px",
    padding: "0 28px",
    background: "linear-gradient(120deg,#020617,#0f172a,#020617)",
    backgroundSize: "300% 300%",
    animation: "darkWave 12s linear infinite",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 1000,
    boxShadow: "0 8px 20px rgba(0,0,0,0.6)",
  },

  logoWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  logoBox: {
    width: "42px",
    height: "42px",
    position: "relative",
  },

  spinner: {
    width: "100%",
    height: "100%",
    borderRadius: "12px",
    background: "linear-gradient(135deg,#38bdf8,#6366f1,#8b5cf6)",
    animation: "spinBox 4s linear infinite",
  },

  logoText: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "900",
    fontSize: "20px",
    color: "white",
  },

  name: {
    color: "#e0f2fe",
    fontSize: "18px",
    fontWeight: "bold",
  },

  hamburger: {
    fontSize: "28px",
    color: "white",
    cursor: "pointer",
  },

  links: (isMobile, open) => ({
    display: isMobile ? (open ? "flex" : "none") : "flex",
    flexDirection: isMobile ? "column" : "row",

    position: isMobile ? "absolute" : "static",
    top: "75px",

    right: isMobile ? 0 : "auto",
    left: "auto",

    width: isMobile ? "100%" : "auto",
    background: isMobile ? "#020617" : "transparent",

    padding: isMobile ? "20px 0" : "0",
    alignItems: "center",
    justifyContent: isMobile ? "center" : "flex-end",

    gap: "20px",
  }),

  resumeBtn: {
    padding: "8px 18px",
    background: "linear-gradient(135deg,#38bdf8,#6366f1)",
    borderRadius: "8px",
    color: "white",
    fontWeight: "600",
    textDecoration: "none",
  },
};