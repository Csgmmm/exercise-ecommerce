export type IProducts = IProduct[];

export interface IProduct {
  //Este tipo define o que cada produto tem.
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface IProductRate extends IProduct {
  //aqui adiciona um novo parametro, não mexendo no anterior, apenas adiciona quando chamado. Ou seja, Em cada IProduct, vai ser adicionado o rate
  rate: number;
}
