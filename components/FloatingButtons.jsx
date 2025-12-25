import React from 'react'
import './FloatingButtons.css'

function FloatingButtons() {
  const phoneNumber = '919024067968'
  const whatsappNumber = '919024067968'

  const whatsappMessage = encodeURIComponent(

    'Hii \n I"m looking For Moving \n With Your Company'
  )

  return (
    <div className="floating-buttons">

      <a
        href={`tel:+${phoneNumber}`}
        className="float-btn call-btn"
        title="Call Now"
      >
        <i className="fas fa-phone-alt"></i>
      </a>

      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn whatsapp-btn"
        title="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

    </div>
  )
}

export default FloatingButtons
