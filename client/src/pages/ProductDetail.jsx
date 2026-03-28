import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetail({ onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="p-10 text-center text-gray-500">Loading...</div>;
  }

  if (!product) {
    return (
      <div className="p-10 text-center text-red-500">Product not found</div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
        <div className="bg-white rounded-xl p-6 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 object-contain"
          />
        </div>

        <div>
          <p className="text-sm text-gray-400 capitalize mb-2">
            {product.category}
          </p>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {product.title}
          </h1>

          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="text-2xl font-bold text-red-500 mb-4">
            ${product.price}
          </div>

          <div className="flex items-center gap-2 mb-6">
            <span className="text-yellow-500">⭐ {product.rating?.rate}</span>
            <span className="text-gray-400 text-sm">
              ({product.rating?.count} reviews)
            </span>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => {
                onAddToCart(product);
                setAdded(true);

                setTimeout(() => {
                  setAdded(false);
                }, 1500);
              }}
              className={`px-6 py-3 rounded-lg text-white transition-all duration-300 ${
                added ? "bg-green-500 scale-105" : "bg-black"
              }`}
            >
              {added ? "Added ✓" : "Add to Cart"}
            </button>

            <button
              onClick={() => {
                onAddToCart(product);
                navigate("/cart");
              }}
              className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition"
            >
              Buy Now
            </button>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="mt-6 text-sm text-gray-500 hover:text-green-400"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}
