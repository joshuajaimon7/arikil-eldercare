'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ConsultationModal from '@/components/ConsultationModal';

export default function LocationsPage() {
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
              Service Coverage &bull; Central Kerala
            </span>
            <h1 style={{ fontSize: 'clamp(2.6rem, 5vw, 4.4rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--text-primary)', letterSpacing: '-0.025em', marginBottom: '28px' }}>
              Palakkad &amp; Thrissur District Hubs
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              Centrally based in Kerala to ensure swift, dependable, and personalized companionship visits across residential communities and heritage homes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hubs Columns */}
      <section style={{ padding: '120px 0', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', marginBottom: '96px' }}>
            
            {/* Palakkad Hub */}
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '32px' }}>
              <span style={{ fontSize: '0.78125rem', color: 'var(--gold)', letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}>
                Founding Hub
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.4rem)', fontWeight: 300, color: 'var(--text-primary)', marginBottom: '16px', letterSpacing: '-0.01em' }}>
                Palakkad District
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.0625rem', lineHeight: 1.8, marginBottom: '24px' }}>
                Our roots are deeply anchored in Palakkad. We provide reliable companionship visits across town neighborhoods and surrounding residential pockets.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'rgba(240, 237, 230, 0.85)', fontSize: '0.9375rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--gold)' }}>&bull;</span> Palakkad Town Center &amp; Fort Area</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--gold)' }}>&bull;</span> Kalpathy Heritage Village &amp; Olavakode</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--gold)' }}>&bull;</span> Chittur &amp; Kuzhalmannam</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--gold)' }}>&bull;</span> Ottapalam &amp; Shoranur Environs</div>
              </div>
            </div>

            {/* Thrissur Hub */}
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '32px' }}>
              <span style={{ fontSize: '0.78125rem', color: 'var(--gold)', letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}>
                Central Kerala Hub
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.4rem)', fontWeight: 300, color: 'var(--text-primary)', marginBottom: '16px', letterSpacing: '-0.01em' }}>
                Thrissur District
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.0625rem', lineHeight: 1.8, marginBottom: '24px' }}>
                Serving the cultural capital of Kerala, providing trusted companions who understand the lifestyle, tradition, and gentle pace of Thrissur families.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'rgba(240, 237, 230, 0.85)', fontSize: '0.9375rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--gold)' }}>&bull;</span> Thrissur Swaraj Round Environs</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--gold)' }}>&bull;</span> Ayyanthole &amp; Civil Station Area</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--gold)' }}>&bull;</span> Ollur &amp; Kuriachira Residential Belts</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--gold)' }}>&bull;</span> Mannuthy &amp; Adat Suburbs</div>
              </div>
            </div>

          </div>

          {/* NRI Global Bridge Box */}
          <div style={{ border: '1px solid var(--border)', padding: '56px 40px', backgroundColor: 'var(--bg-raised)', borderRadius: '6px', textAlign: 'center', maxWidth: '960px', margin: '0 auto' }}>
            <span style={{ fontSize: '0.78125rem', color: 'var(--gold)', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}>
              The Global NRI Bridge
            </span>
            <h3 style={{ fontSize: 'clamp(2rem, 3.4vw, 2.6rem)', fontWeight: 300, color: 'var(--text-primary)', marginBottom: '20px' }}>
              Connecting Families Across Continents
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '720px', margin: '0 auto 36px auto', lineHeight: 1.8 }}>
              Whether you live in Dubai, London, Singapore, Dallas, or Doha, our team coordinates visits that synchronize seamlessly with your family&apos;s peace of mind.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a 
                href="https://wa.me/919565533735" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-harvest-solid"
              >
                <span>WhatsApp Care Desk</span>
                <span>&rarr;</span>
              </a>
              <button 
                onClick={() => setModalOpen(true)}
                className="btn-harvest-outline"
              >
                <span>Arrange Consultation</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
