'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    parentName: '',
    district: 'Palakkad',
    currentLocation: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Arikil Care Desk,\n\nI would like to inquire about elder companionship.\n\n` +
      `My Name: ${formData.name}\n` +
      `Parents' Name: ${formData.parentName}\n` +
      `District Hub: ${formData.district}\n` +
      `Where I Live: ${formData.currentLocation || 'Not specified'}\n` +
      `Contact Phone: ${formData.phone}\n` +
      `Notes: ${formData.message || 'None'}\n\n` +
      `Thank you.`
    );
    window.open(`https://wa.me/919565533735?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <>
      {/* EDITORIAL HERO SECTION */}
      <section 
        style={{
          paddingTop: '160px',
          paddingBottom: '90px',
          backgroundColor: 'var(--bg-base)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="container-wide">
          <motion.div initial="initial" animate="animate" variants={fadeInUp} style={{ maxWidth: '860px' }}>
            <span style={{ fontSize: '0.8125rem', color: 'var(--gold)', letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}>
              Connect With Us &bull; Direct Care Coordination
            </span>
            <h1 
              style={{
                fontSize: 'clamp(2.6rem, 5vw, 4.4rem)',
                fontWeight: 300,
                color: 'var(--text-primary)',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginBottom: '24px',
              }}
            >
              We are always here for your family.
            </h1>
            <p 
              style={{
                fontSize: '1.2rem',
                color: 'var(--text-muted)',
                lineHeight: 1.8,
              }}
            >
              Reach out directly to founder Niveda Babu and our central Kerala care team. Whether you have a simple question or wish to plan an introductory visit, we respond promptly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTACT GRID */}
      <section style={{ padding: '120px 0', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container-wide">
          <div className="contact-grid">
            
            {/* Left: Direct Channels */}
            <div>
              <span style={{ fontSize: '0.8125rem', color: 'var(--gold)', letterSpacing: '0.14em', textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}>
                Direct Channels
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.6rem)', fontWeight: 300, color: 'var(--text-primary)', marginBottom: '32px', lineHeight: 1.25, letterSpacing: '-0.02em' }}>
                Immediate assistance for families abroad
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
                {/* WhatsApp */}
                <a 
                  href="https://wa.me/919565533735" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="channel-card"
                >
                  <div 
                    className="channel-icon"
                    style={{
                      backgroundColor: 'rgba(37, 211, 102, 0.12)',
                      color: '#25D366',
                    }}
                  >
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--gold)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '4px' }}>
                      Primary &bull; Fastest Response
                    </div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 400, color: 'var(--text-primary)' }}>+91 95655 33735</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>WhatsApp Direct Care Line</div>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href="mailto:hello@arikilcompanionship.com"
                  className="channel-card"
                >
                  <div 
                    className="channel-icon"
                    style={{
                      backgroundColor: 'rgba(168, 132, 92, 0.15)',
                      color: 'var(--gold)',
                    }}
                  >
                    <Mail size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--gold)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '4px' }}>
                      Official Correspondence
                    </div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 400, color: 'var(--text-primary)' }}>hello@arikilcompanionship.com</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Detailed family inquiries &amp; scheduling</div>
                  </div>
                </a>
              </div>

              {/* Privacy Reassurance */}
              <div 
                style={{
                  padding: '24px 28px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-raised)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  fontSize: '0.9375rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                }}
              >
                <ShieldCheck size={26} color="var(--gold)" style={{ flexShrink: 0 }} />
                <span>We respect your family&apos;s complete privacy. No commercial spam, no third-party data sharing.</span>
              </div>
            </div>

            {/* Right: Direct Concierge Form */}
            <div className="contact-card">
              {!submitted ? (
                <>
                  <span style={{ fontFamily: 'var(--font-script)', fontSize: '1.9rem', color: 'var(--gold)', display: 'block', marginBottom: '6px' }}>
                    Care consultation
                  </span>
                  <h3 style={{ fontSize: '2rem', fontWeight: 300, color: 'var(--text-primary)', marginBottom: '10px', letterSpacing: '-0.02em' }}>
                    Send a Direct Note
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.96875rem', lineHeight: 1.65, marginBottom: '28px' }}>
                    Fill out the brief details below to instantly connect with founder Niveda on WhatsApp.
                  </p>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                      <div>
                        <label className="contact-label">
                          Your Name
                        </label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Menon"
                          className="contact-input"
                        />
                      </div>
                      <div>
                        <label className="contact-label">
                          Parents&apos; Name
                        </label>
                        <input 
                          type="text" 
                          required
                          value={formData.parentName}
                          onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                          placeholder="e.g. Radhakrishnan &amp; Geetha"
                          className="contact-input"
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                      <div>
                        <label className="contact-label">
                          Parents&apos; District
                        </label>
                        <select 
                          value={formData.district}
                          onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                          className="contact-input"
                          style={{ cursor: 'pointer' }}
                        >
                          <option value="Palakkad" style={{ backgroundColor: '#111512', color: '#F0EDE6' }}>Palakkad District</option>
                          <option value="Thrissur" style={{ backgroundColor: '#111512', color: '#F0EDE6' }}>Thrissur District</option>
                          <option value="Other Kerala Area" style={{ backgroundColor: '#111512', color: '#F0EDE6' }}>Other Area in Kerala</option>
                        </select>
                      </div>

                      <div>
                        <label className="contact-label">
                          Where You Live
                        </label>
                        <input 
                          type="text" 
                          value={formData.currentLocation}
                          onChange={(e) => setFormData({ ...formData, currentLocation: e.target.value })}
                          placeholder="e.g. Dubai, London, Dallas"
                          className="contact-input"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="contact-label">
                        Your WhatsApp Number
                      </label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 50 123 4567 or +91 98..."
                        className="contact-input"
                      />
                    </div>

                    <div>
                      <label className="contact-label">
                        Routines or Specific Preferences
                      </label>
                      <textarea 
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="e.g. Achan likes morning tea conversations and reading newspapers; Amma enjoys gentle garden strolls."
                        className="contact-input"
                        style={{ resize: 'vertical' }}
                      />
                    </div>

                    <button 
                      type="submit"
                      className="btn-harvest-solid"
                      style={{ width: '100%', justifyContent: 'center', padding: '16px 24px', marginTop: '6px' }}
                    >
                      <span>Connect with Care Desk on WhatsApp</span>
                      <ArrowRight size={18} />
                    </button>
                  </form>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <div 
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(37, 211, 102, 0.15)',
                      color: '#25D366',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px auto',
                    }}
                  >
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: '2rem', fontWeight: 300, color: 'var(--text-primary)', marginBottom: '10px' }}>
                    WhatsApp Opened
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '24px' }}>
                    Your message has been formatted and opened in WhatsApp. Founder Niveda or our coordinator will reply promptly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn-harvest-outline"
                  >
                    <span>Send Another Note</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
