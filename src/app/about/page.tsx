'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import ConsultationModal from '@/components/ConsultationModal';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

export default function AboutPage() {
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
            <span className="section-eyebrow">Our Story &amp; Ethos</span>
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
              Born in Palakkad, Built with <em>Heartfelt Purpose</em>
            </h1>
            <p 
              style={{
                fontSize: '1.125rem',
                color: '#4A5647',
                lineHeight: 1.8,
              }}
            >
              The name <strong>അരികിൽ (Arikil)</strong> translates to &ldquo;Beside&rdquo; or &ldquo;Close By&rdquo;. It represents our promise: whenever families are physically far, a caring companion is standing right beside their parents.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Narrative */}
      <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(52, 68, 47, 0.1)', boxShadow: '0 16px 40px rgba(0,0,0,0.06)' }}>
              <img 
                src="/assets/amma_laughing.jpg" 
                alt="Kerala Mother Laughing with Companion - Arikil" 
                style={{ width: '100%', height: '460px', objectFit: 'cover' }}
              />
            </div>

            <div>
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(197, 154, 88, 0.15)',
                  color: '#8A5F45',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  marginBottom: '16px',
                }}
              >
                <Heart size={14} color="#C59A58" />
                <span>Founded by Niveda Babu</span>
              </div>

              <h2 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.4rem',
                  color: '#1E281D',
                  lineHeight: 1.25,
                  marginBottom: '20px',
                }}
              >
                Why Arikil was Started
              </h2>

              <p style={{ color: '#4A5647', fontSize: '1.0625rem', lineHeight: 1.85, marginBottom: '16px' }}>
                Growing up in Palakkad, Kerala, Niveda Babu observed a quiet reality touching nearly every home in her neighborhood. Sons and daughters were traveling abroad to Dubai, Europe, Singapore, and Canada to provide for their families.
              </p>

              <p style={{ color: '#4A5647', fontSize: '1.0625rem', lineHeight: 1.85, marginBottom: '20px' }}>
                While money and medical insurance can be sent home in seconds, <strong>human presence cannot be wired across borders</strong>. Loneliness in older age is rarely about physical helplessness — it is about having someone to share tea with, talk about the day, or laugh at a familiar joke.
              </p>

              <div 
                style={{
                  padding: '20px',
                  borderRadius: '12px',
                  backgroundColor: '#FAF8F5',
                  borderLeft: '4px solid #C59A58',
                  marginBottom: '28px',
                }}
              >
                <p 
                  style={{ 
                    fontFamily: 'var(--font-malayalam)', 
                    color: '#1E281D', 
                    fontSize: '1.0625rem', 
                    margin: 0, 
                    lineHeight: 1.7 
                  }}
                >
                  &ldquo;നമ്മുടെ മാതാപിതാക്കൾക്ക് വേണ്ടത് സഹതാപമല്ല, മറിച്ച് കേൾക്കാൻ ഒരാളും കൂടെയിരിക്കാൻ ഒരു മനസ്സുമാണ്.&rdquo;
                </p>
                <span style={{ fontSize: '0.875rem', color: '#8A5F45', marginTop: '6px', display: 'block' }}>
                  — Our parents do not seek pity; they simply desire someone who listens and sits beside them.
                </span>
              </div>

              <button 
                onClick={() => setModalOpen(true)}
                className="btn-primary"
              >
                <MessageCircle size={18} />
                <span>Speak with Our Team</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ padding: '80px 0', backgroundColor: '#FAF8F5', borderTop: '1px solid rgba(52, 68, 47, 0.08)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Guiding Values</span>
            <h2 className="section-title">
              What We Stand For
            </h2>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px',
            }}
          >
            {[
              {
                title: 'Dignity Above All',
                desc: 'We never treat elderly parents as dependents. We treat them as respected elders with stories, wisdom, and life choices that deserve honour.',
              },
              {
                title: 'Unhurried Presence',
                desc: 'Companionship cannot be rushed by a stopwatch. We believe in sitting down, drinking tea, and taking time to build real friendship.',
              },
              {
                title: 'Transparent Connection',
                desc: 'We keep children abroad directly informed after every visit with candid photos and updates so families remain deeply connected.',
              },
            ].map((val, idx) => (
              <div 
                key={idx}
                style={{
                  padding: '32px',
                  borderRadius: '16px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(52, 68, 47, 0.08)',
                }}
              >
                <div 
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(52, 68, 47, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#34442F',
                    marginBottom: '16px',
                  }}
                >
                  <ShieldCheck size={22} color="#C59A58" />
                </div>
                <h3 style={{ fontSize: '1.3rem', color: '#1E281D', marginBottom: '10px', fontFamily: 'var(--font-serif)' }}>
                  {val.title}
                </h3>
                <p style={{ color: '#4A5647', fontSize: '0.96875rem', lineHeight: 1.75 }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
