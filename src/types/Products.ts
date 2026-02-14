import type { IProducts } from "./types"; //importo o type IProducts 

interface IProductEach { //representa exatamente como a API retorna os dados
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

export const fetchProducts = async (): Promise<IProducts> => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data: IProductEach[] = await response.json(); //data é do tipo IProductEach que tem array

    // Retorna apenas os campos da lista, sem rate
    return data.map((product) => ({ //o data do tipo anterior, produra em cada item e atua em cada um.
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      // Aqui não adiciono rate, porque não quero mostrar nos cards dos productos 
    }));
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return [];
  }
};
