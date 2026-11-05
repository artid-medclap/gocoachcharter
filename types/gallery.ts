export type GalleryCategory = "Fleet" | "Interiors" | "Amenities" | "Tours" | "Corporate" | "Weddings" | "Sports" | "Events";

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  location?: string;
  image: string;
  description?: string;
}
