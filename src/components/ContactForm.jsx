export default function ContactForm() {
  return (
    <div id="contact" className="bg-blue-900 text-white py-16 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Section - Form */}
        <div>
          <h2 className="text-sm uppercase tracking-wide font-semibold mb-2">
            ⚡ Get In Touch
          </h2>
          <h1 className="text-5xl font-bold mb-4">
            LET'S WORK <br />
            <span className="text-blue-400">TOGETHER</span>
          </h1>

          <form className="mt-8 space-y-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full bg-gray-800 text-white rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="First Name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-medium">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full bg-gray-800 text-white rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Last Name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full bg-gray-800 text-white rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-6 py-3 rounded-md hover:opacity-90 transition flex items-center justify-center"
            >
              Send
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="ml-2 w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5l7.5 7.5-7.5 7.5M19.5 12H4.5"
                />
              </svg>
            </button>
          </form>
        </div>

        {/* Right Section - Contact Info */}
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="flex items-center text-lg">
              <span className="mr-3">📍</span>
              6391 Elgin St. Celina, Delaware 10299
            </p>
            <p className="flex items-center text-lg">
              <span className="mr-3">📞</span>
              (208) 555-0112, (239) 555-0108
            </p>
            <p className="flex items-center text-lg">
              <span className="mr-3">✉️</span>
              admin@mail.com
            </p>
          </div>
          <div>
            <img
              src="/contact-image.jpg"
              alt="Map and planning"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
