/**
 * ARIKIL ELDERCARE & COMPANIONSHIP
 * Interactive Frontend Engine
 * Zero emojis - Pure luxury interactions, widgets & live timers
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initStickyHeader();
  initMobileNavigation();
  initScrollReveals();
  initWorldClocks();
  initCareAssessmentWidget();
  initPackageCalculatorWidget();
  initCoverageCheckerWidget();
  initFaqAccordions();
  initConsultationModal();
  initConsultationForms();
});

/* ==========================================================================
   1. Scroll Progress, Parallax Hero & Sticky Header
   ========================================================================== */
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  const heroCanvas = document.getElementById('hero-parallax-canvas');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollY / (totalHeight || 1)) * 100;
    
    if (progressBar) {
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }
  }, { passive: true });
}

function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   2. Mobile Drawer Navigation
   ========================================================================== */
function initMobileNavigation() {
  const openBtn = document.querySelector('.mobile-menu-btn');
  const closeBtn = document.querySelector('.drawer-close-btn');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const overlay = document.querySelector('.mobile-overlay');

  if (!openBtn || !drawer || !overlay) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  openBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
}

/* ==========================================================================
   3. Scroll Reveal Animations (IntersectionObserver)
   ========================================================================== */
function initScrollReveals() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* ==========================================================================
   4. Global NRI World Clocks (Real-Time Synchronizer)
   ========================================================================== */
function initWorldClocks() {
  const istClock = document.getElementById('clock-ist');
  const gstClock = document.getElementById('clock-gst');
  const gmtClock = document.getElementById('clock-gmt');
  const edtClock = document.getElementById('clock-edt');

  if (!istClock && !gstClock && !gmtClock && !edtClock) return;

  function updateClocks() {
    const now = new Date();

    const formatTime = (timeZone) => {
      return new Intl.DateTimeFormat('en-US', {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }).format(now);
    };

    if (istClock) istClock.textContent = formatTime('Asia/Kolkata');
    if (gstClock) gstClock.textContent = formatTime('Asia/Dubai');
    if (gmtClock) gmtClock.textContent = formatTime('Europe/London');
    if (edtClock) edtClock.textContent = formatTime('America/New_York');
  }

  updateClocks();
  setInterval(updateClocks, 1000);
}

/* ==========================================================================
   5. Interactive Care Fit Assessment Widget (Diagnostic Tool)
   ========================================================================== */
function initCareAssessmentWidget() {
  const container = document.getElementById('care-assessment-widget');
  if (!container) return;

  const steps = container.querySelectorAll('.quiz-step');
  const bullets = container.querySelectorAll('.step-bullet');
  const nextBtn = container.getElementById ? container.getElementById('quiz-next-btn') : document.getElementById('quiz-next-btn');
  const prevBtn = document.getElementById('quiz-prev-btn');
  const restartBtn = document.getElementById('quiz-restart-btn');
  const resultPanel = document.getElementById('assessment-result-panel');
  const quizFormArea = document.getElementById('quiz-questions-area');

  let currentStep = 0;
  const userAnswers = {
    living: null,
    mobility: null,
    primaryNeed: null,
    location: null
  };

  // Option selection
  container.querySelectorAll('.quiz-choice-card').forEach(card => {
    card.addEventListener('click', () => {
      const parentStep = card.closest('.quiz-step');
      parentStep.querySelectorAll('.quiz-choice-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');

      const field = card.dataset.field;
      const value = card.dataset.value;
      if (field) userAnswers[field] = value;

      if (nextBtn) nextBtn.removeAttribute('disabled');
    });
  });

  function updateStepUI() {
    steps.forEach((step, idx) => {
      step.style.display = idx === currentStep ? 'block' : 'none';
    });

    bullets.forEach((b, idx) => {
      b.classList.remove('active', 'completed');
      if (idx === currentStep) b.classList.add('active');
      if (idx < currentStep) b.classList.add('completed');
    });

    if (prevBtn) {
      prevBtn.style.visibility = currentStep === 0 ? 'hidden' : 'visible';
    }

    if (nextBtn) {
      if (currentStep === steps.length - 1) {
        nextBtn.textContent = 'View Recommended Care Schedule';
      } else {
        nextBtn.textContent = 'Next Step';
      }
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        updateStepUI();
      } else {
        showResults();
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentStep > 0) {
        currentStep--;
        updateStepUI();
      }
    });
  }

  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      currentStep = 0;
      if (quizFormArea) quizFormArea.style.display = 'block';
      if (resultPanel) resultPanel.style.display = 'none';
      container.querySelectorAll('.quiz-choice-card').forEach(c => c.classList.remove('selected'));
      updateStepUI();
    });
  }

  function showResults() {
    if (quizFormArea) quizFormArea.style.display = 'none';
    if (resultPanel) {
      resultPanel.style.display = 'block';

      const planNameEl = document.getElementById('recommended-plan-name');
      const planDescEl = document.getElementById('recommended-plan-desc');
      const planHoursEl = document.getElementById('recommended-plan-hours');

      let planName = 'Harmonious Companion Plan';
      let planDesc = 'Recommended for independent seniors in Kerala who crave lively conversation, accompanied evening walks, and digital calls with children abroad.';
      let planHours = '3 visits per week (2 hours per session)';

      if (userAnswers.primaryNeed === 'errands' || userAnswers.mobility === 'assisted') {
        planName = 'Comprehensive Support & Escort Plan';
        planDesc = 'Ideal for active medical checkup accompaniment in Amala/Jubilee/District Hospital, banking assistance, temple visits, and steady walking companionship.';
        planHours = '4 to 5 visits per week (3 hours per session)';
      } else if (userAnswers.living === 'couple' && userAnswers.primaryNeed === 'tech') {
        planName = 'Digital Bridge & Social Vitality Plan';
        planDesc = 'Focused on connecting elders with distant NRI family via video calls, reading assistance, light physical strolls, and community engagement.';
        planHours = '2 to 3 visits per week';
      }

      if (planNameEl) planNameEl.textContent = planName;
      if (planDescEl) planDescEl.textContent = planDesc;
      if (planHoursEl) planHoursEl.textContent = planHours;
    }
  }

  updateStepUI();
}

/* ==========================================================================
   6. Custom Package Builder Calculator Widget
   ========================================================================== */
function initPackageCalculatorWidget() {
  const slider = document.getElementById('calc-hours-slider');
  const sliderDisplay = document.getElementById('calc-hours-display');
  const checkboxes = document.querySelectorAll('.calc-addon-check');
  const estTotalDisplay = document.getElementById('calc-estimated-total');
  const hoursSubtotalDisplay = document.getElementById('calc-hours-subtotal');
  const addonsSubtotalDisplay = document.getElementById('calc-addons-subtotal');

  if (!slider || !estTotalDisplay) return;

  const BASE_RATE_PER_HOUR = 350; // INR baseline for dedicated background-verified companion

  function recalculate() {
    const hours = parseInt(slider.value, 10);
    if (sliderDisplay) sliderDisplay.textContent = `${hours} hrs / week`;

    let hoursCost = hours * BASE_RATE_PER_HOUR * 4; // Monthly calculation (4 weeks)
    let addonsCost = 0;

    checkboxes.forEach(cb => {
      if (cb.checked) {
        addonsCost += parseInt(cb.dataset.cost || '0', 10);
      }
    });

    const totalCost = hoursCost + addonsCost;

    if (hoursSubtotalDisplay) hoursSubtotalDisplay.textContent = `₹${hoursCost.toLocaleString('en-IN')}`;
    if (addonsSubtotalDisplay) addonsSubtotalDisplay.textContent = `₹${addonsCost.toLocaleString('en-IN')}`;
    if (estTotalDisplay) estTotalDisplay.textContent = `₹${totalCost.toLocaleString('en-IN')}`;
  }

  slider.addEventListener('input', recalculate);
  checkboxes.forEach(cb => cb.addEventListener('change', recalculate));
  recalculate();
}

/* ==========================================================================
   7. District & Pincode Coverage Checker Widget
   ========================================================================== */
function initCoverageCheckerWidget() {
  const input = document.getElementById('coverage-location-input');
  const searchBtn = document.getElementById('coverage-check-btn');
  const resultCard = document.getElementById('coverage-result-card');
  const badgeEl = document.getElementById('coverage-status-badge');
  const titleEl = document.getElementById('coverage-status-title');
  const descEl = document.getElementById('coverage-status-desc');
  const chipBtns = document.querySelectorAll('.location-chip-btn');

  if (!input || !searchBtn || !resultCard) return;

  const ACTIVE_AREAS = [
    'palakkad', 'palakkad town', 'chandranagar', 'olavakkode', 'kalpathy', 'pirayiri',
    'kallekkad', 'marutharode', 'kodunthirapully', 'alathur', 'chittur', 'ottapalam',
    'pattambi', 'thrissur', 'thrissur town', 'swaraj round', 'ollur', 'cherpu',
    'irinjalakuda', 'guruvayur', 'amalanagar', 'wadakkanchery', 'mannuthy', 'ayyanthole',
    '678001', '678002', '678003', '678004', '678006', '678014', '680001', '680002',
    '680003', '680004', '680005', '680555', '680121'
  ];

  function checkLocation(query) {
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery) return;

    resultCard.style.display = 'block';

    const isMatch = ACTIVE_AREAS.some(area => cleanQuery.includes(area) || area.includes(cleanQuery));

    if (isMatch) {
      resultCard.className = 'checker-response-card active-hub';
      if (badgeEl) {
        badgeEl.textContent = 'Active Service Hub Available';
        badgeEl.style.color = '#2A5C2B';
      }
      if (titleEl) titleEl.textContent = `Full Coverage in "${query.trim()}"`;
      if (descEl) descEl.textContent = 'Dedicated, background-verified Arikil companions are active in your locality. We can arrange an initial home introduction within 24 to 48 hours.';
    } else {
      resultCard.className = 'checker-response-card expanding-zone';
      if (badgeEl) {
        badgeEl.textContent = 'Expansion Zone / Custom Escort';
        badgeEl.style.color = '#8A5F45';
      }
      if (titleEl) titleEl.textContent = `Custom Accompaniment Available for "${query.trim()}"`;
      if (descEl) descEl.textContent = 'While outside our immediate 5km city radius, we routinely support elder appointments, temple trips, and weekly visits across central Kerala via private escort transit. Please contact our care desk.';
    }
  }

  searchBtn.addEventListener('click', () => checkLocation(input.value));
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkLocation(input.value);
  });

  chipBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const loc = btn.dataset.loc || btn.textContent.trim();
      input.value = loc;
      checkLocation(loc);
    });
  });
}

/* ==========================================================================
   8. Interactive FAQ Accordion
   ========================================================================== */
function initFaqAccordions() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close other accordions in the same group
      faqItems.forEach(i => i.classList.remove('active'));

      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   9. Consultation Modal & Global Triggers
   ========================================================================== */
function initConsultationModal() {
  const modal = document.getElementById('consultation-modal');
  if (!modal) return;

  const openTriggers = document.querySelectorAll('.open-consultation-modal');
  const closeBtn = modal.querySelector('.modal-close-trigger');

  const openModal = () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  openTriggers.forEach(t => t.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  }));

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   10. Form Submissions & Toast Notices
   ========================================================================== */
function initConsultationForms() {
  const forms = document.querySelectorAll('form[data-ajax-form]');
  const toast = document.getElementById('toast-notice');
  const toastMsg = document.getElementById('toast-message');

  function showToast(message, duration = 4000) {
    if (!toast) return;
    if (toastMsg) toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  }

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.textContent : '';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting Request...';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }

        form.reset();

        // Close modal if form was inside it
        const modal = form.closest('.modal-dialog-overlay');
        if (modal) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }

        showToast('Your request has been received. An Arikil Care Coordinator will contact you within 4 hours.');
      }, 1000);
    });
  });
}
