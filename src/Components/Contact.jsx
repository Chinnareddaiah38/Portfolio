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
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 px-3 sm:px-4 md:px-8 lg:px-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center">
          Get In Touch
        </h1>

        <div className="flex flex-col lg:flex-row justify-center items-start gap-6 sm:gap-8 lg:gap-12">

          {/* LEFT SIDE */}
          <div className="w-full max-w-md p-6 md:p-8 bg-white/5 rounded-xl shadow-2xl backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-blue-400">
              Contact Details
            </h2>

            <p className="mb-3">
              📞 <a href="tel:8328155474" className="text-blue-300 hover:text-blue-200 transition-colors">
                8328155474
              </a>
            </p>

            <p className="mb-4">
              📧 <a
                href="mailto:chinnareddaiah.chagalamarri@gmail.com"
                className="text-blue-300 hover:text-blue-200 transition-colors break-all"
              >
                chinnareddaiah.chagalamarri@gmail.com
              </a>
            </p>

            <p className="text-sm opacity-80 leading-relaxed">
              Feel free to contact me for job opportunities, collaborations, or technical discussions.
            </p>
          </div>

          {/* RIGHT SIDE FORM */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full max-w-md p-6 md:p-8 bg-white/8 rounded-xl shadow-2xl backdrop-blur-sm flex flex-col gap-4"
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-blue-400">
              Send a Message
            </h2>

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="px-4 py-3 rounded-lg border-none outline-none bg-white/10 placeholder-gray-300 text-white focus:bg-white/20 transition-colors"
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              required
              className="px-4 py-3 rounded-lg border-none outline-none bg-white/10 placeholder-gray-300 text-white focus:bg-white/20 transition-colors"
            />

            <textarea
              name="message"
              placeholder="Write your message or query"
              rows="4"
              required
              className="px-4 py-3 rounded-lg border-none outline-none bg-white/10 placeholder-gray-300 text-white focus:bg-white/20 transition-colors resize-none"
            ></textarea>

            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}