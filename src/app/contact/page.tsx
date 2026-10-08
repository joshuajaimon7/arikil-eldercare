'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    parentName: '',
    district: 'Palakkad',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Arikil Team,\n\nI would like to inquire about elder companionship.\n\n` +
      `My Name: ${formData.name}\n` +
      `Parents' Name: ${formData.parentName}\n` +
      `District: ${formData.district}\n` +
      `Phone: ${formData.phone}\n` +
      `Notes: ${formData.message || 'None'}\n\n` +
      `Thank you.`
    );
    window.open(`https://wa.me/919565533735?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section 
        style={{
          paddingTop: '64px',
          paddingBottom: '64px',
          backgroundColor: '#FAF8F5',
          borderBottom: '1px solid rgba(52, 68, 47, 0.08)',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: '800px' }}>
          <motion.div initial="initial" animate="animate" variants={fadeInUp}>
            <span className="section-eyebrow">Connect With Us</span>
            <h1 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 4vw, 3.4rem)',
                fontWeight: 600,
                color: '#1E281D',
                lineHeight: 1.2,
                marginBottom: '16px',
              }}
            >
              We Are Always <em>Here for Your Family</em>
            </h1>
            <p 
              style={{
                fontSize: '1.125rem',
                color: '#4A5647',
                lineHeight: 1.8,
              }}
            >
              Reach out directly to Niveda and our care coordination team. Whether you have a quick question or wish to plan an introductory visit, we respond promptly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
            }}
          >
            {/* Left: Contact Channels */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: '#1E281D', marginBottom: '24px' }}>
                Direct Channels
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                <a 
                  href="https://wa.me/919565533735" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '20px',
                    borderRadius: '14px',
                    backgroundColor: '#FAF8F5',
                    border: '1px solid rgba(52, 68, 47, 0.1)',
                    textDecoration: 'none',
                    color: '#1E281D',
                  }}
                >
                  <div 
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(37, 211, 102, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#25D366',
                    }}
                  >
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8125rem', color: '#8A5F45', fontWeight: 600, textTransform: 'uppercase' }}>
                      Primary &amp; Fastest Response
                    </div>
                    <div style={{ fontSize: '1.125rem', fontWeight: 700 }}>+91 95655 33735</div>
                    <div style={{ fontSize: '0.875rem', color: '#4A5647' }}>WhatsApp &amp; Direct Calls</div>
                  </div>
                </a>

                <a 
                  href="mailto:hello@arikilcompanionship.com"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '20px',
                    borderRadius: '14px',
                    backgroundColor: '#FAF8F5',
                    border: '1px solid rgba(52, 68, 47, 0.1)',
                    textDecoration: 'none',
                    color: '#1E281D',
                  }}
                >
                  <div 
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(197, 154, 88, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#C59A58',
                    }}
                  >
                    <Mail size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8125rem', color: '#8A5F45', fontWeight: 600, textTransform: 'uppercase' }}>
                      Official Inquiries
                    </div>
                    <div style={{ fontSize: '1.0625rem', fontWeight: 700 }}>hello@arikilcompanionship.com</div>
                    <div style={{ fontSize: '0.875rem', color: '#4A5647' }}>Detailed family requests &amp; partnerships</div>
                  </div>
                </a>

                <a 
                  href="https://instagram.com/arikil.official" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '20px',
                    borderRadius: '14px',
                    backgroundColor: '#FAF8F5',
                    border: '1px solid rgba(52, 68, 47, 0.1)',
                    textDecoration: 'none',
                    color: '#1E281D',
                  }}
                >
                  <div 
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(225, 48, 108, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#E1306C',
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8125rem', color: '#8A5F45', fontWeight: 600, textTransform: 'uppercase' }}>
                      Social Community
                    </div>
                    <div style={{ fontSize: '1.0625rem', fontWeight: 700 }}>@arikil.official</div>
                    <div style={{ fontSize: '0.875rem', color: '#4A5647' }}>Updates, stories &amp; reflections</div>
                  </div>
                </a>
              </div>

              <div 
                style={{
                  padding: '20px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(52, 68, 47, 0.06)',
                  border: '1px solid rgba(52, 68, 47, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '0.9375rem',
                  color: '#1E281D',
                }}
              >
                <ShieldCheck size={24} color="#C59A58" />
                <span>We respect your family&apos;s privacy. No spam, no third-party sharing.</span>
              </div>
            </div>

            {/* Right: Consultation Form */}
            <div 
              style={{
                padding: '36px',
                borderRadius: '20px',
                backgroundColor: '#FAF8F5',
                border: '1px solid rgba(52, 68, 47, 0.12)',
                boxShadow: '0 12px 36px rgba(0, 0, 0, 0.05)',
              }}
            >
              {!submitted ? (
                <>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#1E281D', marginBottom: '8px' }}>
                    Send a Direct Note
                  </h3>
                  <p style={{ color: '#4A5647', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '24px' }}>
                    Fill out the brief details below to instantly connect with our care team on WhatsApp.
                  </p>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#1E281D', marginBottom: '6px' }}>
                        Your Name
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anjali Menon"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          border: '1px solid rgba(0, 0, 0, 0.15)',
                          backgroundColor: '#FFFFFF',
                          fontSize: '1rem',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#1E281D', marginBottom: '6px' }}>
                          Phone / WhatsApp
                        </label>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+971 / +91..."
                          style={{
                            width: '100%',
                            padding: '12px 14px',
                            borderRadius: '8px',
                            border: '1px solid rgba(0, 0, 0, 0.15)',
                            backgroundColor: '#FFFFFF',
                            fontSize: '0.9375rem',
                            outline: 'none',
                          }}
                        />
                      </div>

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
                            borderRadius: '8px',
                            border: '1px solid rgba(0, 0, 0, 0.15)',
                            backgroundColor: '#FFFFFF',
                            fontSize: '0.9375rem',
                            outline: 'none',
                          }}
                        >
                          <option value="Palakkad">Palakkad District</option>
                          <option value="Thrissur">Thrissur District</option>
                          <option value="Other Kerala Region">Other Kerala Region</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#1E281D', marginBottom: '6px' }}>
                        Parents&apos; Name(s) in Kerala
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        placeholder="e.g. K. Narayanan &amp; Sarada"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          border: '1px solid rgba(0, 0, 0, 0.15)',
                          backgroundColor: '#FFFFFF',
                          fontSize: '1rem',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#1E281D', marginBottom: '6px' }}>
                        How Can We Support Your Parents? (Optional)
                      </label>
                      <textarea 
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Share any details on preferred visit times, conversation interests, or companionship routine..."
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          border: '1px solid rgba(0, 0, 0, 0.15)',
                          backgroundColor: '#FFFFFF',
                          fontSize: '0.9375rem',
                          outline: 'none',
                          resize: 'none',
                        }}
                      />
                    </div>

                    <button 
                      type="submit"
                      className="btn-primary"
                      style={{ padding: '14px', fontSize: '1rem', justifyContent: 'center', marginTop: '8px' }}
                    >
                      <Send size={18} />
                      <span>Send to WhatsApp (+91 95655 33735)</span>
                    </button>
                  </form>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '36px 12px' }}>
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
                      margin: '0 auto 16px auto',
                    }}
                  >
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#1E281D', marginBottom: '10px' }}>
                    Message Prepared
                  </h3>
                  <p style={{ color: '#4A5647', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px' }}>
                    Your message has been formatted for WhatsApp. We will be in touch shortly to assist your family.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn btn-outline"
                    style={{ padding: '12px 24px', borderRadius: '8px', border: '1px solid #1E281D', backgroundColor: '#FFFFFF' }}
                  >
                    Send Another Message
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
