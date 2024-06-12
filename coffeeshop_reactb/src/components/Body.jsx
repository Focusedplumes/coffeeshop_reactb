import React from 'react';
import Menu from '../pages/Menu';
import { fakeMenuItems } from '../fakeData';

function Body({ updateShoppingCart }) {
    return (
        <div>
            <Menu
            updateShoppingCart={updateShoppingCart}
            menuItems={fakeMenuItems}
            />
        </div>
    );
}