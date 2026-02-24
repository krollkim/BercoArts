import Image from 'next/image';
import { GalleryItem as GalleryItemType } from '@/types';

interface Props {
  item: GalleryItemType;
  onClick: () => void;
}

export default function GalleryItem({ item, onClick }: Props) {
  return (
    <div className={`work-item ${item.category}`} onClick={onClick}>
      <div className="work-image">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 280px"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="work-overlay">
        <h3>{item.caption}</h3>
        <p>{item.category.replace('-', ' ')}, {item.year}</p>
      </div>
    </div>
  );
}
