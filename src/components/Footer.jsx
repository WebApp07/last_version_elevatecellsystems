import {
  FaDiscord,
  FaTwitter,
  FaYoutube,
  FaMedium,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaFacebook /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaLinkedin /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left  hover:text-white">
          ©elevatecellsystems 2025. All rights reserved Developed By Amine
          Zouguig
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="https://www.kingsiii.com/privacy-policy/"
          className="text-black transition-colors duration-500 ease-in-out hover:text-white"
        >
          Privacy Policy
        </a>

        <a
          href="#privacy-policy"
          className="text-black transition-colors duration-500 ease-in-out hover:text-white"
        >
          Terms & Conditions
        </a>

        <a
          href="#https://www.kingsiii.com/terms/"
          className="text-black transition-colors duration-500 ease-in-out hover:text-white"
        >
          info@elevatecellsystems.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
