export default function About() {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 px-3 sm:px-4 md:px-8 lg:px-16 xl:px-32 text-slate-900 bg-gradient-to-br from-sky-50 via-indigo-50 to-slate-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 text-center lg:text-left">
          About Me
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 leading-relaxed max-w-3xl mx-auto lg:mx-0">
          I am a passionate and detail-oriented <strong>Java Developer</strong> with a strong
          foundation in <strong>Core Java</strong> and <strong>Object-Oriented Programming</strong>
          concepts. I have solid hands-on knowledge of Java Collections,
          Multithreading, Exception Handling, and JDBC, along with good command
          over SQL for database design and querying.
        </p>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 leading-relaxed max-w-3xl mx-auto lg:mx-0">
          I enjoy developing clean, efficient, and scalable backend applications
          that solve real-world problems. I focus on writing readable,
          maintainable code by following best practices and proper design principles.
        </p>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto lg:mx-0">
          As a fresher, I am highly motivated to work in a professional IT
          environment where I can apply my technical skills, gain real-world
          project experience, and continuously improve myself as a Java developer.
        </p>

        {/* EDUCATION */}
        <div className="mt-12 p-6 md:p-8 max-w-2xl bg-white/75 rounded-xl shadow-xl backdrop-blur-sm">
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 text-blue-600 font-semibold">
            Education
          </h2>

          <div className="bg-white/80 p-4 md:p-6 rounded-lg border-l-4 border-blue-600 leading-relaxed">
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              B.Tech – Computer Science & Engineering
            </h3>

            <p className="text-sm md:text-base mb-1">
              Sri Sai Institute of Technology and Science, Rayachoty
            </p>

            <p className="text-sm md:text-base mb-1">
              Duration: 2022 – 2026
            </p>

            <p className="text-sm md:text-base">
              Percentage: 76%
            </p>
          </div>
        </div>

        {/* SKILLS */}
        <div className="mt-8 p-6 md:p-8 max-w-2xl bg-white/75 rounded-xl shadow-xl backdrop-blur-sm">
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 text-blue-600 font-semibold">
            Technical Skills
          </h2>

          <ul className="pl-6 md:pl-8 leading-relaxed text-sm md:text-base lg:text-lg space-y-1">
            <li>Core Java & OOP Principles</li>
            <li>Java Collections Framework</li>
            <li>Multithreading & Concurrency Basics</li>
            <li>Exception Handling & JDBC</li>
            <li>SQL & Database Fundamentals</li>
            <li>Basic Git & GitHub</li>
          </ul>
        </div>

        {/* HOBBIES */}
        <div className="mt-8 p-6 md:p-8 max-w-2xl bg-white/75 rounded-xl shadow-xl backdrop-blur-sm">
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 text-blue-600 font-semibold">
            Hobbies
          </h2>

          <ul className="pl-6 md:pl-8 leading-relaxed text-sm md:text-base lg:text-lg space-y-1">
            <li>Playing Cricket</li>
            <li>Playing Chess</li>
          </ul>
        </div>
      </div>
    </div>
  );
}