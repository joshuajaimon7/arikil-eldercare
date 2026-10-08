'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ConsultationModal from '@/components/ConsultationModal';

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Header Statement with Malayalam & English Typography */}
      <section style={{ paddingTop: '160px', paddingBottom: '90px', backgroundColor: 'var(--bg-base)', borderBottom: '1px solid var(--border)' }}>
        <div className="container-wide">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '920px' }}
          >
            <span style={{ fontSize: '0.8125rem', color: 'var(--gold)', letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>
              Palakkad &bull; Thrissur &bull; Central Kerala
            </span>
            <div style={{ marginBottom: '24px' }}>
              <h1 className="font-malayalam" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.25, marginBottom: '12px' }}>
                Arikil നൽകുന്ന സേവനങ്ങൾ
              </h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--gold)', fontWeight: 300, letterSpacing: '0.04em' }}>
                Bespoke Elder Companionship &bull; Personal Assistance
              </p>
            </div>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.85 }}>
              നിലവിൽ പാലക്കാടും തൃശ്ശൂരും പ്രവർത്തിക്കുന്ന Arikil, മുതിർന്നവരോടൊപ്പം സമയം ചെലവഴിക്കാനും അവരെ ആത്മാർത്ഥമായി സപ്പോർട്ട് ചെയ്യാനും കൂടെയുണ്ട്. Below are our dedicated core services tailored around your parents&apos; daily lifestyle and peace of mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The 6 Official Services from Arikil Poster */}
      <section style={{ padding: '120px 0', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container-wide">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '110px' }}>
            
            {/* Service 01: ഒറ്റപ്പെടൽ ഒഴിവാക്കാൻ കമ്പനി */}
            <div className="harvest-asymmetric-grid">
              <div className="harvest-photo-card">
                <img src="/assets/morning_tea.jpg" alt="Kerala Elder Companionship Tea" />
                <p className="harvest-photo-caption">സേവനം 01 &bull; Companionship</p>
              </div>
              <div>
                <span style={{ fontSize: '0.8125rem', color: 'var(--gold)', letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
                  01 / Emotional Warmth
                </span>
                <h2 className="font-malayalam" style={{ fontSize: 'clamp(1.75rem, 2.6vw, 2.2rem)', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '8px', lineHeight: 1.35 }}>
                  പ്രായമായവർക്ക് ഒറ്റപ്പെടൽ ഒഴിവാക്കാൻ ഒരു കമ്പനി നൽകുക
                </h2>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--gold)', fontWeight: 400, marginBottom: '20px', letterSpacing: '0.02em' }}>
                  Veranda Tea, Deep Listening &amp; Dignified Presence
                </h3>
                <p style={{ fontSize: '1.0625rem', color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '24px' }}>
                  A warm cup of tea on the poomukham veranda, genuine listening without screens, and someone who respects their lifetime of memories. We ease the quietness of ancestral homes through gentle, unhurried companionship.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '14px', color: 'rgba(240, 237, 230, 0.85)', fontSize: '0.9375rem' }}>
                  <li style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                    <span style={{ color: 'var(--gold)' }}>&bull;</span>
                    <span>Patient, unhurried listening without stopwatches or rush</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                    <span style={{ color: 'var(--gold)' }}>&bull;</span>
                    <span>Fluent conversation in Malayalam with complete cultural respect</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                    <span style={{ color: 'var(--gold)' }}>&bull;</span>
                    <span>Sharing pleasant memories, uplifting conversations, and daily optimism</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 02: IDLE ആക്കാതെ ആക്ടിവിറ്റി & നടത്തം */}
            <div className="harvest-asymmetric-grid harvest-asymmetric-grid-reverse">
              <div className="harvest-photo-card">
                <img src="/assets/garden_walk.jpg" alt="Courtyard Walking and Gentle Activity" />
                <p className="harvest-photo-caption">സേവനം 02 &bull; Active Routine</p>
              </div>
              <div>
                <span style={{ fontSize: '0.8125rem', color: 'var(--gold)', letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
                  02 / Mobility &amp; Movement
                </span>
                <h2 className="font-malayalam" style={{ fontSize: 'clamp(1.75rem, 2.6vw, 2.2rem)', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '8px', lineHeight: 1.35 }}>
                  IDLE ആക്കി ഇരുത്താതെ ആക്ടിവിറ്റി ചെയ്യിക്കുക.. അവരോടൊപ്പം നടക്കുക
                </h2>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--gold)', fontWeight: 400, marginBottom: '20px', letterSpacing: '0.02em' }}>
                  Courtyard Walks, Gentle Movement &amp; Avoiding Idleness
                </h3>
                <p style={{ fontSize: '1.0625rem', color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '24px' }}>
                  Keeping elders active and cheerfully engaged throughout the day. A reassuring arm to lean on during morning walks around the courtyard, home garden, or quiet residential lane to build balance and vitality safely.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '14px', color: 'rgba(240, 237, 230, 0.85)', fontSize: '0.9375rem' }}>
                  <li style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                    <span style={{ color: 'var(--gold)' }}>&bull;</span>
                    <span>Attentive physical presence and slip-prevention awareness at all times</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                    <span style={{ color: 'var(--gold)' }}>&bull;</span>
                    <span>Enjoying fresh morning Kerala greenery and peaceful courtyard strolls</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                    <span style={{ color: 'var(--gold)' }}>&bull;</span>
                    <span>Light indoor activities and mobility suited entirely to their energy pace</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 03: അമ്പലത്തിൽ & Leisure Trips */}
            <div className="harvest-asymmetric-grid">
              <div className="harvest-photo-card">
                <img src="/assets/temple_heritage.jpg" alt="Kerala Temple and Leisure Outing" />
                <p className="harvest-photo-caption">സേവനം 03 &bull; Temple &amp; Outings</p>
              </div>
              <div>
                <span style={{ fontSize: '0.8125rem', color: 'var(--gold)', letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
                  03 / Spiritual &amp; Leisure
                </span>
                <h2 className="font-malayalam" style={{ fontSize: 'clamp(1.75rem, 2.6vw, 2.2rem)', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '8px', lineHeight: 1.35 }}>
                  അമ്പലത്തിൽ കൊണ്ട് പോവുക, Leisure trips നു കൊണ്ട് പോവുക
                </h2>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--gold)', fontWeight: 400, marginBottom: '20px', letterSpacing: '0.02em' }}>
                  Temple Darshans, Peaceful Outings &amp; Nature Visits
                </h3>
                <p style={{ fontSize: '1.0625rem', color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '24px' }}>
                  Elders often miss visiting their beloved local temples and scenic outings because going alone feels difficult. We coordinate safe, patient outings for darshans, serene temple ponds, and refreshing local leisure drives.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '14px', color: 'rgba(240, 237, 230, 0.85)', fontSize: '0.9375rem' }}>
                  <li style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                    <span style={{ color: 'var(--gold)' }}>&bull;</span>
                    <span>Careful accompaniment through temple entrances and steps without rush</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                    <span style={{ color: 'var(--gold)' }}>&bull;</span>
                    <span>Coordinated travel arrangements and dedicated companion support</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                    <span style={{ color: 'var(--gold)' }}>&bull;</span>
                    <span>Reconnecting elders with their spiritual peace and favorite outdoor spots</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 04: ടെക്നോളജി ഉപയോഗിക്കാൻ സഹായിക്കുക */}
            <div className="harvest-asymmetric-grid harvest-asymmetric-grid-reverse">
              <div className="harvest-photo-card">
                <img src="/assets/elderly_videocall_connection.jpg" alt="Elder Learning Smartphone Video Call" />
                <p className="harvest-photo-caption">സേവനം 04 &bull; Tech Support</p>
              </div>
              <div>
                <span style={{ fontSize: '0.8125rem', color: 'var(--gold)', letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
                  04 / Digital Assistance
                </span>
                <h2 className="font-malayalam" style={{ fontSize: 'clamp(1.75rem, 2.6vw, 2.2rem)', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '8px', lineHeight: 1.35 }}>
                  ടെക്നോളജി ഉപയോഗിക്കാൻ സഹായിക്കുക
                </h2>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--gold)', fontWeight: 400, marginBottom: '20px', letterSpacing: '0.02em' }}>
                  Smartphone Guidance &amp; International Video Calls
                </h3>
                <p style={{ fontSize: '1.0625rem', color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '24px' }}>
                  Technology shouldn&apos;t feel overwhelming or stressful for our parents. We patiently assist elders with smartphones and tablets—connecting video calls with grandchildren abroad, viewing family photos, or tuning into devotional programs online.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '14px', color: 'rgba(240, 237, 230, 0.85)', fontSize: '0.9375rem' }}>
                  <li style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                    <span style={{ color: 'var(--gold)' }}>&bull;</span>
                    <span>Setting up crystal-clear WhatsApp video calls with children overseas</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                    <span style={{ color: 'var(--gold)' }}>&bull;</span>
                    <span>Helping them send voice notes, listen to music, and watch news effortlessly</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                    <span style={{ color: 'var(--gold)' }}>&bull;</span>
                    <span>Patient, stress-free guidance that empowers their independence</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 05: വിനോദങ്ങളിലും സാമൂഹിക പ്രവർത്തനങ്ങളിലും പങ്കുചേരുക */}
            <div className="harvest-asymmetric-grid">
              <div className="harvest-photo-card">
                <img src="/assets/achan_newspaper.jpg" alt="Reading Newspaper and Recreation" />
                <p className="harvest-photo-caption">സേവനം 05 &bull; Recreation</p>
              </div>
              <div>
                <span style={{ fontSize: '0.8125rem', color: 'var(--gold)', letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
                  05 / Social Life
                </span>
                <h2 className="font-malayalam" style={{ fontSize: 'clamp(1.75rem, 2.6vw, 2.2rem)', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '8px', lineHeight: 1.35 }}>
                  വിനോദങ്ങളിലും സാമൂഹിക പ്രവർത്തനങ്ങളിലും പങ്കുചേരുക
                </h2>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--gold)', fontWeight: 400, marginBottom: '20px', letterSpacing: '0.02em' }}>
                  Newspaper Reading, Classic Music &amp; Social Participation
                </h3>
                <p style={{ fontSize: '1.0625rem', color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '24px' }}>
                  Engaging their mind with fulfilling pastimes. From reading the morning Malayalam newspaper aloud and discussing current events, to enjoying classic songs, nostalgia, and accompanying them to local cultural or family functions.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '14px', color: 'rgba(240, 237, 230, 0.85)', fontSize: '0.9375rem' }}>
                  <li style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                    <span style={{ color: 'var(--gold)' }}>&bull;</span>
                    <span>Reading morning dailies (Mathrubhumi / Manorama) and thoughtful discussions</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                    <span style={{ color: 'var(--gold)' }}>&bull;</span>
                    <span>Listening to classic old Malayalam melodies and nostalgic storytelling</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                    <span style={{ color: 'var(--gold)' }}>&bull;</span>
                    <span>Encouraging active involvement in neighborhood events and gatherings</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 06: ആശുപത്രി , ബാങ്ക് അപ്പോയിന്റ്മെന്റുകളിൽ അസിസ്റ്റ് ചെയ്യുക */}
            <div className="harvest-asymmetric-grid harvest-asymmetric-grid-reverse">
              <div className="harvest-photo-card">
                <img src="/assets/elderly_walking_couple.jpg" alt="Escort Assistance for Hospital and Bank Appointments" />
                <p className="harvest-photo-caption">സേവനം 06 &bull; Escort Assistance</p>
              </div>
              <div>
                <span style={{ fontSize: '0.8125rem', color: 'var(--gold)', letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
                  06 / Appointment Assistance
                </span>
                <h2 className="font-malayalam" style={{ fontSize: 'clamp(1.75rem, 2.6vw, 2.2rem)', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '8px', lineHeight: 1.35 }}>
                  ആശുപത്രി , ബാങ്ക് അപ്പോയിന്റ്മെന്റുകളിൽ അസിസ്റ്റ് ചെയ്യുക
                </h2>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--gold)', fontWeight: 400, marginBottom: '20px', letterSpacing: '0.02em' }}>
                  Hospital Escort, Bank Visits &amp; Errand Assistance
                </h3>
                <p style={{ fontSize: '1.0625rem', color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '24px' }}>
                  Navigating clinics and bank branches alone can be stressful. We accompany your parents for routine doctor visits, collecting medicines, pension formalities, and bank errands—holding their hand and keeping you updated.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '14px', color: 'rgba(240, 237, 230, 0.85)', fontSize: '0.9375rem' }}>
                  <li style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                    <span style={{ color: 'var(--gold)' }}>&bull;</span>
                    <span>Patient accompaniment in hospital lobbies, token counters, and pharmacy pickups</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                    <span style={{ color: 'var(--gold)' }}>&bull;</span>
                    <span>Assistance with bank branch queues, pension updates, and official errands</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                    <span style={{ color: 'var(--gold)' }}>&bull;</span>
                    <span>Immediate WhatsApp summary to children abroad as soon as the visit concludes</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Coverage District Notice */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-base)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container-wide">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px' }}>
            <div>
              <span className="font-malayalam" style={{ fontSize: '1.4rem', color: 'var(--gold)', display: 'block', marginBottom: '6px', fontWeight: 500 }}>
                പാലക്കാടും തൃശ്ശൂരും
              </span>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                Centrally operating across Palakkad &amp; Thrissur Districts with dedicated local companions.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <Link href="/locations" className="btn-harvest-outline">
                <span>View Coverage Areas</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '110px 0', backgroundColor: 'var(--bg-surface)', textAlign: 'center' }}>
        <div className="container-wide">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <span className="font-malayalam" style={{ fontSize: '2rem', color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>
              അരികിൽ കുടുംബ കൂട്ടായ്മയിലേക്ക്
            </span>
            <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 2.8rem)', fontWeight: 300, color: 'var(--text-primary)', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              Coordinate Care for Your Parents
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '36px', lineHeight: 1.7 }}>
              Connect directly with founder Niveda Babu on WhatsApp to plan an unhurried, respectful companionship schedule.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a 
                href="https://wa.me/919565533735" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-harvest-solid"
              >
                <span>Discuss via WhatsApp</span>
                <span>&rarr;</span>
              </a>
              <button 
                onClick={() => setModalOpen(true)}
                className="btn-harvest-outline"
              >
                <span>Schedule Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
