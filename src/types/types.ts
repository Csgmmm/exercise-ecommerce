export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export type IProductSummary = Omit<IProduct, "rating">;
export interface IProductDetail extends IProductSummary {
  rate: number;
}
