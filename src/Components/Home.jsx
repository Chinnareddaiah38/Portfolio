import myPhoto from "../assets/myPhoto.jpg";
import resume from "../assets/Chinnareddiah_Chagalamarri_Resume.pdf";

export default function Home() {
  return (
    <div style={styles.home}>
      {/* LEFT SIDE IMAGE */}
      <div style={styles.left}>
        <img src={myPhoto} alt="Profile" style={styles.img} />
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div style={styles.right}>
        <h1 style={styles.title}>Hi, I'm Chinnareddaiah</h1>

        <h3 style={styles.subTitle}>Java Developer</h3>

        <p style={styles.text}>
          I am a passionate Core Java developer with strong knowledge of
          Object-Oriented Programming, Collections, Multithreading, and SQL.
          I enjoy building real-world applications, writing clean and efficient
          code, and continuously improving my technical and problem-solving
          skills.
        </p>

        {/* RESUME BUTTON */}
        <a href={resume} download style={styles.resumeBtn}>
          📄 Download Resume
        </a>
      </div>
    </div>
  );
}

const styles = {
  home: {
    minHeight: "100vh",
    paddingTop: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    background:
      "linear-gradient(-45deg, #0f172a, #1e3a8a, #111827)",
  },

  left: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },

  right: {
    flex: 1,
    maxWidth: "520px",
    marginLeft: "90px",
    marginRight: "120px",
    paddingRight: "40px",
    color: "white",
    lineHeight: "1.9",
  },

  img: {
    width: "330px",
    height: "330px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "5px solid #3b82f6",
  },

  title: {
    fontSize: "48px",
    marginBottom: "12px",
  },

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