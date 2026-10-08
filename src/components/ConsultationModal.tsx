'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Shield, PhoneCall } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    userName: '',
    parentName: '',
    district: 'Palakkad',
    userContact: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build direct WhatsApp message
    const message = encodeURIComponent(
      `Hello Arikil Team,\n\nI would like to inquire about companionship visits for my parents.\n\n` +
      `My Name: ${formData.userName}\n` +
      `Parents: ${formData.parentName}\n` +
      `District: ${formData.district}\n` +
      `Contact: ${formData.userContact}\n` +
      `Notes: ${formData.notes || 'None'}\n\n` +
      `Thank you.`
    );
    window.open(`https://wa.me/919565533735?text=${message}`, '_blank');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
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
              backgroundColor: 'rgba(22, 29, 21, 0.75)',
              backdropFilter: 'blur(6px)',
            }}
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={{
              position: 'relative',
              backgroundColor: '#FAF8F5',
              borderRadius: '20px',
              padding: '36px',
              maxWidth: '520px',
              width: '100%',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.35)',
              border: '1px solid rgba(197, 154, 88, 0.3)',
              maxHeight: '90vh',
              overflowY: 'auto',
              color: '#1C241B',
            }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close dialog"
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(0, 0, 0, 0.05)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#4A5647',
              }}
            >
              <X size={20} />
            </button>

            {!submitted ? (
              <>
                <div style={{ marginBottom: '24px' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.8125rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#C59A58',
                      fontWeight: 600,
                      marginBottom: '6px',
                    }}
                  >
                    Direct Consultation
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.75rem',
                      color: '#1E281D',
                      margin: 0,
                      lineHeight: 1.25,
                    }}
                  >
                    Arrange a Gentle Conversation
                  </h3>
                  <p
                    style={{
                      color: '#4A5647',
                      fontSize: '0.9375rem',
                      marginTop: '8px',
                      lineHeight: 1.6,
                    }}
                  >
                    Share your family details below. Niveda or the Arikil care coordinator will connect with you via WhatsApp or phone.
                  </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#1E281D', marginBottom: '6px' }}>
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Nair"
                      value={formData.userName}
                      onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1px solid rgba(0, 0, 0, 0.15)',
                        backgroundColor: '#FFFFFF',
                        fontSize: '1rem',
                        color: '#1C241B',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#1E281D', marginBottom: '6px' }}>
                      Parents&apos; Name(s) in Kerala
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Achan &amp; Amma (K. Vasudevan)"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1px solid rgba(0, 0, 0, 0.15)',
                        backgroundColor: '#FFFFFF',
                        fontSize: '1rem',
                        color: '#1C241B',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#1E281D', marginBottom: '6px' }}>
                        District Hub
                      </label>
                      <select
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '10px',
                          border: '1px solid rgba(0, 0, 0, 0.15)',
                          backgroundColor: '#FFFFFF',
                          fontSize: '0.9375rem',
                          color: '#1C241B',
                          outline: 'none',
                        }}
                      >
                        <option value="Palakkad">Palakkad District</option>
                        <option value="Thrissur">Thrissur District</option>
                        <option value="Other Kerala Region">Other Kerala Region</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#1E281D', marginBottom: '6px' }}>
                        Your Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+971 / +44 / +91..."
                        value={formData.userContact}
                        onChange={(e) => setFormData({ ...formData, userContact: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '10px',
                          border: '1px solid rgba(0, 0, 0, 0.15)',
                          backgroundColor: '#FFFFFF',
                          fontSize: '0.9375rem',
                          color: '#1C241B',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#1E281D', marginBottom: '6px' }}>
                      Companionship Wishes or Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Morning tea conversations, quiet courtyard walks, or daily WhatsApp photo updates..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1px solid rgba(0, 0, 0, 0.15)',
                        backgroundColor: '#FFFFFF',
                        fontSize: '0.9375rem',
                        color: '#1C241B',
                        outline: 'none',
                        resize: 'none',
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.8125rem',
                      color: '#4A5647',
                    }}
                  >
                    <Shield size={16} color="#C59A58" />
                    <span>Strict family privacy. Direct founder-coordinated communication.</span>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      padding: '14px',
                      fontSize: '1rem',
                      justifyContent: 'center',
                      marginTop: '6px',
                    }}
                  >
                    <Send size={18} />
                    <span>Proceed via WhatsApp (+91 95655 33735)</span>
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '24px 8px' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(37, 211, 102, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#25D366',
                    margin: '0 auto 20px auto',
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.75rem',
                    color: '#1E281D',
                    marginBottom: '10px',
                  }}
                >
                  Message Prepared
                </h3>
                <p
                  style={{
                    color: '#4A5647',
                    fontSize: '1rem',
                    lineHeight: 1.65,
                    marginBottom: '24px',
                  }}
                >
                  Your details have been formatted and directed to our official WhatsApp channel (+91 95655 33735). We look forward to speaking with you.
                </p>
                <button
                  onClick={handleReset}
                  className="btn btn-outline"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Close Window
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
