import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home({ onSelectProduct }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="bg-[url('https://ik.imagekit.io/joyl13qcj/GoShoppy/sale%20banner')] text-white py-16 px-8 text-center ">
        <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-2">
          Limited Time Deal
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Up to <span className="text-red-500">10% Off</span> Everything
        </h2>
        <p className="text-gray-400 mb-6 text-lg">
          Shop the latest products at unbeatable prices
        </p>
        <button
          className="bg-blue-500 hover:bg-green-500 text-white px-8 py-3 rounded-full font-semibold transition"
          onClick={() => navigate("/products")}
        >
          Shop Now
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-6">
        <div className="flex items-center gap-4 mb-4">
          <h3 className="text-xl font-bold text-gray-800">
            Browse By Category
          </h3>
        </div>
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition capitalize
                ${
                  category === cat
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white text-gray-600 border-gray-300 hover:border-blue-400"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
          <h3 className="text-xl font-bold text-gray-800">
            {category === "all" ? "All Products" : category}
          </h3>
          <span className="text-gray-400 text-sm">
            ({filteredProducts.length} items)
          </span>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array(8)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="bg-white rounded-xl p-4 animate-pulse">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => navigate(`/product/${product.id}`)}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
