import './cart-dropdown.styles.scss'
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartDropdown =() => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    const checkOutHandler = () => {
        navigate('/checkout');
    }
return(
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
{cartItems.map(item => (<CartItem key={item.id} cartitem={item}/>))};
        </div>
        <Button onClick= {checkOutHandler}>GO TO CHECKOUT</Button>

    </div>
)
}
export default CartDropdown;