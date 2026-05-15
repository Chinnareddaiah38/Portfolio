import cloud from "../assets/cloud.jpg";
import cvip from "../assets/cvip.jpg";
import quantum from "../assets/quantum.jpg";
import fullstack from "../assets/fullstack.jpg";
import swarna from "../assets/swarna.jpg";

export default function Certificates() {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 px-3 sm:px-4 md:px-8 lg:px-16 xl:px-32 bg-gradient-radial from-slate-700 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center">
          Certificates
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-12 justify-items-center">
          <img
            src={cloud}
            alt="Cloud Computing Certificate"
            className="w-full max-w-sm h-auto rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
          />
          <img
            src={cvip}
            alt="CVIP Certificate"
            className="w-full max-w-sm h-auto rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
          />
          <img
            src={quantum}
            alt="Quantum Fundamentals Certificate"
            className="w-full max-w-sm h-auto rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
          />
          <img
            src={fullstack}
            alt="Full Stack Java Certificate"
            className="w-full max-w-sm h-auto rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
          />
          <img
            src={swarna}
            alt="Swarna Certificate"
            className="w-full max-w-sm h-auto rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}