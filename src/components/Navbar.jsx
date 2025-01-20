import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

import Button from "./Button";

const navItems = [
  "Documents",
  "Solutions",
  "Customers",
  "About",
  "Partners",
  "Contact",
];

const NavBar = () => {
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [showIframe, setShowIframe] = useState(false); // State to control iframe visibility

  const handleIframeToggle = (item) => {
    if (item === "Documents") {
      setShowIframe(true); // Show iframe when 'Documents' is clicked
    } else {
      setShowIframe(false); // Hide iframe for other items
    }
  };

  const handleCloseIframe = () => {
    setShowIframe(false); // Close iframe when 'Close' button is clicked
  };

  // Refs for audio and navigation container
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  const handleScroll = (item) => {
    // Smooth scroll to the section
    document.getElementById(`${item.toLowerCase()}`).scrollIntoView({
      behavior: "smooth",
      block: "start", // Align the section to the top
    });
  };

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo and Product button */}
          <div className="flex items-center gap-7">
            <img
              src="/img/logo.png"
              alt="logo"
              className="w-25 h-25 object-cover"
            />

            <Button
              id="product-button"
              title="Documents"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>

          {/* Navigation Links and Audio Button */}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    handleIframeToggle(item); // Handle the iframe toggle on click
                    handleScroll(item); // Scroll to the section
                  }}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Iframe Modal for Documents */}
            {showIframe && (
              <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center max-width h-screen">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Close Button */}
                  <button
                    onClick={handleCloseIframe}
                    className="absolute top-4 right-4 bg-red-500 text-white px-3 py-2 rounded-full"
                  >
                    Close
                  </button>

                  {/* Iframe */}
                  <iframe
                    src="https://www.kingsiii.com/ccpa/" // Replace with your document URL here you can make your page sir.
                    title="Documents"
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </div>
            )}

            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-0.5"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
