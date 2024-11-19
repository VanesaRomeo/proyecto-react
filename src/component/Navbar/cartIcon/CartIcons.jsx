import { useDispatch, useSelector } from 'react-redux';
import { CartBadge, LinksContainer } from '../Navbar';
import { FaShoppingCart } from 'react-icons/fa';
import { toggleCartVisibility } from '../../../Redux/features/Cart/cartSlice';

const CartIcons = () => {
  const total = useSelector((state) => state.cart.itemsInCart).reduce(
    (acc, item) => {
      return (acc += item.quantity);
    },
    0
  );
  const dispatch = useDispatch();

  return (
    <LinksContainer onClick={() => dispatch(toggleCartVisibility())}>
      <FaShoppingCart />
      <CartBadge>{total}</CartBadge>
    </LinksContainer>
  );
};

export default CartIcons;
