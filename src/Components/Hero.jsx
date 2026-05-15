import myPhoto from "../assets/myphoto.jpg";

function Hero() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 px-3 sm:px-4 md:px-8 lg:px-16 pt-20 sm:pt-24">
      <div className="flex-1 flex justify-center mb-8 md:mb-0">
        <img
          src={myPhoto}
          alt="profile"
          className="w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
        />
      </div>

      <div className="flex-1 max-w-lg md:max-w-xl lg:max-w-2xl text-white text-center md:text-left md:ml-16 lg:ml-24">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 leading-tight">
          Hi, I'm Chinnareddaiah
        </h1>
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-400 mb-4 sm:mb-6 font-semibold">
          Java Developer
        </h3>
        <p className="text-sm md:text-base lg:text-lg opacity-90 leading-relaxed">
          Passionate Java Developer with strong knowledge in Core Java,
          Object-Oriented Programming, SQL, and problem solving.
          Interested in building scalable real-world applications.
        </p>
      </div>
    </div>
  );
}

export default Hero;