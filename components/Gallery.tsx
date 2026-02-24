'use client';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { galleryItems } from '@/data/gallery';
import { FilterValue } from '@/types';
import GalleryItem from './GalleryItem';
import Lightbox from './Lightbox';

gsap.registerPlugin(ScrollTrigger);

const FILTERS: { label: string; value: FilterValue }[] = [
  { label: 'All',        value: 'all' },
  { label: 'Graffiti',   value: 'graffiti' },
  { label: 'Street Art', value: 'street-art' },
  { label: 'Murals',     value: 'murals' },
  { label: 'Canvas',     value: 'canvas' },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');
  const [lightboxSrc, setLightboxSrc]   = useState<string | null>(null);
  const [lightboxCaption, setLightboxCaption] = useState('');
  const sectionRef  = useRef<HTMLElement>(null);
  const gridRef     = useRef<HTMLDivElement>(null);
  const titleRef    = useRef<HTMLHeadingElement>(null);

  const filteredItems = galleryItems.filter(
    item => activeFilter === 'all' || item.category === activeFilter
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: { trigger: titleRef.current, start: 'top 85%' },
        clipPath: 'inset(0 100% 0 0)',
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleFilter = (value: FilterValue) => {
    setActiveFilter(value);
    setTimeout(() => {
      gsap.fromTo('.work-item',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out' }
      );
    }, 0);
  };

  return (
    <section id="works" className="works" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title" ref={titleRef}>Gallery</h2>
        <div className="works-filter">
          {FILTERS.map(f => (
            <button
              key={f.value}
              className={`filter-btn${activeFilter === f.value ? ' active' : ''}`}
              onClick={() => handleFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="works-grid" ref={gridRef}>
          {filteredItems.map(item => (
            <GalleryItem
              key={item.id}
              item={item}
              onClick={() => {
                setLightboxSrc(item.src);
                setLightboxCaption(item.caption);
              }}
            />
          ))}
        </div>
      </div>
      {lightboxSrc && (
        <Lightbox
          src={lightboxSrc}
          caption={lightboxCaption}
          onClose={() => setLightboxSrc(null)}
        />
      )}
    </section>
  );
}
