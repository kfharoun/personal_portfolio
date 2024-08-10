import { useState } from 'react'
import { Modal } from 'react-bootstrap'

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const handleImageClick = (src) => {
    setSelectedImage(src)
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
    setSelectedImage(null)
  }

  return (
    <div className="Portfolio">
      <div className="container">
        <img
          src="/portfoliopics/boxes.jpeg"
          className="card-img-top"
          alt="Project 1"
          onClick={() => handleImageClick('/portfoliopics/boxes.jpeg')}
        />
        <img
          src="/portfoliopics/bwwavey.jpeg"
          className="card-img-top"
          alt="Project 2"
          onClick={() => handleImageClick('/portfoliopics/bwwavey.jpeg')}
        />
        <img
          src="/portfoliopics/cass.jpeg"
          className="card-img-top"
          alt="Project 2"
          onClick={() => handleImageClick('/portfoliopics/cass.jpeg')}
        />
        <img
          src="/portfoliopics/wisteriapear.jpeg"
          className="card-img-top"
          alt="Project 1"
          onClick={() => handleImageClick('/portfoliopics/wisteriapear.jpeg')}
        />
        <img
          src="/portfoliopics/crushed.jpeg"
          className="card-img-top"
          alt="Project 1"
          onClick={() => handleImageClick('/portfoliopics/crushed.jpeg')}
        />
        <img
          src="/portfoliopics/lighters.jpg"
          className="card-img-top"
          alt="Project 1"
          onClick={() => handleImageClick('/portfoliopics/lighters.jpg')}
        />
        <img
          src="/portfoliopics/evileye.jpeg"
          className="card-img-top"
          alt="Project 1"
          onClick={() => handleImageClick('/portfoliopics/evileye.jpeg')}
        />
        <img
          src="/portfoliopics/lavalamp.png"
          className="card-img-top"
          alt="Project 1"
          onClick={() => handleImageClick('/portfoliopics/lavalamp.png')}
        />
        <img
          src="/portfoliopics/devil.jpeg"
          className="card-img-top"
          alt="Project 1"
          onClick={() => handleImageClick('/portfoliopics/devil.jpeg')}
        />
        <img
          src="/portfoliopics/lovewitch.jpeg"
          className="card-img-top"
          alt="Project 1"
          onClick={() => handleImageClick('/portfoliopics/lovewitch.jpeg')}
        />
        <img
          src="/portfoliopics/picnic.jpeg"
          className="card-img-top"
          alt="Project 1"
          onClick={() => handleImageClick('/portfoliopics/picnic.jpeg')}
        />
        <img
          src="/portfoliopics/pink.png"
          className="card-img-top"
          alt="Project 1"
          onClick={() => handleImageClick('/portfoliopics/pink.png')}
        />
        <img
          src="/portfoliopics/prwavey.jpeg"
          className="card-img-top"
          alt="Project 1"
          onClick={() => handleImageClick('/portfoliopics/prwavey.jpeg')}
        />
        <img
          src="/portfoliopics/themoon.jpeg"
          className="card-img-top"
          alt="Project 1"
          onClick={() => handleImageClick('/portfoliopics/themoon.jpeg')}
        />
        <img
          src="/portfoliopics/circe.jpeg"
          className="card-img-top"
          alt="Project 1"
          onClick={() => handleImageClick('/portfoliopics/circe.jpeg')}
        />
      </div>

      {/* Image Preview */}
      <Modal
        show={showModal}
        onHide={handleClose}
        centered
        dialogClassName="modal-90w"
        contentClassName="bg-transparent border-0"
      >
        <Modal.Body className="p-0">
          {selectedImage && (
            <img src={selectedImage} alt="Large Preview" className="img-fluid w-100 h-100" style={{ objectFit: 'cover', borderRadius: '10px' }} />
          )}
        </Modal.Body>
      </Modal>
    </div>
  )
}