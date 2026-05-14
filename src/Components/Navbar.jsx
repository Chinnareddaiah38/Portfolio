import { Link } from "react-router-dom";

export default function Navbar() {
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
            position: relative;
            padding: 6px 10px;
            border-radius: 6px;
            transition: 0.3s;
            white-space: nowrap;
          }

          .nav-links a:hover {
            color: #38bdf8;
            background: rgba(56, 189, 248, 0.1);
          }
        `}
      </style>

      <div style={styles.nav}>
        {/* BRAND */}
        <div style={styles.logoWrapper}>
          <div style={styles.logoBox}>
            <div style={styles.spinner}></div>
            <div style={styles.logoText}>C</div>
          </div>

          <h2 style={styles.name}>Chinnareddaiah</h2>
        </div>

        {/* LINKS */}
        <div className="nav-links" style={styles.links}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/certificates">Certificates</Link>
          <Link to="/contact">Contact</Link>

          <a
            href="/src/assets/Chinnareddiah_Chagalamarri_Resume.pdf"
            target="_blank"
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

    background: "linear-gradient(120deg, #020617, #0f172a, #020617)",
    backgroundSize: "300% 300%",
    animation: "darkWave 12s linear infinite",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    /* ✔ SAFE PADDING (NO OVERFLOW) */
    padding: "0 40px",

    boxSizing: "border-box",

    zIndex: 1000,
    boxShadow: "0 8px 20px rgba(0,0,0,0.6)",
  },

  logoWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    flexShrink: 0,
  },

  logoBox: {
    width: "42px",
    height: "42px",
    position: "relative",
    flexShrink: 0,
  },

  spinner: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #38bdf8, #6366f1, #8b5cf6)",
    animation: "spinBox 4s linear infinite",
    boxShadow:
      "0 0 18px rgba(99,102,241,0.6), 0 8px 20px rgba(0,0,0,0.4)",
  },

  logoText: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "900",
    fontSize: "20px",
    color: "white",
    zIndex: 2,
  },

  name: {
    color: "#e0f2fe",
    fontWeight: "bold",
    fontSize: "18px",
    whiteSpace: "nowrap",
    flexShrink: 0,
  },

  links: {
    display: "flex",
    alignItems: "center",
    gap: "22px",

    /* IMPORTANT: prevents pushing out of screen */
    flexWrap: "nowrap",
  },

  resumeBtn: {
    padding: "8px 16px",
    background: "linear-gradient(135deg, #38bdf8, #6366f1)",
    borderRadius: "8px",
    color: "white",
    fontWeight: "600",
    textDecoration: "none",
    whiteSpace: "nowrap",
    flexShrink: 0,
  },
};