import { FaWhatsapp, FaPhone } from 'react-icons/fa'
import { PHONE, WHATSAPP_NUMBER } from '../data/content'
import './FloatingButtons.css'

const WA_MSG = encodeURIComponent(
  'Hello! I found your website and I am interested in your services. Please contact me.'
)
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_MSG}`

export default function FloatingButtons() {
  return (
    <div className="fab-wrap" aria-label="Quick contact buttons">
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fab fab-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp aria-hidden="true" />
        <span className="fab-label">WhatsApp</span>
      </a>
      <a
        href={`tel:${PHONE}`}
        className="fab fab-call"
        aria-label="Call us now"
      >
        <FaPhone aria-hidden="true" />
        <span className="fab-label">Call Now</span>
      </a>
    </div>
  )
}

