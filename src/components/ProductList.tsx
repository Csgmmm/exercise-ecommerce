import { useEffect, useState } from "react";
import { fetchProducts } from "../types/Products";
import type { IProductSummary } from "../types/types";

export const ProductList = () =>{
  const [products, setProducts] = useState<IProductSummary[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadData();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );
  
  return (
    <div className="container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Pesquisar por nome..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price}€</p>
          </div>
        ))}
      </div>
    </div>
  );
};
