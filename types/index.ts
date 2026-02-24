export type GalleryCategory = 'graffiti' | 'street-art' | 'murals' | 'canvas';
export type FilterValue = 'all' | GalleryCategory;

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  year: number;
}
