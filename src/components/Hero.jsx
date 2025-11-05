const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          {/* Greeting */}
          <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-4 animate-slide-down">
            👋 Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="text-gradient">T Sai Ram Charan</span>
          </h1>

          {/* Title */}
          <p className="text-2xl sm:text-3xl md:text-4xl text-gray-700 dark:text-gray-300 mb-8">
            Software Development Engineer
          </p>

          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            SDE-1 @ Digital Trust Technologies | M.Tech AI/ML Student @ BITS Pilani (2025-2027)
            <br />
            Building secure, scalable systems with .NET, React & Cloud Technologies
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-blue-600 dark:bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-20 animate-bounce">
            <a href="#about" className="text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <svg
                className="w-6 h-6 mx-auto"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
