import './cart-dropdown.styles.jsx'
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles.jsx';

const CartDropdown =() => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    const checkOutHandler = () => {
        navigate('/checkout');
    }
return(
    <CartDropdownContainer>
        <CartItems>
            {cartItems.length ? (cartItems.map((item) => <CartItem key={item.id} cartitem={item}/>))
            : (<EmptyMessage>Your Cart is Empty</EmptyMessage>)}

        </CartItems>
        <Button onClick= {checkOutHandler}>GO TO CHECKOUT</Button>

    </CartDropdownContainer>
)
}
export default CartDropdown;