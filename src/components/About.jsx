const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Illustration */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl flex items-center justify-center overflow-hidden shadow-xl">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">👨‍💻</div>
                <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                  Passionate Developer
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 dark:bg-blue-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500 dark:bg-purple-600 rounded-full opacity-20 animate-pulse delay-75"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Hello! I'm Sai Ram Charan, a passionate Software Development Engineer at <strong>Digital Trust Technologies</strong>,
              where I build secure identity and authentication systems. I'm also pursuing my M.Tech in AI/ML 
              from BITS Pilani WILP (2025-2027), combining cutting-edge industry experience with advanced academic learning.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I graduated with a B.Tech in Computer Science from Sagi Rama Krishnam Raju Engineering College 
              with a stellar CGPA of 9.24. My expertise spans full-stack development with .NET, React, and cloud technologies, 
              specializing in OAuth/OpenID implementations, microservices architecture, and performance optimization.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm also a co-founder of <strong>Z444</strong>, an EdTech startup where I mentor juniors in programming 
              and software development. When I'm not coding, you'll find me solving DSA problems or exploring 
              machine learning algorithms.
            </p>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">9.24</p>
                <p className="text-gray-600 dark:text-gray-400">B.Tech CGPA</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">SDE-1</p>
                <p className="text-gray-600 dark:text-gray-400">Digital Trust Tech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
