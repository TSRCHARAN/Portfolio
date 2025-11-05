const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 dark:text-gray-500 mb-4">
            Designed & Built with ❤️ by{' '}
            <span className="text-gradient font-semibold">T Sai Ram Charan</span>
          </p>
          <p className="text-gray-500 text-sm">
            © {currentYear} All rights reserved.
          </p>
          <div className="mt-6 flex justify-center gap-6">
            <a
              href="#home"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
