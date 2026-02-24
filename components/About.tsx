'use client';
import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef   = useRef<HTMLHeadingElement>(null);
  const textRef    = useRef<HTMLDivElement>(null);
  const imageRef   = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: { trigger: titleRef.current, start: 'top 85%' },
        clipPath: 'inset(0 100% 0 0)',
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
      gsap.from(textRef.current, {
        scrollTrigger: { trigger: textRef.current, start: 'top 80%' },
        x: -60,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      });
      gsap.from(imageRef.current, {
        scrollTrigger: { trigger: imageRef.current, start: 'top 80%' },
        x: 60,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title" ref={titleRef}>About</h2>
        <div className="about-content">
          <div className="about-text" ref={textRef}>
            <p>I&apos;m Michal Berko, and the city is my canvas. What started as late-night adventures with spray cans has evolved into a mission to democratize art—bringing it out of galleries and onto the streets where everyone can see it.</p>
            <p>My work blends traditional graffiti techniques with contemporary storytelling, creating pieces that speak to urban life, social justice, and human connection. Each wall tells a different story, each piece sparks a different conversation.</p>
            <p>From abandoned buildings to commissioned murals, I believe that art should be accessible, provocative, and transformative. Street art isn&apos;t vandalism—it&apos;s rebellion with purpose.</p>
          </div>
          <div className="about-image" ref={imageRef}>
            <div className="artist-work">
              <Image
                src="/images/profile/IMG_1847.jpg"
                alt="Michal Berco's artwork"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
