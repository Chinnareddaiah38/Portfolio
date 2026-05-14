import cloud from "../assets/cloud.jpg";
import cvip from "../assets/cvip.jpg";
import quantum from "../assets/quantum.jpg";
import fullstack from "../assets/fullstack.jpg";
import swarna from "../assets/swarna.jpg";

export default function Certificates() {
  return (
    <div style={styles.box}>
      <h1 style={styles.title}>Certificates</h1>

      <div style={styles.grid}>
        <img src={cloud} alt="Cloud Computing Certificate" style={styles.img} />
        <img src={cvip} alt="CVIP Certificate" style={styles.img} />
        <img src={quantum} alt="Quantum Fundamentals Certificate" style={styles.img} />
        <img src={fullstack} alt="Full Stack Java Certificate" style={styles.img} />
        <img src={swarna} alt="Swarna Certificate" style={styles.img} />
      </div>
    </div>
  );
}

const styles = {
  box: {
    minHeight: "100vh",
    padding: "100px 140px",
    background: "radial-gradient(circle at top, #1e293b, #020617)",
    color: "white",
  },

  title: {
    fontSize: "44px",
    marginBottom: "50px",
  },

  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "60px",
    flexWrap: "wrap",
  },

  img: {
    width: "380px",
    borderRadius: "14px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
    transition: "transform 0.3s ease",
  },
};