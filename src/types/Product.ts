import type { IProduct, IProductDetail } from "./types";

export const fetchProduct = async (
  id: number,
): Promise<IProductDetail | null> => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data: IProduct = await response.json();

  return {
    ...data,
    rate: data.rating.rate,
  };
};
