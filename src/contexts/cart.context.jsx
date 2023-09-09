import { createContext, useState, useEffect } from "react";

const addCartItems = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
    }

    
    return[...cartItems, {...productToAdd, quantity: 1}];
}
const removeCartItems = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id)
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id) }
        return cartItems.map((cartItem) => cartItem.id === productToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem)
    }

    const clearCartItems = (cartItems, productToClear) => {
        return cartItems.filter(cartItem => cartItem.id !== productToClear.id)
    }


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {

    },
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartTotal: 0,
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    useEffect(() => {
const newCartCount = cartItems.reduce((accumulator, currentElement) => accumulator + currentElement.quantity, 0)
setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce((accumulator, currentElement) => accumulator + currentElement.quantity * currentElement.price, 0);
        setCartTotal(newCartTotal);
            }, [cartItems]);
    const addItemToCart = (productToAdd) => {
setCartItems(addCartItems(cartItems, productToAdd))
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItems(cartItems, productToRemove))
            }
            const clearItemFromCart = (productToClear) => {
                setCartItems(clearCartItems(cartItems, productToClear))
                    }
    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, clearItemFromCart, cartTotal};
    return(
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
};
