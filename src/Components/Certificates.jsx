import cloud from "../assets/cloud.jpg";
import cvip from "../assets/cvip.jpg";
import quantum from "../assets/quantum.jpg";
import fullstack from "../assets/fullstack.jpg";
import swarna from "../assets/swarna.jpg";

export default function Certificates() {
  const isMobile = window.innerWidth <= 768;

  return (
    <div style={styles.container(isMobile)}>
      <h1 style={styles.title(isMobile)}>Certificates</h1>

      <div style={styles.grid}>
        {[cloud, cvip, quantum, fullstack, swarna].map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Certificate"
            style={styles.image(isMobile)}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: (isMobile) => ({
    minHeight: "100vh",
    padding: isMobile ? "80px 20px" : "100px 120px",
    background: "linear-gradient(135deg, #020617, #1e293b)",
    color: "#fff",
  }),

  title: (isMobile) => ({
    fontSize: isMobile ? "30px" : "44px",
    textAlign: "center",
    marginBottom: "40px",
  }),

  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
  },

  image: (isMobile) => ({
    width: isMobile ? "100%" : "360px",
    maxWidth: "360px",
    borderRadius: "14px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
  }),
};