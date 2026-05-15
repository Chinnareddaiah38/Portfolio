import { useState, useEffect } from "react";
import myPhoto from "../assets/myPhoto.jpg";
import resume from "../assets/Chinnareddiah_Chagalamarri_Resume.pdf";

export default function Home() {
  const [width, setWidth] = useState(window.innerWidth);

  // ✅ Listen to resize
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= 768;
  const isTablet = width > 768 && width <= 1024;

  return (
    <div style={styles.home(isMobile)}>
      {/* IMAGE */}
      <div style={styles.left}>
        <img src={myPhoto} alt="Profile" style={styles.img(isMobile)} />
      </div>

      {/* CONTENT */}
      <div style={styles.right(isMobile, isTablet)}>
        <h1 style={styles.title(isMobile)}>Hi, I'm Chinnareddiah</h1>

        <h3 style={styles.subTitle}>Java Developer</h3>

        <p style={styles.text}>
          I am a passionate Core Java developer with strong knowledge of
          Object-Oriented Programming, Collections, Multithreading, and SQL.
          I enjoy building real-world applications, writing clean and efficient
          code, and continuously improving my technical and problem-solving
          skills.
        </p>

        <a href={resume} download style={styles.resumeBtn}>
          📄 Download Resume
        </a>
      </div>
    </div>
  );
}

const styles = {
  home: (isMobile) => ({
    minHeight: "100vh",
    paddingTop: "75px", // matches navbar height
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: isMobile ? "40px" : "0",
    background:
      "linear-gradient(-45deg, #0f172a, #1e3a8a, #111827)",
  }),

  left: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },

  right: (isMobile, isTablet) => ({
    flex: 1,
    maxWidth: "520px",
    marginLeft: isMobile ? "0" : isTablet ? "40px" : "90px",
    marginRight: isMobile ? "0" : isTablet ? "40px" : "120px",
    padding: isMobile ? "0 20px" : "0",
    color: "white",
    lineHeight: "1.9",
    textAlign: isMobile ? "center" : "left",
  }),

  img: (isMobile) => ({
    width: isMobile ? "220px" : "330px",
    height: isMobile ? "220px" : "330px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "5px solid #3b82f6",
  }),

  title: (isMobile) => ({
    fontSize: isMobile ? "32px" : "48px",
    marginBottom: "12px",
  }),

  subTitle: {
    fontSize: "22px",
    color: "#3b82f6",
    marginBottom: "22px",
  },

  text: {
    fontSize: "16px",
    opacity: 0.92,
    marginBottom: "30px",
  },

  resumeBtn: {
    display: "inline-block",
    padding: "12px 26px",
    borderRadius: "30px",
    backgroundColor: "#3b82f6",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "0.3s",
  },
};