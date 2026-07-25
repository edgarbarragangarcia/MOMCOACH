import React from 'react';
import './whatsapp-button.css';

const WHATSAPP_NUMBER = '573102158656';
const WHATSAPP_TEXT = 'Hola! Tengo una pregunta sobre The Mom Coaching.';
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Escríbenos por WhatsApp"
    >
      <span className="whatsapp-float-tooltip font-inter">
        ¿Necesitas ayuda?
        <strong>Escríbeme aquí</strong>
      </span>
      <svg viewBox="0 0 32 32" width="32" height="32" fill="#fff" aria-hidden="true">
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.31.65 4.47 1.78 6.31L4 29l7.87-1.75A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.7c-1.98 0-3.83-.55-5.4-1.5l-.39-.23-4.67 1.04 1.02-4.55-.25-.4A9.62 9.62 0 0 1 5.5 15c0-5.8 4.7-10.5 10.5-10.5S26.5 9.2 26.5 15 21.8 24.7 16.004 24.7Z" />
        <path d="M21.6 17.52c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
}
