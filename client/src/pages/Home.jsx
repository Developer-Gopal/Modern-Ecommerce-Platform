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
      .catch(() => setLoading(false));
  }, []);

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="relative bg-[url('https://ik.imagekit.io/joyl13qcj/GoShoppy/sale%20banner')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto">
          <p className="text-red-400 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2">
            Limited Time Deal
          </p>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Up to <span className="text-red-400">10% Off</span> Everything
          </h2>

          <p className="text-gray-300 text-sm sm:text-lg md:text-xl mb-6">
            Shop the latest products at unbeatable prices
          </p>

          <button
            className="bg-blue-500 hover:bg-green-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition text-sm sm:text-base"
            onClick={() => navigate("/products")}
          >
            Shop Now
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
          Browse By Category
        </h3>

        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 whitespace-nowrap text-xs sm:text-sm rounded-full border capitalize transition
                ${
                  category === cat
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white text-gray-600 border-gray-300"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <div className="w-1 h-6 sm:h-8 bg-blue-500 rounded-full"></div>

          <h3 className="text-lg sm:text-xl font-bold text-gray-800">
            {category === "all" ? "All Products" : category}
          </h3>

          <span className="text-gray-400 text-xs sm:text-sm">
            ({filteredProducts.length} items)
          </span>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="bg-white rounded-xl p-4 animate-pulse">
                  <div className="h-40 sm:h-48 md:h-52 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              ))}
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
