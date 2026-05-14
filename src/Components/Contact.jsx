import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_rkyh5ed",        // Service ID
      "template_4t78qe4",       // Template ID
      form.current,
      "N9DgRGIOqHBbaV36n"       // Public Key
    )
    .then(() => {
      alert("Message sent successfully!");
      form.current.reset();
    })
    .catch(() => {
      alert("Failed to send message");
    });
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Get In Touch</h1>

      <div style={styles.container}>

        {/* LEFT SIDE */}
        <div style={styles.infoCard}>
          <h2 style={styles.subTitle}>Contact Details</h2>

          <p>
            📞 <a href="tel:8328155474" style={styles.link}>8328155474</a>
          </p>

          <p>
            📧 <a href="mailto:chinnareddaiah.chagalamarri@gmail.com" style={styles.link}>
              chinnareddaiah.chagalamarri@gmail.com
            </a>
          </p>

          <p style={styles.note}>
            Feel free to contact me for job opportunities, collaborations, or technical discussions.
          </p>
        </div>

        {/* RIGHT SIDE FORM */}
        <form ref={form} onSubmit={sendEmail} style={styles.formCard}>

          <h2 style={styles.subTitle}>Send a Message</h2>

          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            style={styles.input}
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            required
            style={styles.input}
          />

          <textarea
            name="message"
            placeholder="Write your message or query"
            rows="4"
            required
            style={styles.textarea}
          ></textarea>

          <button type="submit" style={styles.btn}>
            Submit
          </button>
        </form>

      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "80px 20px",
    background: "linear-gradient(135deg, #020617, #0f172a)",
    color: "white",
    fontFamily: "Arial",
  },

  heading: {
    textAlign: "center",
    fontSize: "40px",
    marginBottom: "40px",
  },

  container: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap",
  },

  infoCard: {
    width: "300px",
    padding: "20px",
    background: "rgba(255,255,255,0.06)",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
  },

  formCard: {
    width: "300px",
    padding: "20px",
    background: "rgba(255,255,255,0.08)",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
  },

  subTitle: {
    color: "#60a5fa",
    marginBottom: "10px",
  },

  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
  },

  textarea: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    resize: "none",
  },

  btn: {
    padding: "10px",
    borderRadius: "20px",
    border: "none",
    background: "#3b82f6",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },

  link: {
    color: "#93c5fd",
    textDecoration: "none",
  },

  note: {
    marginTop: "10px",
    fontSize: "13px",
    opacity: 0.8,
  },
};