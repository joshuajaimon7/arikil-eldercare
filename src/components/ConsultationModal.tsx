'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    clientName: '',
    phone: '',
    parentName: '',
    locationDistrict: 'Palakkad',
    currentLocation: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappText = encodeURIComponent(
      `Hello Arikil Care Desk,\n\nI would like to inquire about elder companionship.\n\n` +
      `My Name: ${formData.clientName}\n` +
      `Parents' Name: ${formData.parentName}\n` +
      `District Hub: ${formData.locationDistrict}\n` +
      `Where I Live: ${formData.currentLocation || 'Not specified'}\n` +
      `My Phone: ${formData.phone}\n` +
      `Notes: ${formData.notes || 'None'}\n\n` +
      `Thank you.`
    );
    window.open(`https://wa.me/919565533735?text=${whatsappText}`, '_blank');
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              backgroundColor: '#131814',
              borderRadius: '8px',
              padding: '40px',
              maxWidth: '540px',
              width: '100%',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              maxHeight: '90vh',
              overflowY: 'auto',
              color: '#FFFFFF',
            }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close dialog"
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                background: 'transparent',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.6)',
                cursor: 'pointer',
                fontSize: '1.25rem',
              }}
            >
              <X size={22} />
            </button>

            {!submitted ? (
              <>
                <div style={{ marginBottom: '28px' }}>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.78125rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--text-dim)',
                      marginBottom: '8px',
                    }}
                  >
                    Direct Care Consultation
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.75rem',
                      fontWeight: 300,
                      color: '#FFFFFF',
                      margin: 0,
                      lineHeight: 1.25,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Arrange a Home Introduction
                  </h3>
                  <p
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: '0.9375rem',
                      marginTop: '10px',
                      lineHeight: 1.6,
                    }}
                  >
                    Share your family details below. Founder Niveda Babu will connect with you directly via WhatsApp to coordinate visits.
                  </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Nair"
                      value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        backgroundColor: '#0D110E',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '4px',
                        color: '#FFFFFF',
                        fontSize: '0.9375rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                        Parents&apos; Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Achan &amp; Amma"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          backgroundColor: '#0D110E',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          borderRadius: '4px',
                          color: '#FFFFFF',
                          fontSize: '0.9375rem',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                        District Hub
                      </label>
                      <select
                        value={formData.locationDistrict}
                        onChange={(e) => setFormData({ ...formData, locationDistrict: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          backgroundColor: '#0D110E',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          borderRadius: '4px',
                          color: '#FFFFFF',
                          fontSize: '0.9375rem',
                          outline: 'none',
                        }}
                      >
                        <option value="Palakkad">Palakkad District</option>
                        <option value="Thrissur">Thrissur District</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                        Where You Live
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Dubai, London, Dallas"
                        value={formData.currentLocation}
                        onChange={(e) => setFormData({ ...formData, currentLocation: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          backgroundColor: '#0D110E',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          borderRadius: '4px',
                          color: '#FFFFFF',
                          fontSize: '0.9375rem',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                        Your WhatsApp Phone
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+971 50... or +91 98..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          backgroundColor: '#0D110E',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          borderRadius: '4px',
                          color: '#FFFFFF',
                          fontSize: '0.9375rem',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                      Notes or Preferences
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Morning tea, reading newspapers, walking in courtyard..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        backgroundColor: '#0D110E',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '4px',
                        color: '#FFFFFF',
                        fontSize: '0.9375rem',
                        outline: 'none',
                        resize: 'none',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-harvest-solid"
                    style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}
                  >
                    <span>Connect on WhatsApp</span>
                    <span>&rarr;</span>
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <div style={{ color: '#FFFFFF', display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                  <CheckCircle2 size={42} strokeWidth={1.5} />
                </div>
                <h4 style={{ fontSize: '1.4rem', fontWeight: 300, marginBottom: '8px' }}>
                  Request Received
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  WhatsApp has opened with your inquiry. Niveda will respond shortly to arrange your parents&apos; introduction.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="btn-harvest-outline"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
