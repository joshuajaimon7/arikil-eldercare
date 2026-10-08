'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ConsultationModal from '@/components/ConsultationModal';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [conciergeData, setConciergeData] = useState({
    name: '',
    phone: '',
    district: 'Palakkad',
  });

  const handleConciergeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Arikil Care Desk,\n\nI would like to inquire about elder companionship.\n\n` +
      `My Name: ${conciergeData.name}\n` +
      `District: ${conciergeData.district}\n` +
      `WhatsApp Phone: ${conciergeData.phone}\n\n` +
      `Thank you.`
    );
    window.open(`https://wa.me/919565533735?text=${text}`, '_blank');
  };

  return (
    <>
      {/* ======================================================================
          1. FINE-ART GALLERY MAT FRAMED HERO (CHANTAL & MAX SCREENSHOT 1)
          ====================================================================== */}
      <section className="gallery-mat-wrapper">
        <div className="gallery-mat-inner">
          <div className="gallery-hero-bg" />
          <div className="gallery-hero-scrim" />

          <div className="gallery-hero-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Clean, frosted eyebrow pill combining Malayalam & Location */}
              <div className="gallery-hero-eyebrow">
                <span className="font-malayalam" style={{ color: 'var(--gold-light)', marginRight: '8px', fontWeight: 600 }}>
                  അരികിൽ
                </span>
                <span>&bull; Palakkad &bull; Thrissur, Kerala</span>
              </div>

              {/* Main Headline */}
              <h1 className="gallery-hero-title">
                Presence over distance.
              </h1>

              {/* Single unified subtitle seamlessly pairing Malayalam and English */}
              <p className="gallery-hero-subtitle">
                <span className="font-malayalam" style={{ color: '#F0EDE6', fontWeight: 500 }}>
                  മാതാപിതാക്കൾക്ക് ആത്മാർത്ഥമായ കൂട്ട്
                </span>
                <span style={{ color: 'var(--gold)', margin: '0 10px' }}>&bull;</span>
                <span style={{ color: 'rgba(240, 237, 230, 0.85)', letterSpacing: '0.04em' }}>
                  Bespoke Elder Companionship
                </span>
              </p>

              {/* High-contrast pill CTA */}
              <button 
                onClick={() => setModalOpen(true)}
                className="btn-pill-dark"
              >
                <span>Talk to us about your parents</span>
                <span style={{ fontSize: '1.15em', marginLeft: '4px' }}>&rarr;</span>
              </button>
            </motion.div>
          </div>

          <div className="gallery-hero-cue" />
        </div>
      </section>

      {/* ======================================================================
          2. LINE-ART ETCHING & SPLIT EDITORIAL (CHANTAL & MAX SCREENSHOT 2)
          ====================================================================== */}
      <section className="editorial-etching-section">
        <div className="container-wide">
          <div className="editorial-etching-grid">
            
            {/* Left Photo */}
            <div className="etching-photo-col">
              <img 
                src="/assets/achan_newspaper.jpg" 
                alt="Kerala Elder Reading Morning Newspaper" 
              />
            </div>

            {/* Center Etching & Story Column */}
            <div className="etching-center-col">
              {/* Delicate Kerala Heritage Roofline / Poomukham Line Art Sketch */}
              <div className="etching-svg-wrap">
                <svg viewBox="0 0 100 70" fill="none" stroke="#A6835B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 50,5 L 15,35 L 20,38 L 50,18 L 80,38 L 85,35 Z" />
                  <path d="M 30,32 L 30,55 L 70,55 L 70,32" />
                  <path d="M 45,55 L 45,42 Q 50,38 55,42 L 55,55" />
                  <path d="M 22,55 L 78,55" />
                  <circle cx="50" cy="10" r="1.5" fill="#A6835B" />
                </svg>
              </div>

              <span className="font-malayalam" style={{ fontSize: '1.4rem', color: 'var(--gold)', display: 'block', marginBottom: '8px', fontWeight: 500 }}>
                കുടുംബം പോലെ കരുതൽ
              </span>

              <h2 className="etching-title">
                CARE LIKE FAMILY WITH ARIKIL
              </h2>

              <p className="etching-text">
                Kerala ancestral homes may grow quiet when children live abroad, but family love doesn&apos;t have to feel distant. Ditch the cold agency model and discover heartfelt, one-of-a-kind companionship visits created with vetted local companions. As locals ourselves, we genuinely care about giving your parents an unhurried, respectful presence.
              </p>

              <Link href="/about" className="btn-pill-outline-dark">
                <span>ABOUT OUR CARE</span>
                <span>&rarr;</span>
              </Link>

              {/* Delicate Vertical Thread Line */}
              <div className="etching-vertical-thread" />
            </div>

            {/* Right Photo */}
            <div className="etching-photo-col">
              <img 
                src="/assets/amma_laughing.jpg" 
                alt="Kerala Mother Laughing with Companion" 
              />
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          3. THE "GREEN VALLEY" STATIC PARALLAX CURVY MASK (SCREENSHOT 4)
             "green valley inside is static but the design moves according to scroll"
          ====================================================================== */}
      <section className="green-valley-section">
        <div className="container-wide">
          <div className="green-valley-grid">
            
            {/* Left Copy */}
            <div className="green-valley-copy-col">
              <h2 className="green-valley-title">
                Locally crafted personal companionship
              </h2>

              <span className="font-malayalam" style={{ fontSize: '1.35rem', color: 'var(--gold)', display: 'block', marginBottom: '8px', fontWeight: 500 }}>
                മക്കൾ കടൽ കടന്നാലും, നാട്ടിൽ മാതാപിതാക്കൾ തനിച്ചല്ല...
              </span>

              <span className="green-valley-script">
                There&apos;s Nothing Like Peace Of Mind When Family Is Oceans Away...
              </span>

              <p className="green-valley-desc">
                Each companionship visit in Palakkad and Thrissur is a personal collaboration. You tell us about your parents&apos; unique style, morning tea preferences, and walking habits, and then we work our magic to ensure they have someone patient, respectful, and attentive sitting right beside them.
              </p>

              <p className="green-valley-desc" style={{ marginBottom: '36px' }}>
                As a local Kerala companionship team, we seek to give your family access to experiences that no generic agency can offer. And the best part? We take care of all the nitty-gritty details so you can focus on your life abroad knowing Achan and Amma are smiling.
              </p>

              <button 
                onClick={() => setModalOpen(true)}
                className="btn-pill-outline-dark"
              >
                <span>ARRANGE A VISIT</span>
                <span>&rarr;</span>
              </button>
            </div>

            {/* Right: The Curvy Silhouette Mask with Static Parallax Viewport */}
            <div>
              <div className="green-valley-mask-container">
                {/* The background inside is static/fixed, but revealed through this organic moving curvy window! */}
                <div className="green-valley-fixed-viewport" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          4. TORN PAPER REVEAL & TILTED POLAROID SNAPSHOTS (SCREENSHOT 3 & 5)
          ====================================================================== */}
      <section className="deckled-paper-section">
        {/* Top Scenic Strip with Deckled Cutout */}
        <div className="deckled-top-strip" />

        <div className="container-wide">
          <div className="deckled-content-grid">
            
            {/* Left Handwritten Testimonial */}
            <div style={{ position: 'relative' }}>
              <div className="watermark-bg-text">
                ARIKIL
              </div>

              <blockquote className="handwritten-testimonial">
                &ldquo;We absolutely loved having Arikil visit Achan and Amma! They went out of their way and were true examples of gentle, respectful service.&rdquo;
              </blockquote>

              <cite className="handwritten-author">
                &mdash; TYSON &amp; MENON FAMILY, DUBAI &amp; LONDON
              </cite>
            </div>

            {/* Right Tilted Polaroid Snapshot Stack */}
            <div className="polaroid-stack-wrap">
              <div className="polaroid-frame">
                <img 
                  src="/assets/morning_tea.jpg" 
                  alt="Morning Chai on the Veranda" 
                />
                <p className="polaroid-caption">
                  Morning Chai on the Veranda
                </p>

                {/* Embossed Circular Seal Badge (Screenshot 3) */}
                <div className="polaroid-embossed-seal">
                  <span>ARIKIL</span>
                  <span style={{ fontSize: '0.45rem', margin: '2px 0' }}>&bull; VERIFIED &bull;</span>
                  <span>KERALA</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          5. DIRECT CONCIERGE CARE INQUIRY (SCREENSHOT 5 STYLE)
          ====================================================================== */}
      <section className="concierge-section">
        <div className="container-wide">
          <div className="concierge-grid">
            
            {/* Left Photo & Dark Editorial Polaroid Overlap */}
            <div style={{ position: 'relative' }}>
              <img 
                src="/assets/temple_heritage.jpg" 
                alt="Kerala Heritage Reflections" 
                style={{ width: '100%', height: '440px', objectFit: 'cover', borderRadius: '4px', border: '1px solid var(--border)' }}
              />
              <div 
                style={{
                  position: 'absolute',
                  top: '-24px',
                  right: '-16px',
                  background: '#171D18',
                  border: '1px solid var(--border-gold)',
                  padding: '12px 12px 32px 12px',
                  boxShadow: '0 24px 54px rgba(0,0,0,0.65)',
                  transform: 'rotate(7deg)',
                  width: '190px',
                  borderRadius: '2px',
                }}
              >
                <img src="/assets/elderly_walking_couple.jpg" alt="Courtyard Walk" style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '2px' }} />
                <p style={{ fontFamily: 'var(--font-script)', fontSize: '1.15rem', textAlign: 'center', marginTop: '10px', color: 'var(--text-muted)' }}>
                  Veranda Strolls
                </p>
              </div>
            </div>

            {/* Right Clean Form */}
            <div>
              <span className="font-malayalam" style={{ fontSize: '1.6rem', color: 'var(--gold)', display: 'block', marginBottom: '4px', fontWeight: 500 }}>
                അരികിൽ കുടുംബ കൂട്ടായ്മയിലേക്ക് സ്വാഗതം
              </span>
              <span style={{ fontFamily: 'var(--font-script)', fontSize: '1.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
                Join our family care circle
              </span>
              <h3 style={{ fontSize: 'clamp(2rem, 3.4vw, 2.6rem)', fontWeight: 300, color: 'var(--text-primary)', marginBottom: '14px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                Coordinate a visit for your parents
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '32px' }}>
                Connect directly with founder Niveda Babu on WhatsApp to plan an unhurried, respectful home introduction in Palakkad or Thrissur.
              </p>

              <form onSubmit={handleConciergeSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <input 
                  type="text" 
                  required
                  placeholder="YOUR NAME"
                  value={conciergeData.name}
                  onChange={(e) => setConciergeData({ ...conciergeData, name: e.target.value })}
                  className="concierge-input"
                />

                <select 
                  value={conciergeData.district}
                  onChange={(e) => setConciergeData({ ...conciergeData, district: e.target.value })}
                  className="concierge-input"
                  style={{ cursor: 'pointer' }}
                >
                  <option value="Palakkad" style={{ backgroundColor: '#111512', color: '#F0EDE6' }}>PALAKKAD DISTRICT</option>
                  <option value="Thrissur" style={{ backgroundColor: '#111512', color: '#F0EDE6' }}>THRISSUR DISTRICT</option>
                </select>

                <input 
                  type="tel" 
                  required
                  placeholder="WHATSAPP PHONE NUMBER"
                  value={conciergeData.phone}
                  onChange={(e) => setConciergeData({ ...conciergeData, phone: e.target.value })}
                  className="concierge-input"
                />

                <button 
                  type="submit"
                  className="btn-harvest-solid"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '8px', padding: '15px 24px' }}
                >
                  <span>CONNECT ON WHATSAPP (+91 95655 33735)</span>
                  <span>&rarr;</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </>
  );
}
