export interface IBillboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface ICategory {
  id: string;
  name: string;
  billboard: IBillboard;
}
export interface IProduct {
  id: string;
  name: string;
  price: string;
  category: ICategory;
  size: Size;
  color: Color;
  images: Image[];
  isFeatured: boolean;
}
export interface Image {
  id: string;
  url: string;
}
export interface Size {
  id: string;
  name: string;
  value: string;
}
export interface Color {
  id: string;
  name: string;
  value: string;
}
