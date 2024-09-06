import { useState, useRef, useEffect } from "react";
import WaveyBack from "../assets/waveyback.svg";
import WaveyAccent from "../assets/waveyaccent.svg";

export default function Home() {
  const [mouseX, setMouseX] = useState(null);
  const [mouseY, setMouseY] = useState(null);
  const [showImage, setShowImage] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const bottomRef = useRef(null);
  const topRef = useRef(null);
  const productDesignRef = useRef(null);
  const titles = [
    "Full Stack Dev",
    "Product Design",
    "Graphic Design",
    "UX Design",
  ];
  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const [animationClass, setAnimationClass] = useState("fadeIn");
  const [isMobile, setIsMobile] = useState(false);
  const rotatingWords = [
    "back-end development",
    "front-end development",
    "UI/UX design",
  ];
  const rotatingWordsTwo = ["graphic design", "web design", "product design"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [blurValue, setBlurValue] = useState(20);
  const [textVisible, setTextVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const [nameVisible, setNameVisible] = useState(true);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    checkIfMobile(); // Initial check

    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setAnimationClass("fadeOut");

        setTimeout(() => {
          setCurrentTitle((prevTitle) => {
            const currentIndex = titles.indexOf(prevTitle);
            const nextIndex = (currentIndex + 1) % titles.length;
            return titles[nextIndex];
          });
          setAnimationClass("fadeIn");
        }, 500);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [currentTitle, isMobile]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex(
        (prevIndex) => (prevIndex + 1) % rotatingWords.length
      );
    }, 3000);

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  const handleMouseEnter = (imageSrc) => {
    if (!isMobile) {
      setImageSrc(imageSrc);
      setShowImage(true);
    }
  };

  const handleMouseMove = (e) => {
    if (!isMobile) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const maxX = window.innerWidth - 120;

      const imageX = mouseX > maxX / 2 ? mouseX - 120 : mouseX + 20;
      const imageY = mouseY + 20;

      setMouseX(mouseX);
      setMouseY(mouseY);
      setImagePosition({ x: imageX, y: imageY });
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setShowImage(false);
    }
  };

  const scrollToBottom = () => {
    productDesignRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxBlur = 20; // Maximum blur value in px
      const maxScroll = 30; // Scroll threshold where blur should disappear and text hides
      const maxOpacity = 1; // Maximum opacity value

      // Calculate the new blur value based on scroll position
      const newBlurValue = Math.max(
        maxBlur - (scrollPosition / maxScroll) * maxBlur,
        0
      );
      setBlurValue(newBlurValue); // Update the blur value

      const newOpacity = Math.max(
        maxOpacity - (scrollPosition / maxScroll) * maxOpacity,
        0.5 // Update the opacity value
      );
      setOpacity(newOpacity);

      if (scrollPosition >= maxScroll) {
        setNameVisible(false); // Hide text when scrolling beyond maxScroll
      } else {
        setNameVisible(true); // Show text when above maxScroll
      }

      // Set text visibility based on scroll position
      if (scrollPosition >= maxScroll) {
        setTextVisible(false); // Hide text when scrolling beyond maxScroll
      } else {
        setTextVisible(true); // Show text when above maxScroll
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Home">
      <div className="allhome">
        <div ref={topRef} />
        <div className="mainComponent">
          <div className="home-container">
            {/* Image and Wavey Accent Container */}
            <div className="image-container">
              <img
                src="https://i.imgur.com/Jy643Uh.jpeg"
                alt="Background"
                className="masked-image"
                style={{
                  filter: `blur(${blurValue}px)`,
                  transition: "filter 0.3s ease",
                }}
              />
              <div className="wavey-accent">
                <img
                  src={WaveyAccent}
                  alt="Wavey Accent"
                  className="wavey-image"
                />
              </div>
            </div>
            <div className="text-container">
              <h4
                className="developer aroundName desktop rotating-text"
                style={{
                  opacity: textVisible ? 1 : 0, // Fade out the text
                  transition: "opacity 0.3s ease", // Smooth transition for text visibility
                }}
              >
                <span className="animated-text">
                  {rotatingWords[currentWordIndex]}
                </span>
              </h4>
              <div className={`aroundName mobile ${animationClass}`}>
                {currentTitle}
              </div>
              <h1
                className="name"
                style={{
                  opacity: nameVisible ? 1 : 0.5, // Fade out the text
                  transition: "opacity 0.3s ease", // Smooth transition for text visibility
                  textShadow: nameVisible ? "1px 1px 3px rgba(0, 0, 0, 0.5)" : "none",
                }}
              >
                Kass Ferland Haroun
              </h1>
              <h4
                className="product aroundName desktop"
                style={{
                  opacity: textVisible ? 1 : 0, // Fade out the text
                  transition: "opacity 0.3s ease"
                }}
              >
                <span className="animated-text">
                  {rotatingWordsTwo[currentWordIndex]}
                </span>
              </h4>
            </div>
          </div>
          {/* Scroll to Bottom */}
          <div
            className="bottom"
            onClick={scrollToBottom}
            style={{
              textAlign: "center",
              marginTop: "20px",
              cursor: "pointer",
            }}
          >
          </div>
        </div>

        <div
          className="linkComponent"
          onMouseMove={handleMouseMove}
          ref={productDesignRef}
        >
          <div className="flower3 productyeah"></div>
          <h1 className="title productyeah">Product Design</h1>

          {/* Portfolio Images */}
          <a
            className="projectLink"
            href="/portfolio"
            onMouseEnter={() =>
              handleMouseEnter("https://i.imgur.com/aBvVcnw.png")
            }
            onMouseLeave={handleMouseLeave}
          >
            <div className="portfolio box">
              <p className="projecttitle">Portfolio Images</p>
            </div>
          </a>
          <div className="flower4"></div>
          <h1 className="title">Software Development</h1>

          {/* Pots Pal */}
          <a
            className="projectLink"
            href="https://github.com/kfharoun/pots_pal?tab=readme-ov-file"
            target="_blank"
            onMouseEnter={() =>
              handleMouseEnter("https://i.imgur.com/V0zuoQG.png")
            }
            onMouseLeave={handleMouseLeave}
          >
            <div className="DND box">
              <p className="projecttitle">POTS Pal</p>
              <div className="languages">
                <p className="language">python</p>
                <p className="language">django</p>
                <p className="language">react</p>
                <p className="language">scss</p>
                <p className="language">axios</p>
              </div>
            </div>
          </a>

          {/* DND Adventurer's Atlas */}
          <a
            className="projectLink"
            href="https://github.com/kfharoun/dnd_tracker"
            target="_blank"
            onMouseEnter={() =>
              handleMouseEnter("https://i.imgur.com/VPO3OSe.png")
            }
            onMouseLeave={handleMouseLeave}
          >
            <div className="DND box">
              <p className="projecttitle">DND Adventurer's Atlas</p>
              <div className="languages">
                <p className="language">node.js</p>
                <p className="language">mongodb</p>
                <p className="language">react</p>
                <p className="language">css</p>
                <p className="language">axios</p>
                <p className="language">express</p>
              </div>
            </div>
          </a>

          {/* The Recipe */}
          <a
            className="projectLink"
            href="https://github.com/parpace/u3_lab_react_axios_foodE"
            target="_blank"
            onMouseEnter={() =>
              handleMouseEnter("https://i.imgur.com/PaggU5e.png")
            }
            onMouseLeave={handleMouseLeave}
          >
            <div className="recipe box">
              <p className="projecttitle">The Recipe.</p>
              <div className="languages">
                <p className="language">node.js</p>
                <p className="language">css</p>
                <p className="language">react</p>
                <p className="language">axios</p>
                <p className="language">express</p>
              </div>
            </div>
          </a>

          {/* Daisy Drop */}
          <a
            className="projectLink"
            href="https://github.com/kfharoun/Daisy-Drop"
            target="_blank"
            onMouseEnter={() =>
              handleMouseEnter("https://i.imgur.com/P5ErQfE.png")
            }
            onMouseLeave={handleMouseLeave}
          >
            <div className="daisydrop box">
              <p className="projecttitle">Daisy Drop!</p>
              <div className="languages">
                <p className="language">javascript</p>
                <p className="language">css</p>
              </div>
            </div>
          </a>

          {/* Barbie Collector's Closet */}
          <a
            className="projectLink"
            href="https://github.com/kfharoun/barbie_dream_closet_api"
            target="_blank"
            onMouseEnter={() =>
              handleMouseEnter("https://i.imgur.com/pF2DcH2.png")
            }
            onMouseLeave={handleMouseLeave}
          >
            <div className="barbie box">
              <p className="projecttitle">Barbie Collector's Closet</p>
              <div className="languages">
                <p className="language">node.js</p>
                <p className="language">mongodb</p>
                <p className="language">javascript</p>
                <p className="language">css</p>
                <p className="language">axios</p>
              </div>
            </div>
          </a>
          <div ref={bottomRef} />

          <div
            className="top"
            onClick={scrollToTop}
            style={{
              textAlign: "center",
              marginTop: "20px",
              cursor: "pointer",
            }}
          >
            <p className="flowerscroll two">scroll!</p>
          </div>
        </div>
      </div>

      {/* Image display */}
      {showImage && !isMobile && (
        <img
          src={imageSrc}
          alt="Hovered Image"
          style={{
            position: "fixed",
            top: mouseY + 10,
            left: mouseX + 10,
            width: "300px",
            height: "auto",
            zIndex: 10,
            borderRadius: "30px",
            transform:
              mouseX > window.innerWidth / 1.5 ? "translateX(-100%)" : "none",
          }}
        />
      )}
    </div>
  );
}
