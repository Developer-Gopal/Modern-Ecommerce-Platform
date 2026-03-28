const ProductCard=({ product, onClick })=> {
  return (
    <div
      onClick={() => onClick(product)}
      className="bg-white border border-gray-200 rounded-xl p-4 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
    >

      <div className="h-48 flex items-center justify-center bg-gray-50 rounded-lg mb-4 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      
      <p className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2 leading-snug">
        {product.title}
      </p>

      <div className="flex items-center justify-between mt-2">
        <span className="text-green-500 font-bold text-base">${product.price}</span>
        <span className="text-blue-400 text-sm">
          ⭐ {product.rating?.rate} ({product.rating?.count})
        </span>
      </div>

    </div>
  )
}
export default ProductCard