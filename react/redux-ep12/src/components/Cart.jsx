import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../reduxConfigs/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1 className="text-center font-bold p-2 m-2 text-2xl">Cart</h1>
      <div className="flex justify-center  w-full">
        <button
          className=" bg-blue-600 text-white rounded-lg p-2 "
          onClick={handleClearCart}
        >
          Clear Cart Items..
        </button>
      </div>
      <h1 className="text-center p-2 m-2"></h1>

      {cartItems.length == 0 ? (
        <h1 className="text-center mb-4 mt-0">
          Your cart is empty.Please add items
        </h1>
      ) : (
        <ItemList items={cartItems} />
      )}
    </div>
  );
};

export default Cart;
