import type { IProduct, IProductDetail } from "./types";

export const fetchProduct = async (id: number): Promise<IProductDetail | null> => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data: IProduct = await response.json();

  return {
    id: data.id,
    title: data.title,
    price: data.price,
    description: data.description,
    category: data.category,
    image: data.image,
    rate: data.rating.rate, // Aqui você extrai e adiciona o rate
  };
};