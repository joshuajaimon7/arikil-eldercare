'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ConsultationModal from '@/components/ConsultationModal';

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Header Statement */}
      <section style={{ paddingTop: '160px', paddingBottom: '90px', backgroundColor: 'var(--bg-base)', borderBottom: '1px solid var(--border)' }}>
        <div className="container-wide">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '880px' }}
          >
            <span style={{ fontSize: '0.8125rem', color: 'var(--gold)', letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}>
              About Arikil &bull; Palakkad, Kerala
            </span>
            <h1 style={{ fontSize: 'clamp(2.6rem, 5vw, 4.4rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--text-primary)', letterSpacing: '-0.025em', marginBottom: '28px' }}>
              “Care is not clinical. It is about companionship, patience, and presence.”
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              The word <strong style={{ color: 'var(--text-primary)' }}>അരികിൽ (Arikil)</strong> translates to &ldquo;Beside&rdquo; or &ldquo;Close By&rdquo; in Malayalam. It represents our core promise: whenever families are separated by oceans and continents, a thoughtful companion stands right beside their parents.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section style={{ padding: '120px 0', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container-wide">
          <div className="harvest-asymmetric-grid">
            
            {/* Visual Frame */}
            <div className="harvest-photo-card">
              <img src="/assets/amma_laughing.jpg" alt="Kerala Mother Smiling Warmly" style={{ border: '1px solid var(--border)' }} />
              <p className="harvest-photo-caption">Palakkad District, Kerala</p>
            </div>

            {/* Narrative Copy */}
            <div>
              <span style={{ fontSize: '0.8125rem', color: 'var(--gold)', letterSpacing: '0.14em', textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}>
                Founder&apos;s Calling &bull; Niveda Babu
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.25, marginBottom: '28px', letterSpacing: '-0.02em' }}>
                Why Arikil was founded in Palakkad
              </h2>
              <p style={{ fontSize: '1.0625rem', color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '20px' }}>
                Growing up in Palakkad, Niveda Babu observed a quiet reality touching neighborhood homes. Children were working across Dubai, London, Singapore, and North America to provide for their families.
              </p>
              <p style={{ fontSize: '1.0625rem', color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '32px' }}>
                While money and medical needs can be transferred across borders in seconds, <strong style={{ color: 'var(--text-primary)' }}>human presence cannot be delivered through an app</strong>. Parents who are independent do not require clinical nurses; what they miss is everyday human presence: someone to sit with over hot morning tea, converse with in Malayalam, and stroll with through the courtyard.
              </p>

              <div style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '24px', marginBottom: '36px', backgroundColor: 'rgba(168, 132, 92, 0.05)', padding: '20px 24px', borderRadius: '0 8px 8px 0' }}>
                <p style={{ fontFamily: 'var(--font-malayalam)', fontSize: '1.2rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '10px' }}>
                  &ldquo;നമ്മുടെ മാതാപിതാക്കൾക്ക് വേണ്ടത് സഹതാപമല്ല, മറിച്ച് കേൾക്കാൻ ഒരാളും കൂടെയിരിക്കാൻ ഒരു മനസ്സുമാണ്.&rdquo;
                </p>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-dim)', fontStyle: 'italic' }}>
                  Our elders do not seek sympathy; they simply desire someone who listens and sits beside them.
                </span>
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a 
                  href="https://wa.me/919565533735" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-harvest-solid"
                >
                  <span>Connect with Niveda on WhatsApp</span>
                  <span>&rarr;</span>
                </a>
                <button 
                  onClick={() => setModalOpen(true)}
                  className="btn-harvest-outline"
                >
                  <span>Arrange an Introduction</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Tenets */}
      <section style={{ padding: '110px 0 140px 0', backgroundColor: 'var(--bg-base)', borderTop: '1px solid var(--border)' }}>
        <div className="container-wide">
          <div style={{ maxWidth: '780px', marginBottom: '60px' }}>
            <span style={{ fontSize: '0.8125rem', color: 'var(--gold)', letterSpacing: '0.14em', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
              Guiding Ethos
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 300, color: 'var(--text-primary)' }}>
              Our Pillars of Trust
            </h2>
          </div>

          <div className="harvest-pillars-grid">
            <div className="harvest-pillar-col">
              <span className="harvest-pillar-num">01 / Dignity</span>
              <h3 className="harvest-pillar-title">Dignity Above All</h3>
              <p className="harvest-pillar-desc">
                We never treat elderly parents as dependents. We treat them as respected elders with stories, wisdom, and life choices that deserve honour.
              </p>
            </div>

            <div className="harvest-pillar-col">
              <span className="harvest-pillar-num">02 / Rhythm</span>
              <h3 className="harvest-pillar-title">Unhurried Presence</h3>
              <p className="harvest-pillar-desc">
                Companionship cannot be rushed by a stopwatch. We sit down, drink tea, and take time to build authentic, lasting friendships.
              </p>
            </div>

            <div className="harvest-pillar-col">
              <span className="harvest-pillar-num">03 / Transparency</span>
              <h3 className="harvest-pillar-title">Direct Connection</h3>
              <p className="harvest-pillar-desc">
                We keep families abroad directly informed after every session with candid photos and voice notes so you remain close to your parents.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
