export default function About() {
  return (
    <div style={styles.about}>
      <h1 style={styles.title}>About Me</h1>

      <p style={styles.para}>
        I am a passionate and detail-oriented <b>Java Developer</b> with a strong
        foundation in <b>Core Java</b> and <b>Object-Oriented Programming</b>
        concepts. I have solid hands-on knowledge of Java Collections,
        Multithreading, Exception Handling, and JDBC, along with good command
        over SQL for database design and querying.
      </p>

      <p style={styles.para}>
        I enjoy developing clean, efficient, and scalable backend applications
        that solve real-world problems. I focus on writing readable,
        maintainable code by following best practices and proper design principles.
      </p>

      <p style={styles.para}>
        As a fresher, I am highly motivated to work in a professional IT
        environment where I can apply my technical skills, gain real-world
        project experience, and continuously improve myself as a Java developer.
      </p>

      {/* EDUCATION */}
      <div style={styles.card}>
        <h2 style={styles.subTitle}>Education</h2>

        <div style={styles.eduBox}>
          <h3 style={styles.eduTitle}>
            B.Tech – Computer Science & Engineering
          </h3>

          <p style={styles.eduText}>
            Sri Sai Institute of Technology and Science, Rayachoty
          </p>

          <p style={styles.eduText}>
            Duration: 2022 – 2026
          </p>

          <p style={styles.eduText}>
            Percentage: 76%
          </p>
        </div>
      </div>

      {/* SKILLS */}
      <div style={styles.card}>
        <h2 style={styles.subTitle}>Technical Skills</h2>

        <ul style={styles.list}>
          <li>Core Java & OOP Principles</li>
          <li>Java Collections Framework</li>
          <li>Multithreading & Concurrency Basics</li>
          <li>Exception Handling & JDBC</li>
          <li>SQL & Database Fundamentals</li>
          <li>Basic Git & GitHub</li>
        </ul>
      </div>

      {/* HOBBIES */}
      <div style={styles.card}>
        <h2 style={styles.subTitle}>Hobbies</h2>

        <ul style={styles.list}>
          <li>Playing Cricket</li>
          <li>Playing Chess</li>
        </ul>
      </div>
    </div>
  );
}

const styles = {
  about: {
    minHeight: "100vh",
    padding: "100px 140px",
    color: "#0f172a",

    background: `
      radial-gradient(circle at top left, #e0f2fe, transparent 40%),
      radial-gradient(circle at bottom right, #ede9fe, transparent 40%),
      linear-gradient(135deg, #f8fafc, #eef2ff)
    `,
  },

  title: {
    fontSize: "46px",
    marginBottom: "35px",
    fontWeight: "700",
  },

  para: {
    fontSize: "17px",
    marginBottom: "20px",
    lineHeight: "1.9",
    maxWidth: "950px",
  },

  card: {
    marginTop: "40px",
    padding: "30px",
    maxWidth: "700px",

    background: "rgba(255,255,255,0.75)",
    borderRadius: "16px",
    boxShadow: "0 25px 50px rgba(0,0,0,0.12)",
    backdropFilter: "blur(8px)",
  },

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

  list: {
    paddingLeft: "22px",
    lineHeight: "1.9",
    fontSize: "16px",
  },
};