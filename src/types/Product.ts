import type { IProduct } from "./types";

export const fetchProduct = async (id: number): Promise<IProduct | null> => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data: IProduct = await response.json();

  return {
    ...data,
    rating: { rate: data.rating.rate, count: data.rating.count },
  };
};
