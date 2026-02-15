import type { IProduct, IProductSummary } from "./types";

export const fetchProducts = async (): Promise<IProductSummary[]> => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data: IProduct[] = await response.json();

  return data.map((item) => ({
    id: item.id,
    title: item.title,
    price: item.price,
    description: item.description,
    category: item.category,
    image: item.image,
    // Se tentasses colocar 'rate' aqui, o TypeScript daria erro!
  }));
};