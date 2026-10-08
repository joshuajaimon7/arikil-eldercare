'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Globe, Clock, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import ConsultationModal from '@/components/ConsultationModal';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

export default function LocationsPage() {
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
            <span className="section-eyebrow">Service Coverage</span>
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
              Palakkad &amp; Thrissur <em>District Hubs</em>
            </h1>
            <p 
              style={{
                fontSize: '1.125rem',
                color: '#4A5647',
                lineHeight: 1.8,
              }}
            >
              Centrally based in central Kerala to ensure swift, dependable, and personalized companionship visits across residential communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* District Cards */}
      <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '36px',
              marginBottom: '64px',
            }}
          >
            {/* Palakkad Hub */}
            <div 
              style={{
                padding: '36px',
                borderRadius: '20px',
                backgroundColor: '#FAF8F5',
                border: '1px solid rgba(52, 68, 47, 0.1)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
              }}
            >
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(197, 154, 88, 0.2)',
                  color: '#8A5F45',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  marginBottom: '20px',
                }}
              >
                <MapPin size={15} color="#C59A58" />
                <span>Founding Hub</span>
              </div>

              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#1E281D', marginBottom: '12px' }}>
                Palakkad District
              </h2>
              <p style={{ color: '#4A5647', fontSize: '1rem', lineHeight: 1.75, marginBottom: '24px' }}>
                Our roots are deeply anchored in Palakkad. We provide reliable companionship visits across town neighborhoods and surrounding residential pockets.
              </p>

              <div style={{ borderTop: '1px solid rgba(52, 68, 47, 0.08)', paddingTop: '20px' }}>
                <h4 style={{ fontSize: '0.9375rem', color: '#1E281D', marginBottom: '12px', fontWeight: 600 }}>
                  Primary Coverage Areas:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: '#4A5647', fontSize: '0.9375rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={16} color="#C59A58" />
                    <span>Palakkad Town &amp; Fort Area</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={16} color="#C59A58" />
                    <span>Kalpathy &amp; Olavakode</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={16} color="#C59A58" />
                    <span>Chittur &amp; Kuzhalmannam</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={16} color="#C59A58" />
                    <span>Ottapalam &amp; Shoranur Environs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Thrissur Hub */}
            <div 
              style={{
                padding: '36px',
                borderRadius: '20px',
                backgroundColor: '#FAF8F5',
                border: '1px solid rgba(52, 68, 47, 0.1)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
              }}
            >
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(52, 68, 47, 0.1)',
                  color: '#34442F',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  marginBottom: '20px',
                }}
              >
                <MapPin size={15} color="#34442F" />
                <span>Central Kerala Hub</span>
              </div>

              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#1E281D', marginBottom: '12px' }}>
                Thrissur District
              </h2>
              <p style={{ color: '#4A5647', fontSize: '1rem', lineHeight: 1.75, marginBottom: '24px' }}>
                Serving the cultural capital of Kerala, providing trusted companions who understand the lifestyle, tradition, and gentle pace of Thrissur families.
              </p>

              <div style={{ borderTop: '1px solid rgba(52, 68, 47, 0.08)', paddingTop: '20px' }}>
                <h4 style={{ fontSize: '0.9375rem', color: '#1E281D', marginBottom: '12px', fontWeight: 600 }}>
                  Primary Coverage Areas:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: '#4A5647', fontSize: '0.9375rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={16} color="#C59A58" />
                    <span>Thrissur Swaraj Round Environs</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={16} color="#C59A58" />
                    <span>Ayyanthole &amp; Civil Station Area</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={16} color="#C59A58" />
                    <span>Ollur &amp; Kuriachira</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={16} color="#C59A58" />
                    <span>Mannuthy &amp; Adat Residential Belts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Global NRI Bridge Banner */}
          <div 
            style={{
              padding: '48px',
              borderRadius: '24px',
              backgroundColor: '#1E281D',
              color: '#FAF8F5',
            }}
          >
            <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#C59A58',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                }}
              >
                <Globe size={16} />
                <span>NRI Family Bridge</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', marginBottom: '16px', color: '#FAF8F5' }}>
                Connecting Across Time Zones
              </h3>
              <p style={{ color: '#B6C2B3', fontSize: '1.0625rem', lineHeight: 1.8, marginBottom: '32px' }}>
                Whether you are checking in from the UAE (+0.5h difference), the UK (-5.5h difference), or the United States, our care coordination team synchronizes visits to suit your family&apos;s peace of mind.
              </p>

              <button 
                onClick={() => setModalOpen(true)}
                className="btn-primary"
                style={{ padding: '16px 32px', fontSize: '1rem' }}
              >
                <MessageCircle size={18} />
                <span>Coordinate a Visit for Your Parents</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
