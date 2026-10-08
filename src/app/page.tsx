'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Heart, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  Camera, 
  ArrowRight, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import ConsultationModal from '@/components/ConsultationModal';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* HERO SECTION */}
      <section 
        style={{
          position: 'relative',
          paddingTop: '60px',
          paddingBottom: '80px',
          backgroundColor: '#FAF8F5',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(52, 68, 47, 0.08)',
        }}
      >
        <div className="container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            {/* Left Content Column */}
            <motion.div 
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Regional Hub Eyebrow */}
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(52, 68, 47, 0.08)',
                  color: '#34442F',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                }}
              >
                <MapPin size={14} color="#C59A58" />
                <span>Palakkad &middot; Thrissur &middot; Kerala</span>
              </div>

              {/* Main Headline */}
              <h1 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.4rem, 4.2vw, 3.8rem)',
                  fontWeight: 600,
                  color: '#1E281D',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  marginBottom: '16px',
                }}
              >
                Presence over distance. Bringing warmth to everyday moments.
              </h1>

              {/* Malayalam Motto */}
              <p 
                style={{
                  fontFamily: 'var(--font-malayalam)',
                  fontSize: '1.0625rem',
                  color: '#8A5F45',
                  lineHeight: 1.6,
                  marginBottom: '20px',
                  fontWeight: 500,
                }}
              >
                &ldquo;മക്കൾ ദൂരെയാണെങ്കിലും നാട്ടിലെ പ്രായമായ മാതാപിതാക്കൾ ഒറ്റയ്ക്കാകരുത്!&rdquo;
              </p>

              {/* High-Legibility Editorial Subtitle */}
              <p 
                style={{
                  fontSize: '1.125rem',
                  color: '#4A5647',
                  lineHeight: 1.8,
                  marginBottom: '32px',
                  maxWidth: '540px',
                }}
              >
                Arikil connects elderly parents in Kerala with thoughtful, vetted companions for tea, conversation, veranda walks, and genuine friendship — keeping families abroad reassured through regular photo updates.
              </p>

              {/* CTAs */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '16px',
                  marginBottom: '36px',
                }}
              >
                <button 
                  onClick={() => setModalOpen(true)}
                  className="btn-primary"
                  style={{ fontSize: '1rem', padding: '16px 28px' }}
                >
                  <MessageCircle size={18} />
                  <span>Arrange a Conversation</span>
                </button>

                <Link 
                  href="/about" 
                  className="btn btn-outline"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '15px 26px',
                    borderRadius: '8px',
                    border: '1px solid rgba(52, 68, 47, 0.25)',
                    color: '#1E281D',
                    fontWeight: 600,
                    fontSize: '0.9375rem',
                    backgroundColor: '#FFFFFF',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span>Our Philosophy</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Trust Signals */}
              <div 
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '24px',
                  borderTop: '1px solid rgba(52, 68, 47, 0.1)',
                  paddingTop: '20px',
                  color: '#4A5647',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={18} color="#C59A58" />
                  <span>Direct Founder Oversight</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Heart size={18} color="#C59A58" />
                  <span>Gentle, Attentive Companions</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Camera size={18} color="#C59A58" />
                  <span>Daily WhatsApp Updates</span>
                </div>
              </div>
            </motion.div>

            {/* Right Hero Image (Clean, No Card Blocking Face!) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
              }}
            >
              <div 
                style={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 24px 50px -12px rgba(28, 38, 26, 0.22)',
                  border: '1px solid rgba(197, 154, 88, 0.3)',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <img 
                  src="/assets/couple_joy.jpg" 
                  alt="Senior Kerala Couple Laughing Together - Arikil Companionship"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '520px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />

                {/* Subtle Clean Caption Bar - Placed Below Image Content with High Legibility */}
                <div 
                  style={{
                    padding: '16px 20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderTop: '1px solid rgba(52, 68, 47, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '10px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div 
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: '#25D366',
                      }}
                    />
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1E281D' }}>
                      Companionship visits in Palakkad &amp; Thrissur
                    </span>
                  </div>
                  <span style={{ fontSize: '0.8125rem', color: '#8A5F45', fontWeight: 500 }}>
                    Warmth &middot; Dignity &middot; Peace of Mind
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE QUIET REALITY & FOUNDER'S CALLING */}
      <section 
        style={{
          padding: '80px 0',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid rgba(52, 68, 47, 0.06)',
        }}
      >
        <div className="container">
          <div 
            style={{
              maxWidth: '840px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeInUp}
            >
              <span className="section-eyebrow">The Heart of Arikil</span>
              <h2 className="section-title">
                &ldquo;They gave us everything. Now they deserve someone to <em>sit beside them</em>.&rdquo;
              </h2>
              <p 
                style={{
                  fontSize: '1.1875rem',
                  color: '#4A5647',
                  lineHeight: 1.85,
                  marginBottom: '28px',
                }}
              >
                In Kerala homes, life often grows quiet once adult children travel to the Gulf, Europe, or other metro cities for their careers. Parents take pride in their children&apos;s achievements, yet afternoons can feel long, newspapers are read alone, and simple thoughts go unshared.
              </p>
              <p 
                style={{
                  fontSize: '1.0625rem',
                  color: '#1E281D',
                  lineHeight: 1.8,
                  fontWeight: 500,
                  maxWidth: '720px',
                  margin: '0 auto',
                  padding: '20px 24px',
                  borderRadius: '12px',
                  backgroundColor: '#FAF8F5',
                  border: '1px solid rgba(197, 154, 88, 0.25)',
                }}
              >
                Arikil was started in Palakkad by Niveda Babu with a single grounding intention: to provide gentle, respectful companionship so no elder feels alone in their own home.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EVERYDAY COMPANIONSHIP PILLARS (Clean, Unhurried 4 Moments) */}
      <section 
        style={{
          padding: '90px 0',
          backgroundColor: '#FAF8F5',
          borderBottom: '1px solid rgba(52, 68, 47, 0.08)',
        }}
      >
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Everyday Companionship</span>
            <h2 className="section-title">
              Thoughtful presence in the <em>familiar comfort</em> of home
            </h2>
            <p className="section-subtitle">
              We focus purely on human warmth, shared moments, and steady companionship.
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: '28px',
            }}
          >
            {/* Pillar 1 */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeInUp}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '18px',
                overflow: 'hidden',
                border: '1px solid rgba(52, 68, 47, 0.1)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img 
                  src="/assets/morning_tea.jpg" 
                  alt="Traditional Kerala Morning Tea - Arikil Companionship"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 
                  style={{ 
                    fontFamily: 'var(--font-serif)', 
                    fontSize: '1.45rem', 
                    color: '#1E281D', 
                    marginBottom: '10px' 
                  }}
                >
                  Tea &amp; Conversation
                </h3>
                <p style={{ color: '#4A5647', fontSize: '0.96875rem', lineHeight: 1.7, flex: 1 }}>
                  Sharing a warm cup of tea on the veranda, reminiscing about family memories, and listening attentively with genuine patience.
                </p>
              </div>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeInUp}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '18px',
                overflow: 'hidden',
                border: '1px solid rgba(52, 68, 47, 0.1)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img 
                  src="/assets/garden_walk.jpg" 
                  alt="Peaceful Courtyard Walking - Arikil Companionship"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 
                  style={{ 
                    fontFamily: 'var(--font-serif)', 
                    fontSize: '1.45rem', 
                    color: '#1E281D', 
                    marginBottom: '10px' 
                  }}
                >
                  Courtyard &amp; Garden Walks
                </h3>
                <p style={{ color: '#4A5647', fontSize: '0.96875rem', lineHeight: 1.7, flex: 1 }}>
                  Gentle, unhurried morning or evening strolls in the garden, breathing fresh air, and enjoying nature with reliable physical accompaniment.
                </p>
              </div>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeInUp}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '18px',
                overflow: 'hidden',
                border: '1px solid rgba(52, 68, 47, 0.1)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img 
                  src="/assets/achan_newspaper.jpg" 
                  alt="Reading Newspapers and Books - Arikil Companionship"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 
                  style={{ 
                    fontFamily: 'var(--font-serif)', 
                    fontSize: '1.45rem', 
                    color: '#1E281D', 
                    marginBottom: '10px' 
                  }}
                >
                  Reading &amp; Engagement
                </h3>
                <p style={{ color: '#4A5647', fontSize: '0.96875rem', lineHeight: 1.7, flex: 1 }}>
                  Reading favorite Malayalam newspapers, letters, devotional passages, or books together, keeping minds sharp and engaged.
                </p>
              </div>
            </motion.div>

            {/* Pillar 4 */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeInUp}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '18px',
                overflow: 'hidden',
                border: '1px solid rgba(52, 68, 47, 0.1)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img 
                  src="/assets/digital_connection.jpg" 
                  alt="Daily WhatsApp Updates for NRI Families - Arikil Companionship"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 
                  style={{ 
                    fontFamily: 'var(--font-serif)', 
                    fontSize: '1.45rem', 
                    color: '#1E281D', 
                    marginBottom: '10px' 
                  }}
                >
                  Family Photo Updates
                </h3>
                <p style={{ color: '#4A5647', fontSize: '0.96875rem', lineHeight: 1.7, flex: 1 }}>
                  A heartfelt WhatsApp photo and short update sent directly to children abroad after each visit, so you see your parents smile with confidence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW WE BEGIN (3 SIMPLE STEPS) */}
      <section 
        style={{
          padding: '80px 0',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid rgba(52, 68, 47, 0.06)',
        }}
      >
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">How We Begin</span>
            <h2 className="section-title">
              Simple, unhurried, and <em>grounded in trust</em>
            </h2>
            <p className="section-subtitle">
              We understand introducing someone into your parents&apos; home requires complete comfort.
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px',
            }}
          >
            {[
              {
                step: '01',
                title: 'A Gentle Conversation',
                desc: 'You message or call us on WhatsApp (+91 95655 33735). We discuss your parents\' routine, likes, language preferences, and district hub.',
              },
              {
                step: '02',
                title: 'A Warm Introduction Visit',
                desc: 'A companion visits at an agreed time. No rushed agendas — just tea, respectful listening, and natural comfort to ensure a wonderful rapport.',
              },
              {
                step: '03',
                title: 'Regular Visits & Peace of Mind',
                desc: 'Visits happen on an agreed schedule (weekly or customized). You receive honest photo updates and know your loved ones are cared for.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeInUp}
                style={{
                  padding: '32px',
                  borderRadius: '16px',
                  backgroundColor: '#FAF8F5',
                  border: '1px solid rgba(52, 68, 47, 0.08)',
                }}
              >
                <div 
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#C59A58',
                    marginBottom: '12px',
                  }}
                >
                  {item.step}
                </div>
                <h3 
                  style={{
                    fontSize: '1.25rem',
                    color: '#1E281D',
                    marginBottom: '10px',
                    fontWeight: 600,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: '#4A5647', fontSize: '0.96875rem', lineHeight: 1.75 }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section 
        style={{
          padding: '80px 0',
          backgroundColor: '#1E281D',
          color: '#FAF8F5',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <span 
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.8125rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#C59A58',
                fontWeight: 600,
                display: 'block',
                marginBottom: '12px',
              }}
            >
              Direct Care Coordination
            </span>
            <h2 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                marginBottom: '16px',
                color: '#FAF8F5',
                lineHeight: 1.2,
              }}
            >
              Let us bring warmth to your parents in Kerala
            </h2>
            <p 
              style={{
                color: '#B6C2B3',
                fontSize: '1.125rem',
                lineHeight: 1.75,
                marginBottom: '32px',
              }}
            >
              Whether you live in Dubai, London, Singapore, or Bangalore, know that someone caring is right beside them in Palakkad and Thrissur.
            </p>

            <div 
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <a 
                href="https://wa.me/919565533735?text=Hello%20Arikil%20Team%2C%20I%20would%20like%20to%20learn%20more%20about%20companionship%20visits%20for%20my%20parents."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(37, 211, 102, 0.3)',
                }}
              >
                <MessageCircle size={20} />
                <span>Message on WhatsApp (+91 95655 33735)</span>
              </a>

              <button 
                onClick={() => setModalOpen(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: 'transparent',
                  color: '#FAF8F5',
                  padding: '16px 28px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  cursor: 'pointer',
                }}
              >
                <span>Arrange Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Modal Dialog */}
      <ConsultationModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </>
  );
}
