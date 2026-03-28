import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

export default function Products({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        console.log("Error fetching data");
        setLoading(false);
      });
  }, []);

  const categories = ["all"];
  products.forEach((p) => {
    if (!categories.includes(p.category)) {
      categories.push(p.category);
    }
  });

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10">
        <h3 className="text-lg sm:text-xl font-bold mb-4">
          Browse By Category
        </h3>

        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 whitespace-nowrap border rounded-full capitalize text-sm sm:text-base transition ${
                category === cat
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h3 className="text-lg sm:text-xl font-bold mb-4">
          {category === "all" ? "All Products" : category} (
          {filteredProducts.length})
        </h3>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
          </div>
        ) : (
          <div
            className="
              grid gap-4 sm:gap-6
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-3 
              lg:grid-cols-4 
              xl:grid-cols-5
            "
          >
            {filteredProducts.map((product) => (
              <div key={product.id}>
                <ProductCard
                  product={product}
                  onClick={() => navigate(`/product/${product.id}`)}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
