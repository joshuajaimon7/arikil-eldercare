'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="harvest-footer">
      <div className="container-wide">
        <div className="harvest-footer-grid">
          
          {/* Head Office / Direct Line */}
          <div>
            <h4 className="harvest-footer-heading">Care Hub Office</h4>
            <p className="harvest-footer-text" style={{ marginBottom: '16px' }}>
              Palakkad &amp; Thrissur Districts<br />
              Central Kerala, India
            </p>
            <p className="harvest-footer-text">
              <strong>P</strong> &nbsp;<a href="https://wa.me/919565533735" target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF' }}>+91 95655 33735</a><br />
              <strong>E</strong> &nbsp;<a href="mailto:hello@arikilcompanionship.com" style={{ color: '#FFFFFF' }}>hello@arikilcompanionship.com</a>
            </p>
          </div>

          {/* About Us */}
          <div>
            <h4 className="harvest-footer-heading">About Us</h4>
            <ul className="harvest-footer-links">
              <li><Link href="/about" className="harvest-footer-link">Founder&apos;s Mission</Link></li>
              <li><Link href="/about" className="harvest-footer-link">Our Philosophy</Link></li>
              <li><Link href="/locations" className="harvest-footer-link">Kerala Districts</Link></li>
              <li><Link href="/contact" className="harvest-footer-link">Contact Desk</Link></li>
            </ul>
          </div>

          {/* Our Care */}
          <div>
            <h4 className="harvest-footer-heading">Our Care</h4>
            <ul className="harvest-footer-links">
              <li><Link href="/services" className="harvest-footer-link">Companionship &amp; Care</Link></li>
              <li><Link href="/services" className="harvest-footer-link">Courtyard Walks &amp; Activity</Link></li>
              <li><Link href="/services" className="harvest-footer-link">Temple &amp; Leisure Trips</Link></li>
              <li><Link href="/services" className="harvest-footer-link">Tech &amp; Video Calls</Link></li>
              <li><Link href="/services" className="harvest-footer-link">Social &amp; Recreation</Link></li>
              <li><Link href="/services" className="harvest-footer-link">Hospital &amp; Bank Escort</Link></li>
            </ul>
          </div>

          {/* Coverage Hubs */}
          <div>
            <h4 className="harvest-footer-heading">Coverage Hubs</h4>
            <ul className="harvest-footer-links">
              <li><Link href="/locations" className="harvest-footer-link">Palakkad District</Link></li>
              <li><Link href="/locations" className="harvest-footer-link">Thrissur District</Link></li>
              <li><Link href="/locations" className="harvest-footer-link">Global NRI Bridge</Link></li>
            </ul>
          </div>

          {/* Direct WhatsApp */}
          <div>
            <h4 className="harvest-footer-heading">Inquiries</h4>
            <p className="harvest-footer-text" style={{ marginBottom: '20px' }}>
              Direct care coordination with founder Niveda Babu for families abroad.
            </p>
            <a 
              href="https://wa.me/919565533735" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-harvest-outline"
              style={{ fontSize: '0.8125rem', padding: '8px 16px' }}
            >
              <span>Message on WhatsApp</span>
              <span>&rarr;</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="harvest-footer-bottom">
          <div style={{ display: 'flex', gap: '24px' }}>
            <span>Privacy Policy</span>
            <span>Terms of Care</span>
            <span>NRI Client Charter</span>
          </div>
          <div className="font-malayalam">
            &copy; 2026 Arikil Eldercare (അരികിൽ) &bull; പാലക്കാട് &bull; തൃശ്ശൂർ, Kerala.
          </div>
        </div>
      </div>
    </footer>
  );
}
