import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const TotalCartPrice = useSelector(getTotalCartPrice);

  if(!totalCartQuantity) return null;
  
  return (
    <div className="bg-stone-800 text-stone-200 uppercase py-4 px-4 sm:px-6
    text-sm md:text-base flex items-center justify-between">
      <p className="text-stone-300 font-semibold space-x-4 sm:x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>${TotalCartPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
