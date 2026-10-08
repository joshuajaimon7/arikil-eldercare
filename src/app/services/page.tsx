'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Heart, 
  MessageCircle, 
  Clock, 
  ShieldCheck, 
  Camera, 
  Calendar,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import ConsultationModal from '@/components/ConsultationModal';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);

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
            <span className="section-eyebrow">Our Offering</span>
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
              Companionship Designed for <em>Dignity &amp; Comfort</em>
            </h1>
            <p 
              style={{
                fontSize: '1.125rem',
                color: '#4A5647',
                lineHeight: 1.8,
              }}
            >
              We provide heartfelt personal presence in your parents&apos; own home. Unhurried, attentive, and tailored to their daily rhythm.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Companionship Pillars */}
      <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {/* Pillar 1 */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '40px',
                alignItems: 'center',
              }}
            >
              <div style={{ borderRadius: '18px', overflow: 'hidden', border: '1px solid rgba(52, 68, 47, 0.1)' }}>
                <img 
                  src="/assets/morning_tea.jpg" 
                  alt="Tea and Unhurried Conversation" 
                  style={{ width: '100%', height: '360px', objectFit: 'cover' }}
                />
              </div>
              <div>
                <span style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C59A58' }}>
                  Pillar 01
                </span>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: '#1E281D', marginTop: '6px', marginBottom: '16px' }}>
                  Veranda Tea &amp; Attentive Conversation
                </h2>
                <p style={{ color: '#4A5647', fontSize: '1.0625rem', lineHeight: 1.8, marginBottom: '20px' }}>
                  A cup of tea, a comfortable chair on the veranda, and someone who genuinely listens. Our companions are natural conversationalists who respect life experiences, childhood stories, and daily thoughts.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', color: '#1E281D', fontWeight: 500 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={18} color="#C59A58" />
                    <span>Patient, unhurried listening without distractions</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={18} color="#C59A58" />
                    <span>Fluency in Malayalam and deep respect for cultural context</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={18} color="#C59A58" />
                    <span>Sharing news, light humor, and reassuring optimism</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 2 */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '40px',
                alignItems: 'center',
              }}
            >
              <div style={{ order: 2 }}>
                <span style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C59A58' }}>
                  Pillar 02
                </span>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: '#1E281D', marginTop: '6px', marginBottom: '16px' }}>
                  Courtyard Walks &amp; Gentle Mobility
                </h2>
                <p style={{ color: '#4A5647', fontSize: '1.0625rem', lineHeight: 1.8, marginBottom: '20px' }}>
                  A safe, reassuring arm to lean on during morning or evening walks around the courtyard, home garden, or quiet residential lane. Encourages steady mobility without fatigue.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', color: '#1E281D', fontWeight: 500 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={18} color="#C59A58" />
                    <span>Attentive physical presence and slip-prevention awareness</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={18} color="#C59A58" />
                    <span>Fresh morning air and enjoying Kerala garden greenery</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={18} color="#C59A58" />
                    <span>Respectful pace guided entirely by your parents&apos; energy</span>
                  </li>
                </ul>
              </div>
              <div style={{ borderRadius: '18px', overflow: 'hidden', border: '1px solid rgba(52, 68, 47, 0.1)', order: 1 }}>
                <img 
                  src="/assets/garden_walk.jpg" 
                  alt="Courtyard Walks and Gentle Mobility" 
                  style={{ width: '100%', height: '360px', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Pillar 3 */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '40px',
                alignItems: 'center',
              }}
            >
              <div style={{ borderRadius: '18px', overflow: 'hidden', border: '1px solid rgba(52, 68, 47, 0.1)' }}>
                <img 
                  src="/assets/digital_connection.jpg" 
                  alt="Family Photo Updates and Digital Connection" 
                  style={{ width: '100%', height: '360px', objectFit: 'cover' }}
                />
              </div>
              <div>
                <span style={{ fontSize: '0.8125rem', fontWeight: 300, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C59A58' }}>
                  Pillar 03
                </span>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: '#1E281D', marginTop: '6px', marginBottom: '16px' }}>
                  Photo Updates to Children Abroad
                </h2>
                <p style={{ color: '#4A5647', fontSize: '1.0625rem', lineHeight: 1.8, marginBottom: '20px' }}>
                  The distance between Kerala and Dubai, London, or Dallas feels smaller when you receive a spontaneous photo of your parents smiling, enjoying tea, or sitting in the garden after each visit.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', color: '#1E281D', fontWeight: 500 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={18} color="#C59A58" />
                    <span>Direct WhatsApp photo summary sent to your family chat</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={18} color="#C59A58" />
                    <span>Assistance helping parents connect to family video calls</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={18} color="#C59A58" />
                    <span>Complete transparency and peace of mind across time zones</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Scheduling Notice */}
      <section style={{ padding: '64px 0', backgroundColor: '#FAF8F5', borderTop: '1px solid rgba(52, 68, 47, 0.08)' }}>
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#1E281D', marginBottom: '14px' }}>
            Flexible Arrangements Grounded in Your Family&apos;s Routine
          </h2>
          <p style={{ color: '#4A5647', fontSize: '1.0625rem', lineHeight: 1.8, marginBottom: '28px' }}>
            Every home is unique. We do not enforce rigid commercial packages. During our initial conversation, we mutually agree on visit days, morning or afternoon timings, and the ideal companion match.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => setModalOpen(true)}
              className="btn-primary"
            >
              <MessageCircle size={18} />
              <span>Discuss Visit Schedule</span>
            </button>
            <a 
              href="https://wa.me/919565533735" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 24px',
                borderRadius: '8px',
                border: '1px solid rgba(52, 68, 47, 0.25)',
                color: '#1E281D',
                fontWeight: 600,
                backgroundColor: '#FFFFFF',
              }}
            >
              <span>Direct WhatsApp (+91 95655 33735)</span>
            </a>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
