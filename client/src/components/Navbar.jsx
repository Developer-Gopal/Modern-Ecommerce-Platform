import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-400 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="font-bold text-2xl">
          GoShoppy
        </Link>

        <div className="hidden md:flex gap-10 items-center text-sm">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart" className="flex items-center gap-1">
            <ShoppingCart size={16} />
            Cart
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 mt-4 md:hidden text-sm">
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/products" onClick={() => setOpen(false)}>
            Products
          </Link>
          <Link
            to="/cart"
            onClick={() => setOpen(false)}
            className="flex items-center gap-1"
          >
            <ShoppingCart size={16} />
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
