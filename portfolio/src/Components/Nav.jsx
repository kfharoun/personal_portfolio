import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import emailjs from 'emailjs-com'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Cursor } from 'mongoose'

const Nav = () => {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setSubmitStatus('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_ustmhil', 'template_h8d2tel', e.target, 'dZ2jbopu37bKZpXCW')
      .then((result) => {
        console.log('Email successfully sent:', result.text)
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      })
      .catch((error) => {
        console.error('Error sending email:', error)
        setSubmitStatus('error')
      })
  }

  const openModal = () => {
    setShowModal(true)
    setSubmitStatus('')
  }

  const closeModal = () => {
    setShowModal(false)
    setSubmitStatus('')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="NavBar">
      <div className="header-links">
        <Link className="linkhome" to="/">home</Link>
        <Link to="/about">about</Link>
        <a className="contactlink" onClick={openModal} style={{ cursor: "pointer" }}>contact</a>
      </div>
      <div className="Wavey1"></div>

      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Let's collaborate!</Modal.Title>
          <div className='flower7'></div>
        </Modal.Header>
        <Modal.Body>
          {submitStatus === 'success' && (
            <div className="alert alert-success" role="alert">
              Submit successful!
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="alert alert-danger" role="alert">
              Oops! Something went wrong. Please try again later or use the email link at the bottom of the page.
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className='forms'>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="companyname" className="form-label">Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="companyname"
                  name="companyname"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Contact Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">More Information</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='details on the job or project, and more information on your company or brand'
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit">Submit</button>
              
            </div>
          </form>
          <div className='flower8'></div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Nav


