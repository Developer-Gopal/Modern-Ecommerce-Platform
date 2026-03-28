import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Cart = ({ cart = [], defaultItems = [], onRemove, onQuantityChange }) => {
  const navigate = useNavigate();

  const total = [...defaultItems, ...cart].reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-4 mb-8">
            {defaultItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-xl flex items-center gap-4"
              >
                <img src={item.image} className="w-16 h-16 object-contain" />
                <div className="flex-1">
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-gray-400 text-xs">${item.price}</p>
                </div>
                <p className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
          <h3 className="mb-4 font-semibold text-gray-600">Your Cart</h3>
          {cart.length === 0 ? (
            <p className="text-gray-400">No items added</p>
          ) : (
            <div className="flex flex-col gap-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-xl flex items-center gap-4"
                >
                  <img src={item.image} className="w-16 h-16 object-contain" />

                  <div className="flex-1">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-gray-400 text-xs">${item.price}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <button
                      onClick={() =>
                        onQuantityChange(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        onQuantityChange(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <p className="font-semibold w-20 text-right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button onClick={() => onRemove(item.id)}>✕</button>
                </div>
              ))}
            </div>
          )}
          <div className="mt-10 bg-white p-6 rounded-xl text-right">
            <p className="text-gray-400 text-sm">Subtotal</p>
            <p className="text-2xl font-bold">${total.toFixed(2)}</p>
            <button className="mt-3 bg-blue-600 text-white px-6 py-2 rounded">
              Checkout →
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
