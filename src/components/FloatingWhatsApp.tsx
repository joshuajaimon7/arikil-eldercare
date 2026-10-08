'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <motion.aside
      aria-label="Quick WhatsApp Contact"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.4 }}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 990,
      }}
    >
      <a
        href="https://wa.me/919565533735?text=Hello%20Arikil%20Team%2C%20I%20would%20like%20to%20learn%20more%20about%20companionship%20visits%20for%20my%20parents."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '12px 20px',
          backgroundColor: '#1E281D',
          color: '#FAF8F5',
          borderRadius: '999px',
          boxShadow: '0 8px 32px rgba(30, 40, 29, 0.35)',
          border: '1px solid rgba(197, 154, 88, 0.4)',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '0.9375rem',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 12px 36px rgba(30, 40, 29, 0.45)';
          e.currentTarget.style.borderColor = '#C59A58';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(30, 40, 29, 0.35)';
          e.currentTarget.style.borderColor = 'rgba(197, 154, 88, 0.4)';
        }}
      >
        <div
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundColor: '#25D366',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
          }}
        >
          <MessageCircle size={17} />
        </div>
        <span>Message Arikil on WhatsApp</span>
      </a>
    </motion.aside>
  );
}
