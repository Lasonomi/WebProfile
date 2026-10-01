import { useEffect, useState } from 'react';
import './App.css';
import DotGrid from './component/DotGrid';
import Marquee from './component/Marquee';
import SmoothCursor from './component/SmoothCursor';
import TextType from './component/TextType';
import GitHubRepos from './component/GitHubRepos';
import Lanyard from './component/Lanyard/Lanyard';

function App() {
  // Status tema: false = siang, true = malam
  const [isNightMode, setIsNightMode] = useState(false);

  // Reveal animation saat section masuk viewport
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`page${isNightMode ? ' night-mode' : ''}`}>
      <SmoothCursor />
{/* Backdrop cyber + DotGrid interaktif */}
      <div className="cyber-backdrop" aria-hidden="true">
        <div className="dot-grid-background">
          <DotGrid
            dotSize={6}
            gap={24}
            baseColor="#111111"
            activeColor="#ff66a3"
            proximity={140}
            shockRadius={220}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
      </div>

      {/* Navbar */}
      <header className="site-header fixed inset-x-0 top-4 z-50">
        <a className="brand" href="#home" aria-label="Kembali ke halaman utama">
          Neha<span>.</span>
        </a>
        <nav className="site-nav" aria-label="Navigasi utama">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#github">GitHub</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <label
          className="theme-switch"
          aria-label={isNightMode ? 'Aktifkan tema siang' : 'Aktifkan tema malam'}
        >
          <input
            className="theme-switch__checkbox"
            type="checkbox"
            checked={isNightMode}
            onChange={() => setIsNightMode((current) => !current)}
          />
          <span className="theme-switch__container">
            <span className="theme-switch__circle-container">
              <span className="theme-switch__sun-moon-container">
                <span className="theme-switch__moon">
                  <span className="theme-switch__spot"></span>
                  <span className="theme-switch__spot"></span>
                  <span className="theme-switch__spot"></span>
                </span>
              </span>
            </span>
            <span className="theme-switch__clouds"></span>
            <span className="theme-switch__stars-cluster">
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
            </span>
            <span className="theme-switch__shooting-star"></span>
            <span className="theme-switch__shooting-star-2"></span>
            <span className="theme-switch__meteor"></span>
          </span>
        </label>
      </header>

      <main className="main-content">
        {/* HERO */}
        <section className="hero hero-section reveal-on-scroll" id="home">
          <div className="hero-copy">
            <TextType
              as="p"
              className="eyebrow"
              text="PERSONAL WEBSITE / 2026"
              loop={false}
              startOnVisible
              showCursor={false}
            />
            <TextType
              as="h1"
              className="hero-title-type"
              text="Halo, saya Neha."
              typingSpeed={75}
              pauseDuration={1800}
              startOnVisible
            />
            <TextType
              as="p"
              className="hero-role text-reveal"
              text="Web Developer / UI Designer"
              loop={false}
              startOnVisible
              showCursor={false}
            />
            <TextType
              as="p"
              className="hero-description"
              text="Membangun website yang rapi, interaktif, dan punya karakter."
              loop={false}
              startOnVisible
              showCursor={false}
            />
            <div className="hero-actions">
              <a className="neo-button hero-button" href="#contact">
                <TextType as="span" text="Contact Me" loop={false} startOnVisible showCursor={false} />
              </a>
              <a className="neo-button secondary-button" href="#github">
                <TextType as="span" text="Lihat GitHub" loop={false} startOnVisible showCursor={false} />
              </a>
            </div>
          </div>
        
          <div className="hero-lanyard" aria-label="Lanyard 3D">
            <Lanyard
              position={[0, 0, 15]}
              gravity={[0, -40, 0]}
              frontImage={process.env.PUBLIC_URL + '/tegar.jpeg'}
              imageFit="cover"
              fov={15}
              transparent={true}
            />
          </div>
        </section>

        {/* Marquee testimonials */}
        <Marquee />

        {/* ABOUT */}
        <section className="template-section about-section reveal-on-scroll" id="about">
          <div className="section-heading">
            <TextType as="p" className="eyebrow" text="01 / ABOUT ME" loop={false} startOnVisible showCursor={false} />
            <TextType as="h2" text="Tentang Saya" loop={false} startOnVisible showCursor={false} />
          </div>
          <div className="about-copy">
            <TextType
              as="p"
              text="Saya seorang developer yang suka membuat interface yang berani, interaktif, dan mudah digunakan."
              loop={false}
              startOnVisible
              showCursor={false}
            />
            <TextType
              as="p"
              text="Fokus pada React, desain UI, dan membangun proyek yang punya karakter visual kuat."
              loop={false}
              startOnVisible
              showCursor={false}
            />
          </div>
        </section>

        {/* SKILLS */}
        <section className="template-section reveal-on-scroll" id="skills">
          <div className="section-heading">
            <TextType as="p" className="eyebrow" text="02 / SKILLS" loop={false} startOnVisible showCursor={false} />
            <TextType as="h2" text="Skills & Tech Stack" loop={false} startOnVisible showCursor={false} />
          </div>
          <div className="skills-grid">
            <div className="skill-group">
              <TextType as="h3" text="Programming Languages" loop={false} startOnVisible showCursor={false} />
              <div className="badge-list">
                <span><TextType as="span" text="JavaScript" loop={false} startOnVisible showCursor={false} /></span>
                <span><TextType as="span" text="TypeScript" loop={false} startOnVisible showCursor={false} /></span>
                <span><TextType as="span" text="PHP" loop={false} startOnVisible showCursor={false} /></span>
                <span><TextType as="span" text="HTML/CSS" loop={false} startOnVisible showCursor={false} /></span>
              </div>
            </div>
            <div className="skill-group">
              <TextType as="h3" text="Frameworks & Libraries" loop={false} startOnVisible showCursor={false} />
              <div className="badge-list">
                <span><TextType as="span" text="React" loop={false} startOnVisible showCursor={false} /></span>
                <span><TextType as="span" text="Laravel" loop={false} startOnVisible showCursor={false} /></span>
                <span><TextType as="span" text="Node.js" loop={false} startOnVisible showCursor={false} /></span>
              </div>
            </div>
            <div className="skill-group">
              <TextType as="h3" text="Tools & Platforms" loop={false} startOnVisible showCursor={false} />
              <div className="badge-list">
                <span><TextType as="span" text="Git" loop={false} startOnVisible showCursor={false} /></span>
                <span><TextType as="span" text="VS Code" loop={false} startOnVisible showCursor={false} /></span>
                <span><TextType as="span" text="Figma" loop={false} startOnVisible showCursor={false} /></span>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS (manual highlight) */}
        <section className="template-section reveal-on-scroll" id="projects">
          <div className="section-heading">
            <TextType as="p" className="eyebrow" text="03 / SELECTED WORK" loop={false} startOnVisible showCursor={false} />
            <TextType as="h2" text="Projects & Portfolio" loop={false} startOnVisible showCursor={false} />
          </div>
          <div className="projects-grid">
            <article className="project-card">
              <TextType as="p" className="project-number" text="PROJECT / 01" loop={false} startOnVisible showCursor={false} />
              <TextType as="h3" text="Monitoring System" loop={false} startOnVisible showCursor={false} />
              <TextType as="p" text="Sistem monitoring berbasis TypeScript." loop={false} startOnVisible showCursor={false} />
              <div className="badge-list">
                <span><TextType as="span" text="TypeScript" loop={false} startOnVisible showCursor={false} /></span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Lasonomi/MonitoringSystem" target="_blank" rel="noreferrer">
                  <TextType as="span" text="Source Code" loop={false} startOnVisible showCursor={false} />
                </a>
              </div>
            </article>
            <article className="project-card">
              <TextType as="p" className="project-number" text="PROJECT / 02" loop={false} startOnVisible showCursor={false} />
              <TextType as="h3" text="Webcall" loop={false} startOnVisible showCursor={false} />
              <TextType as="p" text="Aplikasi web call dengan TypeScript." loop={false} startOnVisible showCursor={false} />
              <div className="badge-list">
                <span><TextType as="span" text="TypeScript" loop={false} startOnVisible showCursor={false} /></span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Lasonomi/Webcall" target="_blank" rel="noreferrer">
                  <TextType as="span" text="Source Code" loop={false} startOnVisible showCursor={false} />
                </a>
              </div>
            </article>
            <article className="project-card">
              <TextType as="p" className="project-number" text="PROJECT / 03" loop={false} startOnVisible showCursor={false} />
              <TextType as="h3" text="Toko Online (Laravel)" loop={false} startOnVisible showCursor={false} />
              <TextType as="p" text="Toko online sederhana dengan role admin & user." loop={false} startOnVisible showCursor={false} />
              <div className="badge-list">
                <span><TextType as="span" text="Laravel" loop={false} startOnVisible showCursor={false} /></span>
                <span><TextType as="span" text="Blade" loop={false} startOnVisible showCursor={false} /></span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Lasonomi/Tubes" target="_blank" rel="noreferrer">
                  <TextType as="span" text="Source Code" loop={false} startOnVisible showCursor={false} />
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* GITHUB REPOS (live dari API) */}
        <GitHubRepos />

        {/* EXPERIENCE */}
        <section className="template-section reveal-on-scroll" id="experience">
          <div className="section-heading">
            <TextType as="p" className="eyebrow" text="04 / JOURNEY" loop={false} startOnVisible showCursor={false} />
            <TextType as="h2" text="Experience & Education" loop={false} startOnVisible showCursor={false} />
          </div>
          <div className="timeline">
            <article className="timeline-item">
              <TextType as="span" text="2024 - SEKARANG" loop={false} startOnVisible showCursor={false} />
              <div>
                <TextType as="h3" text="Web Developer" loop={false} startOnVisible showCursor={false} />
                <TextType as="p" text="Freelance / Personal Projects" loop={false} startOnVisible showCursor={false} />
                <TextType as="p" text="Membangun berbagai aplikasi web dan sistem monitoring." loop={false} startOnVisible showCursor={false} />
              </div>
            </article>
            <article className="timeline-item">
              <TextType as="span" text="2020 - 2024" loop={false} startOnVisible showCursor={false} />
              <div>
                <TextType as="h3" text="Pendidikan" loop={false} startOnVisible showCursor={false} />
                <TextType as="p" text="Teknik Informatika / Ilmu Komputer" loop={false} startOnVisible showCursor={false} />
                <TextType as="p" text="Fokus pada pengembangan web dan sistem informasi." loop={false} startOnVisible showCursor={false} />
              </div>
            </article>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-card reveal-on-scroll" id="contact">
          <div>
            <TextType as="p" className="eyebrow" text="05 / LET'S CONNECT" loop={false} startOnVisible showCursor={false} />
            <TextType as="h2" text="Mari bekerja sama." loop={false} startOnVisible showCursor={false} />
            <TextType
              as="p"
              text="Hubungi saya melalui email atau media sosial di bawah."
              loop={false}
              startOnVisible
              showCursor={false}
            />
            <div className="contact-links">
              <a href="mailto:hello@example.com">
                <TextType as="span" text="Email" loop={false} startOnVisible showCursor={false} />
              </a>
              <a href="https://github.com/Lasonomi" target="_blank" rel="noreferrer">
                <TextType as="span" text="GitHub" loop={false} startOnVisible showCursor={false} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <TextType as="span" text="LinkedIn" loop={false} startOnVisible showCursor={false} />
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Nama kamu" aria-label="Nama kamu" />
            <input type="email" placeholder="Email kamu" aria-label="Email kamu" />
            <textarea placeholder="Pesan kamu" aria-label="Pesan kamu" rows="4"></textarea>
            <button className="neo-button" type="submit">Kirim Pesan</button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <TextType as="p" text="© 2026 Neha. Dibuat dengan React." loop={false} startOnVisible showCursor={false} />
        <div className="footer-links">
          <a href="https://github.com/Lasonomi" target="_blank" rel="noreferrer">
            <TextType as="span" text="GitHub" loop={false} startOnVisible showCursor={false} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <TextType as="span" text="LinkedIn" loop={false} startOnVisible showCursor={false} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
