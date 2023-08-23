import { Image } from "sanity";

interface Pattern {
   id: string;
   title: string;
   image: string;
   difficulty: number;
   price: number;
}

export interface SanityProduct extends Omit<Pattern, "image"> {
   _id: string;
   _createdAt: Date;
   title: string;
   slug: string;
   difficulty: number;
   price: number;
   image: Image;
}

// export const inventory: InventoryProduct[] = [];
