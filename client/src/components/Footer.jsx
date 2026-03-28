import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-gray-300 pt-12 pb-6 mt-16 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Exclusive</h3>
          <p className="mb-3">Subscribe</p>
          <p className="text-sm mb-4">Get 10% off your first order</p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Support</h3>
          <p className="text-sm">111 Bijoy sarani st, Adyar,</p>
          <p className="text-sm mb-2">DH 1515, Chennai.</p>
          <p className="text-sm">goshoppy@gmail.com</p>
          <p className="text-sm mt-2">+91 99890 89032</p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Account</h3>
          <ul className="space-y-2 text-sm">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Shop</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Quick Link</h3>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-white text-sm mt-10">
        © Copyright 2026. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
