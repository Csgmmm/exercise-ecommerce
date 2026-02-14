import type { IProductRate } from "./types";

interface IProductFromAPI {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number }; //Aqui a API é a que vem da API
}

export const fetchProduct = async (id: number): Promise<IProductRate | null> => { //Quando é para cada product, utilizase null
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`); //Função para buscar um produto pelo ID e retornar com rate
    if (!response.ok) throw new Error("Produto não encontrado"); //se a resposta for not ok, enviar para o catch.

    const product: IProductFromAPI = await response.json();

    return {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      rate: product.rating.rate, //Sendo que quero que ao clicar, cada artigo contenha a rate, aqui adiciona-se.
    };
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    return null; //caso não responda, aparece null.
  }
};
