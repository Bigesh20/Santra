import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import './navigation.styles'
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { NavigationContainer, LogContainer, NavLinkContainer, NavLink } from "./navigation.styles";


const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);
    
    console.log(currentUser);
    return (
<Fragment>
    <NavigationContainer>
    <LogContainer to='/'>
  <CrownLogo className="logo" />
    </LogContainer>
    <NavLinkContainer>
<NavLink to='/shop'>
Shop
</NavLink>

{currentUser ? (
    <NavLink as span onClick={signOutUser}>Sign Out</NavLink>
) : (
<NavLink to='/auth'>Sign In</NavLink>
)
}
<CartIcon />
    </NavLinkContainer>
    {isCartOpen && <CartDropdown />}

    </NavigationContainer>
    <Outlet />
</Fragment>
  
    )
  }

  export default Navigation;