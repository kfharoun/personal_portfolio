import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  
    emailjs.sendForm('service_ustmhil', 'template_h8d2tel', e.target, 'dZ2jbopu37bKZpXCW')
      .then((result) => {
        console.log('Email successfully sent:', result.text)
        setSubmitStatus('success')
      })
      .catch((error) => {
        console.error('Error sending email:', error)
        setSubmitStatus('error')
      })
  
    setFormData({ name: '', email: '', message: '' })
  }
  return (
    <div className="Contact container mt-5">
      <h2>contact</h2>
      {submitStatus === 'success' && (
        <div className="alert alert-success" role="alert">
          submit successful!
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="alert alert-danger" role="alert">
          oops! something went wrong. please try again later.
        </div>
      )}
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}




