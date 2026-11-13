import { motion } from 'framer-motion'
import { LuPhone, LuMessageSquare } from 'react-icons/lu'
import { PHONE, WHATSAPP_NUMBER } from '../data/content'
import './FloatingActions.css'

const WA_MSG = encodeURIComponent(
  'Hello Er. Salman! I visited your website and would like to consult on my upcoming project.'
)
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_MSG}`

export default function FloatingActions() {
  return (
    <motion.aside
      className="floating-mobile-dock"
      initial={{ y: 90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Quick Mobile Actions"
    >
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="dock-action-btn dock-btn-whatsapp"
        aria-label="Direct message on WhatsApp"
      >
        <LuMessageSquare className="dock-btn-icon" aria-hidden="true" />
        <span>WhatsApp</span>
      </a>

      <a
        href={`tel:${PHONE}`}
        className="dock-action-btn dock-btn-call"
        aria-label="Direct telephone call"
      >
        <LuPhone className="dock-btn-icon" aria-hidden="true" />
        <span>Call Now</span>
      </a>
    </motion.aside>
  )
}
