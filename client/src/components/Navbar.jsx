import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-blue-400 text-white px-8 py-4 flex justify-between items-center">
      
      <Link to="/" className="text-white font-bold text-2xl">
        GoShoppy
      </Link>

      <div className="flex gap-10 items-center text-sm">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart" className="flex items-center gap-1">
          <ShoppingCart size={16} />
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;