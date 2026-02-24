'use client';
import Image from 'next/image';

export default function Hero() {
  const scrollToWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="anim-slide-left" style={{ animationDelay: '0.1s' }}>Michal Berco</h1>
          <h2 className="anim-slide-left" style={{ animationDelay: '0.25s' }}>Artist</h2>
          <p className="anim-slide-left" style={{ animationDelay: '0.4s' }}>POP-ART, STREET-ART, GRAFFITI, LIVE</p>
          <a
            href="#works"
            className="btn anim-slide-left"
            style={{ animationDelay: '0.55s' }}
            onClick={scrollToWorks}
          >
            View My Work
          </a>
        </div>
        <div className="hero-image anim-slide-right" style={{ animationDelay: '0.2s' }}>
          <div className="artist-image">
            <Image
              src="/images/profile/berkoProfile.jpg"
              alt="Michal Berco"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 400px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
