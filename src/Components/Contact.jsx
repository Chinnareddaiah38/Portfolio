import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rkyh5ed",
        "template_4t78qe4",
        form.current,
        "N9DgRGIOqHBbaV36n"
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
    <div className="contact-page">
      <h1 className="contact-heading">Get In Touch</h1>

      <div className="contact-container">
        {/* CONTACT DETAILS */}
        <div className="contact-card">
          <h2 className="contact-subtitle">Contact Details</h2>

          <p>
            📞{" "}
            <a href="tel:+918328155474" className="contact-link">
              +91 83281 55474
            </a>
          </p>

          <p>
            📧{" "}
            <a
              href="mailto:chinnareddaiah.chagalamarri@gmail.com"
              className="contact-link"
            >
              chinnareddaiah.chagalamarri@gmail.com
            </a>
          </p>

          <p className="contact-note">
            Feel free to contact me for job opportunities, collaborations, or
            technical discussions.
          </p>
        </div>

        {/* SEND MESSAGE */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-card"
        >
          <h2 className="contact-subtitle">Send a Message</h2>

          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            required
          />

          <textarea
            name="message"
            placeholder="Write your message"
            rows="4"
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>

      {/* ===== CSS ===== */}
      <style>{`
        .contact-page {
          min-height: 100vh;
          padding: 90px 20px;
          background: linear-gradient(135deg, #020617, #0f172a);
          color: white;
          box-sizing: border-box;
        }

        .contact-heading {
          text-align: center;
          font-size: 40px;
          margin-bottom: 50px;
        }

        /* DESKTOP */
        .contact-container {
          display: flex;
          justify-content: center;
          align-items: stretch;
          gap: 40px;
        }

        .contact-card {
          width: 430px;
          padding: 28px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
          box-sizing: border-box;
        }

        .contact-subtitle {
          color: #60a5fa;
          margin-bottom: 18px;
        }

        input,
        textarea {
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          border: none;
          outline: none;
          margin-bottom: 12px;
          font-size: 15px;
        }

        textarea {
          resize: none;
        }

        button {
          width: 100%;
          padding: 12px;
          border-radius: 22px;
          border: none;
          background: #3b82f6;
          color: white;
          font-weight: bold;
          font-size: 15px;
          cursor: pointer;
        }

        .contact-link {
          color: #93c5fd;
          text-decoration: none;
        }

        .contact-note {
          margin-top: 18px;
          font-size: 14px;
          opacity: 0.85;
          line-height: 1.5;
        }

        /* MOBILE ONLY */
        @media (max-width: 768px) {
          .contact-heading {
            font-size: 28px;
          }

          .contact-container {
            flex-direction: column;
            align-items: center;
          }

          .contact-card {
            width: 100%;
            max-width: 520px;
          }
        }
      `}</style>
    </div>
  );
}