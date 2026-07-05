import { useEffect, useState } from 'react'
import logo from './assets/logo.jpg'
import './App.css'

const WHATSAPP_URL = 'https://wa.me/9779767473105?text=Hi%20Friendship%20Rental%20Service%2C%20I%27d%20like%20to%20ask%20about%20renting%20equipment%20for%20my%20event.'
const FACEBOOK_URL = 'https://www.facebook.com/friendshiprentalservice'

const CONTENT = {
  en: {
    brandSub: 'Rental Service',
    nav: [
      { href: '#services', label: 'Services' },
      { href: '#why-us', label: 'Why Us' },
      { href: '#gallery', label: 'Gallery' },
      { href: '#contact', label: 'Contact' },
    ],
    headerCta: 'WhatsApp Us',
    hero: {
      eyebrow: 'Tents · Seating · Decor · Kitchen Utensils',
      title: 'Everything Your Event Needs, Delivered With a Handshake',
      sub: 'Friendship Rental Service supplies tents, chairs, tables, decor, and clean large cooking utensils for weddings, receptions, and parties — set up on time, every time.',
      ctaPrimary: 'Chat on WhatsApp',
      ctaSecondary: 'See What We Offer',
    },
    services: {
      eyebrow: 'What We Offer',
      title: 'Rentals for Every Kind of Celebration',
      items: [
        { title: 'Tents & Canopies', desc: 'Weatherproof tents in a range of sizes to shelter any wedding, reception, or outdoor gathering.' },
        { title: 'Chairs & Tables', desc: 'Banquet chairs, round and rectangular tables with clean linens for every seating layout.' },
        { title: 'Decor & Lighting', desc: 'Stage backdrops, floral arrangements, and string lighting to set the mood for your event.' },
        { title: 'Sound & Stage Setup', desc: 'PA systems, stages, and platforms so speeches and performances come through clearly.' },
        { title: 'Kitchen & Cooking Utensils', desc: 'Large cooking pots, serving trays, and kitchen equipment, cleaned and ready for big-batch event cooking.' },
      ],
    },
    steps: {
      eyebrow: 'How It Works',
      title: 'Booking With Us Is Simple',
      items: [
        { n: '01', title: 'Tell Us Your Date', desc: 'Share your event date, guest count, and venue with our team.' },
        { n: '02', title: 'Pick Your Setup', desc: 'We put together the tents, seating, and decor package that fits your budget.' },
        { n: '03', title: 'We Deliver & Setup', desc: 'Our crew delivers, sets up, and clears everything so you can focus on the event.' },
      ],
    },
    whyUs: {
      eyebrow: 'Why Friendship Rental Service',
      title: 'Service That Feels Like a Friend Helping Out',
      sub: "Our name says it all — we treat every booking like we're helping a friend host their event, not just renting out equipment. With 20+ years in business, we've helped host hundreds of celebrations across the valley.",
      list: [
        'Well-maintained, clean equipment for every rental',
        'On-time delivery and pickup, every time',
        'Friendly, flexible service built on trust',
        'Fair, transparent pricing with no hidden fees',
      ],
      stats: [
        { value: '500+', label: 'Events Served' },
        { value: '20+', label: 'Years in Business' },
        { value: '100%', label: 'On-Time Setup' },
      ],
    },
    gallery: {
      eyebrow: 'Our Work',
      title: 'A Look at Recent Setups',
      items: ['Wedding Tent Setup', 'Reception Seating', 'Stage & Lighting', 'Outdoor Canopy', 'Table Arrangements', 'Event Decor'],
      note: 'Photos coming soon — check back later.',
    },
    contact: {
      eyebrow: 'Get In Touch',
      title: "Let's Plan Your Event",
      sub: "Reach out with your date and guest count, and we'll put together a quote within the day.",
      phoneLabel: 'Phone',
      basedInLabel: 'Based In',
      basedIn: 'Lalitpur, Nepal',
      servingLabel: 'Serving',
      serving: 'Lalitpur, Kathmandu & Bhaktapur',
      whatsappTitle: 'Chat on WhatsApp',
      whatsappSub: 'Fastest way to reach us — usually reply within minutes',
      facebookTitle: 'Follow Us on Facebook',
      facebookSub: 'See our latest setups and event photos',
    },
    footer: {
      tagline: 'Tents, seating, decor, and clean kitchen utensils for weddings, receptions, and parties across Lalitpur, Kathmandu & Bhaktapur.',
      linksTitle: 'Quick Links',
      contactTitle: 'Contact',
    },
    footerCopy: (year) => `© ${year} Friendship Rental Service. All rights reserved.`,
  },
  np: {
    brandSub: 'रेन्टल सर्भिस',
    nav: [
      { href: '#services', label: 'सेवाहरू' },
      { href: '#why-us', label: 'किन हामी' },
      { href: '#gallery', label: 'ग्यालेरी' },
      { href: '#contact', label: 'सम्पर्क' },
    ],
    headerCta: 'ह्वाट्सएप गर्नुहोस्',
    hero: {
      eyebrow: 'टेन्ट · बसाइ · सजावट · भान्साका सामान',
      title: 'तपाईंको कार्यक्रमको लागि चाहिने सबै चिज, हातेमालोसँगै',
      sub: 'फ्रेन्डशिप रेन्टल सर्भिसले विवाह, रिसेप्सन र पार्टीहरूको लागि टेन्ट, कुर्सी, टेबुल, सजावट, र सफा ठूला खाना पकाउने भाँडाकुँडा उपलब्ध गराउँछ — सधैं समयमै मिलाइदिन्छौं।',
      ctaPrimary: 'ह्वाट्सएपमा कुरा गर्नुहोस्',
      ctaSecondary: 'हाम्रा सेवाहरू हेर्नुहोस्',
    },
    services: {
      eyebrow: 'हामी के प्रदान गर्छौं',
      title: 'हरेक खालको उत्सवको लागि भाडा सेवा',
      items: [
        { title: 'टेन्ट तथा छाना', desc: 'कुनै पनि विवाह, रिसेप्सन वा बाहिरी कार्यक्रमलाई ढाक्न विभिन्न साइजका मौसम प्रतिरोधी टेन्टहरू।' },
        { title: 'कुर्सी तथा टेबुल', desc: 'हरेक बसाइ मिलानको लागि ब्यान्क्वेट कुर्सी, गोलो र आयातकार टेबुल, सफा तन्नासहित।' },
        { title: 'सजावट तथा लाइटिङ', desc: 'तपाईंको कार्यक्रमको माहोल बनाउन स्टेज ब्याकड्रप, फूलको सजावट, र लाइटिङ।' },
        { title: 'साउन्ड तथा स्टेज सेटअप', desc: 'भाषण र प्रस्तुतिहरू स्पष्ट सुनिनको लागि PA सिस्टम, स्टेज, र प्लेटफर्महरू।' },
        { title: 'भान्साका सामान तथा भाँडाकुँडा', desc: 'ठूलो परिमाणमा खाना पकाउनको लागि सफा गरिएका ठूला डेकचीहरू, सर्भिङ ट्रे, र भान्साका सामानहरू।' },
      ],
    },
    steps: {
      eyebrow: 'यसरी काम गर्छ',
      title: 'हामीसँग बुकिङ गर्न सजिलो छ',
      items: [
        { n: '०१', title: 'आफ्नो मिति बताउनुहोस्', desc: 'आफ्नो कार्यक्रमको मिति, अतिथि संख्या, र स्थान हाम्रो टिमलाई बताउनुहोस्।' },
        { n: '०२', title: 'आफ्नो सेटअप छान्नुहोस्', desc: 'हामी तपाईंको बजेटमा मिल्ने टेन्ट, बसाइ, र सजावट प्याकेज तयार गर्छौं।' },
        { n: '०३', title: 'हामी डेलिभरी र सेटअप गर्छौं', desc: 'हाम्रो टिमले सामान ल्याउँछ, मिलाउँछ, र सबै फिर्ता लैजान्छ ताकि तपाईं कार्यक्रममा ध्यान दिन सक्नुहोस्।' },
      ],
    },
    whyUs: {
      eyebrow: 'किन फ्रेन्डशिप रेन्टल सर्भिस',
      title: 'साथीले सहयोग गरे जस्तो सेवा',
      sub: 'हाम्रो नामले नै सबै भन्छ — हामी हरेक बुकिङलाई साथीको कार्यक्रम मिलाइदिए जस्तै व्यवहार गर्छौं, केवल सामान भाडामा दिने होइन। २० वर्षभन्दा बढीको अनुभवसँगै, हामीले उपत्यकाभरि सयौं उत्सवहरू सफल बनाउन मद्दत गरेका छौं।',
      list: [
        'हरेक भाडामा राम्रोसँग हेरचाह गरिएका, सफा सामानहरू',
        'सधैं समयमै डेलिभरी र फिर्ता लैजाने सेवा',
        'विश्वासमा आधारित मैत्रीपूर्ण र लचिलो सेवा',
        'लुकेको शुल्क बिना उचित र पारदर्शी मूल्य',
      ],
      stats: [
        { value: '५००+', label: 'सम्पन्न कार्यक्रमहरू' },
        { value: '२०+', label: 'वर्षको अनुभव' },
        { value: '१००%', label: 'समयमै सेटअप' },
      ],
    },
    gallery: {
      eyebrow: 'हाम्रो काम',
      title: 'हालैका सेटअपहरूको झलक',
      items: ['विवाह टेन्ट सेटअप', 'रिसेप्सन बसाइ', 'स्टेज र लाइटिङ', 'बाहिरी छाना', 'टेबुल मिलान', 'कार्यक्रम सजावट'],
      note: 'फोटोहरू छिट्टै आउँदैछन् — हाम्रो अर्को कार्यक्रम पछि पुनः हेर्नुहोस्।',
    },
    contact: {
      eyebrow: 'सम्पर्कमा रहनुहोस्',
      title: 'तपाईंको कार्यक्रम मिलाऔं',
      sub: 'आफ्नो मिति र अतिथि संख्यासहित सम्पर्क गर्नुहोस्, हामी सोही दिन मूल्य कोट तयार गरिदिन्छौं।',
      phoneLabel: 'फोन',
      basedInLabel: 'स्थान',
      basedIn: 'ललितपुर, नेपाल',
      servingLabel: 'सेवा क्षेत्र',
      serving: 'ललितपुर, काठमाडौं र भक्तपुर',
      whatsappTitle: 'ह्वाट्सएपमा कुरा गर्नुहोस्',
      whatsappSub: 'हामीसम्म पुग्ने सबैभन्दा छिटो तरिका — प्रायः मिनेटैमा जवाफ दिन्छौं',
      facebookTitle: 'फेसबुकमा फलो गर्नुहोस्',
      facebookSub: 'हाम्रा पछिल्ला सेटअप र कार्यक्रमका फोटोहरू हेर्नुहोस्',
    },
    footer: {
      tagline: 'ललितपुर, काठमाडौं र भक्तपुरभरि विवाह, रिसेप्सन र पार्टीहरूको लागि टेन्ट, बसाइ, सजावट, र सफा भान्साका सामान।',
      linksTitle: 'छिटो लिङ्कहरू',
      contactTitle: 'सम्पर्क',
    },
    footerCopy: (year) => `© ${year} फ्रेन्डशिप रेन्टल सर्भिस। सर्वाधिकार सुरक्षित।`,
  },
}

function LangSwitch({ lang, setLang }) {
  return (
    <div className="lang-switch" role="group" aria-label="Language">
      <button type="button" className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>
        EN
      </button>
      <button type="button" className={lang === 'np' ? 'active' : ''} onClick={() => setLang('np')}>
        NP
      </button>
    </div>
  )
}

function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme((v) => (v === 'dark' ? 'light' : 'dark'))}
    >
      {theme === 'dark' ? '☀' : '🌙'}
    </button>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lang, setLang] = useState('en')
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('frs-theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  const t = CONTENT[lang]

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('frs-theme', theme)
  }, [theme])

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <a href="#top" className="brand">
            <img src={logo} alt="Friendship Rental Service logo" className="brand-logo" />
            <span className="brand-name">
              Friendship
              <small>{t.brandSub}</small>
            </span>
          </a>

          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            {t.nav.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <div className="nav-controls">
              <LangSwitch lang={lang} setLang={setLang} />
              <ThemeToggle theme={theme} setTheme={setTheme} />
            </div>
          </nav>

          <div className="header-actions">
            <div className="desktop-controls">
              <LangSwitch lang={lang} setLang={setLang} />
              <ThemeToggle theme={theme} setTheme={setTheme} />
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn btn-primary header-cta">
              {t.headerCta}
            </a>
            <button
              className="menu-toggle"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">{t.hero.eyebrow}</p>
              <h1>{t.hero.title}</h1>
              <p className="hero-sub">{t.hero.sub}</p>
              <div className="hero-actions">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn btn-primary">{t.hero.ctaPrimary}</a>
                <a href="#services" className="btn btn-outline">{t.hero.ctaSecondary}</a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-logo-card">
                <img src={logo} alt="Friendship Rental Service" />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">{t.services.eyebrow}</p>
              <h2>{t.services.title}</h2>
            </div>
            <div className="service-grid">
              {t.services.items.map((s) => (
                <div className="service-card" key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="steps">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">{t.steps.eyebrow}</p>
              <h2>{t.steps.title}</h2>
            </div>
            <div className="steps-grid">
              {t.steps.items.map((step) => (
                <div className="step-card" key={step.n}>
                  <span className="step-number">{step.n}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="why-us">
          <div className="container why-us-inner">
            <div className="why-us-copy">
              <p className="eyebrow">{t.whyUs.eyebrow}</p>
              <h2>{t.whyUs.title}</h2>
              <p className="hero-sub">{t.whyUs.sub}</p>
              <ul className="why-list">
                {t.whyUs.list.map((item) => (
                  <li key={item}>
                    <span className="check">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="why-us-stats">
              {t.whyUs.stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="gallery">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">{t.gallery.eyebrow}</p>
              <h2>{t.gallery.title}</h2>
            </div>
            <div className="gallery-grid">
              {t.gallery.items.map((label) => (
                <div className="gallery-item" key={label}>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <p className="gallery-note">{t.gallery.note}</p>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container contact-inner">
            <div className="contact-info">
              <p className="eyebrow">{t.contact.eyebrow}</p>
              <h2>{t.contact.title}</h2>
              <p className="hero-sub">{t.contact.sub}</p>
              <ul className="contact-details">
                <li>
                  <strong>{t.contact.phoneLabel}</strong>
                  <a href="tel:+9779767473105">+977 976-747-3105</a>
                </li>
                <li>
                  <strong>{t.contact.basedInLabel}</strong>
                  <span>{t.contact.basedIn}</span>
                </li>
                <li>
                  <strong>{t.contact.servingLabel}</strong>
                  <span>{t.contact.serving}</span>
                </li>
              </ul>
            </div>

            <div className="connect-card">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="connect-btn connect-whatsapp">
                <span className="connect-icon">
                  <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden="true">
                    <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.34.653 4.527 1.785 6.393L4 29l7.79-1.744A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.7 9.7 0 0 1-4.95-1.354l-.355-.21-4.62 1.035 1.02-4.5-.232-.368A9.7 9.7 0 0 1 5.25 15c0-5.936 4.818-10.75 10.754-10.75S26.75 9.064 26.75 15 21.94 24.75 16.004 24.75Zm5.55-7.86c-.303-.152-1.79-.883-2.068-.984-.278-.101-.48-.152-.682.152-.202.303-.784.984-.961 1.187-.177.202-.354.227-.657.076-.303-.152-1.278-.471-2.435-1.505-.9-.803-1.508-1.795-1.685-2.098-.177-.303-.019-.467.133-.618.137-.136.303-.354.455-.53.152-.177.202-.303.303-.505.101-.202.05-.379-.025-.53-.076-.152-.682-1.646-.935-2.254-.246-.591-.497-.511-.682-.52a13 13 0 0 0-.581-.011c-.202 0-.53.076-.808.379-.278.303-1.06 1.036-1.06 2.526s1.085 2.929 1.236 3.132c.152.202 2.135 3.26 5.173 4.572.723.312 1.287.499 1.727.639.726.231 1.386.198 1.908.12.582-.087 1.79-.732 2.043-1.44.253-.707.253-1.313.177-1.44-.076-.126-.278-.202-.581-.354Z" />
                  </svg>
                </span>
                <span>
                  <strong>{t.contact.whatsappTitle}</strong>
                  <small>{t.contact.whatsappSub}</small>
                </span>
              </a>

              <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="connect-btn connect-facebook">
                <span className="connect-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
                    <path d="M13.5 21v-7.5H16l.5-3.5h-3V7.9c0-1 .3-1.7 1.7-1.7H16.6V3.1C16.3 3 15.3 3 14.2 3c-2.4 0-4 1.5-4 4.2V10H7.7v3.5h2.5V21h3.3Z" />
                  </svg>
                </span>
                <span>
                  <strong>{t.contact.facebookTitle}</strong>
                  <small>{t.contact.facebookSub}</small>
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-top">
          <div className="footer-brand">
            <a href="#top" className="brand">
              <img src={logo} alt="Friendship Rental Service logo" className="brand-logo" />
              <span className="brand-name brand-name-light">
                Friendship
                <small>{t.brandSub}</small>
              </span>
            </a>
            <p className="footer-tagline">{t.footer.tagline}</p>
            <div className="footer-social">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <svg viewBox="0 0 32 32" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.34.653 4.527 1.785 6.393L4 29l7.79-1.744A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.7 9.7 0 0 1-4.95-1.354l-.355-.21-4.62 1.035 1.02-4.5-.232-.368A9.7 9.7 0 0 1 5.25 15c0-5.936 4.818-10.75 10.754-10.75S26.75 9.064 26.75 15 21.94 24.75 16.004 24.75Zm5.55-7.86c-.303-.152-1.79-.883-2.068-.984-.278-.101-.48-.152-.682.152-.202.303-.784.984-.961 1.187-.177.202-.354.227-.657.076-.303-.152-1.278-.471-2.435-1.505-.9-.803-1.508-1.795-1.685-2.098-.177-.303-.019-.467.133-.618.137-.136.303-.354.455-.53.152-.177.202-.303.303-.505.101-.202.05-.379-.025-.53-.076-.152-.682-1.646-.935-2.254-.246-.591-.497-.511-.682-.52a13 13 0 0 0-.581-.011c-.202 0-.53.076-.808.379-.278.303-1.06 1.036-1.06 2.526s1.085 2.929 1.236 3.132c.152.202 2.135 3.26 5.173 4.572.723.312 1.287.499 1.727.639.726.231 1.386.198 1.908.12.582-.087 1.79-.732 2.043-1.44.253-.707.253-1.313.177-1.44-.076-.126-.278-.202-.581-.354Z" />
                </svg>
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 21v-7.5H16l.5-3.5h-3V7.9c0-1 .3-1.7 1.7-1.7H16.6V3.1C16.3 3 15.3 3 14.2 3c-2.4 0-4 1.5-4 4.2V10H7.7v3.5h2.5V21h3.3Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>{t.footer.linksTitle}</h4>
            <ul>
              {t.nav.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t.footer.contactTitle}</h4>
            <ul className="footer-contact">
              <li><a href="tel:+9779767473105">+977 976-747-3105</a></li>
              <li>{t.contact.basedIn}</li>
              <li>{t.contact.serving}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="footer-copy">{t.footerCopy(new Date().getFullYear())}</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
