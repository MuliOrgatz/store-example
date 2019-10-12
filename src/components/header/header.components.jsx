import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'

import {ReactComponent as Logo} from '../../assets/diamond.svg';

import {
    OptionLink, 
    OptionsContainer, 
    HeaderContainer, 
    LogoContainer} 
from './header.styles';

import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.components';
import CartDropDown from '../cart-dropdown/cart-dropdown.components'
import {selectCurrentUser} from '../../redux/user/user.selector'
import {selectCartHidden} from '../../redux/cart/cart.selectors'

const Header = ({currentUser, hidden}) =>(
    <HeaderContainer>
    <LogoContainer to="/">
        <Logo className='logo'/>
    </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'> SHOP </OptionLink>
            <OptionLink to='/shop'>CONTACT</OptionLink>
            {
                currentUser ?(
                <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                ) : (
                <OptionLink to='/signin'>SIGN IN</OptionLink>
            )}
            <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropDown/>}
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);