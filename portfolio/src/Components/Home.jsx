import { useState, useRef, useEffect } from 'react'

export default function Home() {
  const [mouseX, setMouseX] = useState(null)
  const [mouseY, setMouseY] = useState(null)
  const [showImage, setShowImage] = useState(false)
  const [imageSrc, setImageSrc] = useState('')
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 })
  const bottomRef = useRef(null)
  const topRef = useRef(null)
  const productDesignRef = useRef(null)
  const titles = ["Full Stack Development", "Product Design", "Graphic Design", "UX Design"]
  const [currentTitle, setCurrentTitle] = useState(titles[0])
  const [animationClass, setAnimationClass] = useState('fadeIn')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 500)
    }

    checkIfMobile() // Initial check

    window.addEventListener("resize", checkIfMobile)

    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setAnimationClass('fadeOut')

        setTimeout(() => {
          setCurrentTitle((prevTitle) => {
            const currentIndex = titles.indexOf(prevTitle)
            const nextIndex = (currentIndex + 1) % titles.length
            return titles[nextIndex]
          })
          setAnimationClass('fadeIn')
        }, 500)
      }, 2000)

      return () => clearInterval(interval)
    }
  }, [currentTitle, isMobile])

  const handleMouseEnter = (imageSrc) => {
    if (!isMobile) {
      setImageSrc(imageSrc)
      setShowImage(true)
    }
  }

  const handleMouseMove = (e) => {
    if (!isMobile) {
      const mouseX = e.clientX
      const mouseY = e.clientY
      const maxX = window.innerWidth - 120

      const imageX = mouseX > maxX / 2 ? mouseX - 120 : mouseX + 20
      const imageY = mouseY + 20

      setMouseX(mouseX)
      setMouseY(mouseY)
      setImagePosition({ x: imageX, y: imageY })
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setShowImage(false)
    }
  }

  const scrollToBottom = () => {
    productDesignRef.current.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth"})
  }

  return (
    <div className="Home">
      <div className="allhome">
        <div ref={topRef} />
        <div className="mainComponent">
          <div className='flower2'></div>
          <h4 className="developer aroundName desktop">full stack development</h4>
          <div className={`aroundName mobile ${animationClass}`}>{currentTitle}</div>
          <h1 className="name">Kass Ferland Haroun</h1>
          <div className='flower1'></div>
          <h4 className="product aroundName desktop">product design</h4>

          {/* Scroll to Bottom */}
          <div className="bottom" onClick={scrollToBottom} style={{ textAlign: 'center', marginTop: '20px', cursor: 'pointer' }} >
            <p className='flowerscroll'>scroll?</p>
          </div>
        </div>
        
        <div className="linkComponent" onMouseMove={handleMouseMove}>
          <div className='flower3 productyeah'></div>
          <h1 className="title productyeah" ref={productDesignRef}>Product Design</h1>

            {/* Portfolio Images */}
            <a
              className="projectLink"
              href="/portfolio"
              onMouseEnter={() => handleMouseEnter('https://i.imgur.com/aBvVcnw.png')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="portfolio box">
                <p className='projecttitle'>Portfolio Images</p>
              </div>
            </a>
          <div className='flower4'></div>
          <h1 className="title">Software Development</h1>
          
          {/* Pots Pal */}
          <a
            className="projectLink"
            href="https://github.com/kfharoun/pots_pal?tab=readme-ov-file"
            target="_blank" 
            onMouseEnter={() => handleMouseEnter('https://i.imgur.com/V0zuoQG.png')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="DND box">
              <p className='projecttitle'>POTS Pal</p>
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
            onMouseEnter={() => handleMouseEnter('https://i.imgur.com/VPO3OSe.png')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="DND box">
              <p className='projecttitle'>DND Adventurer's Atlas</p>
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
            onMouseEnter={() => handleMouseEnter('https://i.imgur.com/PaggU5e.png')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="recipe box">
              <p className='projecttitle'>The Recipe.</p>
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
            onMouseEnter={() => handleMouseEnter('https://i.imgur.com/P5ErQfE.png')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="daisydrop box">
              <p className='projecttitle'>Daisy Drop!</p>
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
            onMouseEnter={() => handleMouseEnter('https://i.imgur.com/pF2DcH2.png')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="barbie box">
              <p className='projecttitle'>Barbie Collector's Closet</p>
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
          
          <div className="top" onClick={scrollToTop} style={{ textAlign: 'center', marginTop: '20px', cursor: 'pointer' }} >
            <p className='flowerscroll two'>scroll!</p>
          </div>

        </div>
      </div>

      {/* Image display */}
      {showImage && !isMobile && (
        <img
          src={imageSrc}
          alt="Hovered Image"
          style={{
            position: 'fixed',
            top: mouseY + 10, 
            left: mouseX + 10,
            width: '300px', 
            height: 'auto', 
            zIndex: 10, 
            borderRadius: "30px",
            transform: mouseX > window.innerWidth / 1.5 ? 'translateX(-100%)' : 'none'
          }}
          />
        )}
      </div>
    )
  }



