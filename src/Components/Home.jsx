import myPhoto from "../assets/myPhoto.jpg";
import resume from "../assets/Chinnareddiah_Chagalamarri_Resume.pdf";

export default function Home() {
  return (
    <div className="min-h-screen pt-[70px] md:pt-[75px] flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 px-4 sm:px-6 md:px-8 lg:px-16 pb-8">
      {/* LEFT SIDE IMAGE */}
      <div className="flex-1 flex justify-center mb-6 sm:mb-8 md:mb-0 order-2 md:order-1">
        <img
          src={myPhoto}
          alt="Profile"
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
        />
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="flex-1 max-w-lg md:max-w-xl lg:max-w-2xl text-white text-center md:text-left order-1 md:order-2 md:ml-8 lg:ml-16 xl:ml-24">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 leading-tight">
          Hi, I'm Chinnareddaiah
        </h1>

        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-400 mb-4 sm:mb-6 font-semibold">
          Java Developer
        </h3>

        <p className="text-sm sm:text-base md:text-base lg:text-lg opacity-90 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
          I am a passionate Core Java developer with strong knowledge of
          Object-Oriented Programming, Collections, Multithreading, and SQL.
          I enjoy building real-world applications, writing clean and efficient
          code, and continuously improving my technical and problem-solving
          skills.
        </p>

        {/* RESUME BUTTON */}
        <a
          href={resume}
          download
          className="inline-block px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm sm:text-base"
        >
          📄 Download Resume
        </a>
      </div>
    </div>
  );
}