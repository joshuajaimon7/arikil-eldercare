'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingWhatsApp() {
  return (
    <motion.aside
      aria-label="Quick WhatsApp Contact"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 990,
      }}
    >
      <a
        href="https://wa.me/919565533735?text=Hello%20Arikil%20Care%20Desk%2C%20I%20would%20like%20to%20learn%20more%20about%20companionship%20visits%20for%20my%20parents."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '12px 20px',
          backgroundColor: 'rgba(19, 24, 20, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          color: '#FFFFFF',
          borderRadius: '4px',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          textDecoration: 'none',
          fontSize: '0.875rem',
          fontWeight: 400,
          letterSpacing: '0.02em',
          transition: 'border-color 0.2s ease, background-color 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#FFFFFF';
          e.currentTarget.style.backgroundColor = 'rgba(25, 32, 26, 0.98)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
          e.currentTarget.style.backgroundColor = 'rgba(19, 24, 20, 0.92)';
        }}
      >
        <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FFFFFF', opacity: 0.85 }} />
        <span>Direct WhatsApp (+91 95655 33735)</span>
        <span style={{ fontSize: '1em' }}>&rarr;</span>
      </a>
    </motion.aside>
  );
}
