'use client';
import { useEffect, useRef, useState } from 'react';

const NAV_ITEMS = [
  { label: 'Home',    href: '#home' },
  { label: 'About',   href: '#about' },
  { label: 'Gallery', href: '#works' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef               = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({ top: (target as HTMLElement).offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <nav ref={navbarRef} className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="logo">Michal Berco</div>
      <ul className={`nav-links${isOpen ? ' active' : ''}`}>
        {NAV_ITEMS.map(({ label, href }) => (
          <li key={href}>
            <a href={href} onClick={(e) => scrollTo(e, href)}>{label}</a>
          </li>
        ))}
      </ul>
      <div
        className={`burger${isOpen ? ' toggle' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </div>
    </nav>
  );
}
