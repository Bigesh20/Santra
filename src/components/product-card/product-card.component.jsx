import './product-card.styles.scss'
import Button from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({product}) => {
    const addProductToCart = () => addItemToCart(product);
    const {addItemToCart} = useContext(CartContext);
    const {name, price, imageUrl} = product;
    return(
<div className='product-card-container'>
<img src={imageUrl} alt={`${name}`}/>
<div className='footer'>
<span className='name'>{name}</span>
<span className='price'> {price}</span>
<Button buttonType='inverted' onClick = {addProductToCart}>Add To Cart</Button>
</div>

</div>
    )

}

export default ProductCard;