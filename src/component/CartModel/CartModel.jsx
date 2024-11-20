import {
  ButtonStylesContainer,
  CartModalContainer,
  MainContainer,
  Overlay,
  PrecioContainer,
  PrecioFormat,
  ProductCardWrapper,
  TotalStyled,
} from './CartModelStyles';
import Button from './../UI/Button/Button';
import { CardCart } from './CardCart';
import {
  emptyCart,
  toggleCartVisibility,
} from '../../Redux/features/Cart/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { formatPrecio } from '../../utiles/Formatprecio';

const CartModel = () => {
  const { itemsInCart, isCartHidden } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const total = itemsInCart.reduce((acc, item) => {
    return (acc += item.precio * item.quantity);
  }, 0);
  const dispatch = useDispatch();
  return (
    <>
      {!isCartHidden && (
        <Overlay
          onClick={() => dispatch(toggleCartVisibility())}
          isHidden={isCartHidden}
        />
      )}
      {!isCartHidden && (
        <CartModalContainer
          initial={{ translateY: 100 }}
          animate={{ translateY: 0 }}
          exit={{ translateY: 100 }}
          transition={{ type: 'spring', damping: 25 }}
        >
          <MainContainer>
            <h2>Tu Compra</h2>
            <ProductCardWrapper>
              {itemsInCart.length ? (
                itemsInCart.map((item) => <CardCart key={item.id} {...item} />)
              ) : (
                <p>El carrito esta vacio, ¿no vas a comprar?</p>
              )}
            </ProductCardWrapper>
          </MainContainer>

          <PrecioContainer>
            <TotalStyled>
              <p>Total Estimado: </p>
              <PrecioFormat>
                <span>{formatPrecio(total)}</span>
              </PrecioFormat>
            </TotalStyled>
          </PrecioContainer>
          <ButtonStylesContainer>
            <Button
              onClick={() => {
                navigate('/CheckOut');
                dispatch(toggleCartVisibility());
              }}
              disabled={!itemsInCart.length}
            >
              Enviar pedido
            </Button>
            <Button
              onClick={() => dispatch(emptyCart())}
              bgColor="#fff"
              disabled={!itemsInCart.length}
            >
              Borrar Todo
            </Button>
          </ButtonStylesContainer>
        </CartModalContainer>
      )}
    </>
  );
};

export default CartModel;
