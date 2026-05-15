import { useState, useEffect } from "react";

export default function About() {
  const [width, setWidth] = useState(window.innerWidth);

  // Listen to resize
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= 768;
  const isTablet = width > 768 && width <= 1024;

  return (
    <div style={styles.about(isMobile)}>
      <h1 style={styles.title(isMobile)}>About Me</h1>

      <p style={styles.para(isMobile)}>
        I am a passionate and detail-oriented <b>Java Developer</b> with a strong
        foundation in <b>Core Java</b> and <b>Object-Oriented Programming</b>
        concepts. I have solid hands-on knowledge of Java Collections,
        Multithreading, Exception Handling, and JDBC, along with good command
        over SQL for database design and querying.
      </p>

      <p style={styles.para(isMobile)}>
        I enjoy developing clean, efficient, and scalable backend applications
        that solve real-world problems. I focus on writing readable,
        maintainable code by following best practices and proper design principles.
      </p>

      <p style={styles.para(isMobile)}>
        As a fresher, I am highly motivated to work in a professional IT
        environment where I can apply my technical skills, gain real-world
        project experience, and continuously improve myself as a Java developer.
      </p>

      {/* EDUCATION */}
      <div style={styles.card(isMobile, isTablet)}>
        <h2 style={styles.subTitle}>Education</h2>

        <div style={styles.eduBox}>
          <h3 style={styles.eduTitle}>
            B.Tech – Computer Science & Engineering
          </h3>

          <p style={styles.eduText}>
            Sri Sai Institute of Technology and Science, Rayachoty
          </p>

          <p style={styles.eduText}>Duration: 2022 – 2026</p>
          <p style={styles.eduText}>Percentage: 76%</p>
        </div>
      </div>

      {/* SKILLS */}
      <div style={styles.card(isMobile, isTablet)}>
        <h2 style={styles.subTitle}>Technical Skills</h2>

        <ul style={styles.list(isMobile)}>
          <li>Core Java & OOP Principles</li>
          <li>Java Collections Framework</li>
          <li>Multithreading & Concurrency Basics</li>
          <li>Exception Handling & JDBC</li>
          <li>SQL & Database Fundamentals</li>
          <li>Basic Git & GitHub</li>
        </ul>
      </div>

      {/* HOBBIES */}
      <div style={styles.card(isMobile, isTablet)}>
        <h2 style={styles.subTitle}>Hobbies</h2>

        <ul style={styles.list(isMobile)}>
          <li>Playing Cricket</li>
          <li>Playing Chess</li>
        </ul>
      </div>
    </div>
  );
}

const styles = {
  about: (isMobile) => ({
    minHeight: "100vh",
    padding: isMobile ? "90px 20px" : "100px 140px",
    color: "#0f172a",
    background: `
      radial-gradient(circle at top left, #e0f2fe, transparent 40%),
      radial-gradient(circle at bottom right, #ede9fe, transparent 40%),
      linear-gradient(135deg, #f8fafc, #eef2ff)
    `,
  }),

  title: (isMobile) => ({
    fontSize: isMobile ? "32px" : "46px",
    marginBottom: "30px",
    fontWeight: "700",
    textAlign: isMobile ? "center" : "left",
  }),

  para: (isMobile) => ({
    fontSize: isMobile ? "15px" : "17px",
    marginBottom: "20px",
    lineHeight: "1.9",
    maxWidth: "950px",
    textAlign: isMobile ? "center" : "left",
  }),

  card: (isMobile, isTablet) => ({
    marginTop: "40px",
    padding: isMobile ? "20px" : "30px",
    maxWidth: isMobile ? "100%" : isTablet ? "90%" : "700px",
    background: "rgba(255,255,255,0.75)",
    borderRadius: "16px",
    boxShadow: "0 25px 50px rgba(0,0,0,0.12)",
    backdropFilter: "blur(8px)",
  }),

  subTitle: {
    fontSize: "26px",
    marginBottom: "15px",
    color: "#2563eb",
  },

  eduBox: {
    background: "rgba(255,255,255,0.8)",
    padding: "18px",
    borderRadius: "12px",
    borderLeft: "4px solid #2563eb",
    marginTop: "10px",
    lineHeight: "1.8",
  },

  eduTitle: {
    fontSize: "18px",
    marginBottom: "8px",
  },

  eduText: {
    fontSize: "15px",
    marginBottom: "4px",
  },

  list: (isMobile) => ({
    paddingLeft: isMobile ? "16px" : "22px",
    lineHeight: "1.9",
    fontSize: isMobile ? "15px" : "16px",
  }),
};