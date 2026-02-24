'use client';
import { useEffect, useCallback } from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  caption: string;
  onClose: () => void;
}

export default function Lightbox({ src, caption, onClose }: Props) {
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  return (
    <div
      className="lightbox"
      style={{ display: 'block' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <span className="lightbox-close" onClick={onClose}>&times;</span>
      <div className="lightbox-image-wrapper">
        <Image
          src={src}
          alt={caption}
          fill
          sizes="80vw"
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
      <div className="lightbox-caption">{caption}</div>
    </div>
  );
}
