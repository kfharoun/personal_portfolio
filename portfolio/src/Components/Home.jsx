import { useState } from 'react';
import ScrollButton from './ScrollToBottom';
import { Fragment } from 'react';
// import { Content, Header } from './components/Styles';


export default function Home() {
    const [mouseX, setMouseX] = useState(null)
    const [mouseY, setMouseY] = useState(null)
    const [showImage, setShowImage] = useState(false)
    const [imageSrc, setImageSrc] = useState('')
    const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 })
  
    const handleMouseEnter = (imageSrc) => {
      setImageSrc(imageSrc)
      setShowImage(true)
    }
  
    const handleMouseMove = (e) => {
      const mouseX = e.clientX
      const mouseY = e.clientY
      const maxX = window.innerWidth - 120
  
      // find out image position based on mouse position relative to screen width
      const imageX = mouseX > maxX / 2 ? mouseX - 120 : mouseX + 20
      const imageY = mouseY + 20
  
      setMouseX(mouseX)
      setMouseY(mouseY)
      setImagePosition({ x: imageX, y: imageY })
    }
  
    const handleMouseLeave = () => {
      setShowImage(false)
    }
  

  return (
    <div className="Home">
      <div className="allhome">
        <div className="mainComponent">
          <h4 className="developer aroundName">full stack development</h4>
          <h1 className="name">Kass Ferland Haroun</h1>
          <h4 className="product aroundName">product design</h4>
        </div>

        <div className="linkComponent" onMouseMove={handleMouseMove}>
          <h1 className="title">Product Design</h1>

          {/* Portfolio Images */}
          <a
            className="projectLink"
            href="/portfolio"
            onMouseEnter={() => handleMouseEnter('https://i.imgur.com/TZaAjkW.jpg')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="portfolio box">
              <p className='projecttitle'>Portfolio Images</p>
            </div>
          </a>

          {/* Daisy Drop */}
          <a
            className="projectLink"
            href="https://daisydrop.surge.sh/"
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
            href=""
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

          {/* The Recipe */}
          <a
            className="projectLink"
            href=""
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

          {/* DND Adventurer's Atlas */}
          <a
            className="projectLink"
            href=""
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

        </div>
      </div>

      {/* image display styling*/}
      {showImage && (
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
            transform: mouseX > window.innerWidth / 1.5 ? 'translateX(-100%)' : 'none',
          }}
        />
      )}
    </div>
  )
}




