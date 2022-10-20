import './TopBar.css';
import MenuItem from './MenuItem';
import {CountItemsShoppingCart}  from './shoppingCart';
import { useState } from 'react';

function TopBar() {
    const [shoppingCountState, setShoppingCount] = useState(CountItemsShoppingCart());
    document.addEventListener('updateShoppingCount', function() {
        setShoppingCount(CountItemsShoppingCart());
    });

    return (
        <div className="TopBar">
            <ul>
                <MenuItem linktopage="/" text="MyWork" />
                <MenuItem linktopage="/murals" text="Murals" />
                <MenuItem linktopage="/about" text="About" />
                <MenuItem linktopage="/contact" text="Contact" />
                <MenuItem linktopage="/shop" text="Shop" />
                <MenuItem linktopage="/art-shows" text="News" />
                <li className="social">
                    <ul>
                    <li>
                        <a href="https://www.instagram.com/ossiantheselius/" target="_blank" rel="noreferrer"><svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="-70 -150 1000 1000" className="social-icon"><path fill="currentColor" d="M571 500q0-59-41-101t-101-42-101 42-42 101 42 101 101 42 101-42 41-101zm77 0q0 91-64 156t-155 64-156-64-64-156 64-156 156-64 155 64 64 156zm61-229q0 21-15 36t-37 15-36-15-15-36 15-36 36-15 37 15 15 36zM429 148H327l-54 2-57 5-40 11q-28 11-49 32t-33 49q-6 16-10 40t-6 58-1 53 0 59 0 43 0 43 0 59 1 53 6 58l10 40q12 28 33 49t49 32q16 6 40 11t57 5 54 2 59 0 43 0 42 0 59 0 54-2 58-5 39-11q28-11 50-32t32-49q6-16 10-40t6-58 1-53 0-59 0-43 0-43 0-59-1-53-6-58l-10-40q-11-28-32-49t-50-32q-16-6-39-11t-58-5-54-2-59 0-42 0zm428 352q0 128-3 177-5 116-69 180t-179 69q-50 3-177 3t-177-3q-116-6-180-69T3 677q-3-49-3-177t3-177q5-116 69-180t180-69q49-3 177-3t177 3q116 6 179 69t69 180q3 49 3 177z"></path></svg></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/ossiantheselius/" target="_blank" rel="noreferrer"><svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 -150 1000 1000" className="social-icon"><path fill="currentColor" d="M570.5 310h144l-17 159h-127v460h-190V469h-95V310h95v-95c0-68 16-119.3 48-154s84.7-52 158-52h126v158h-79c-14.7 0-26.3 1.3-35 4s-15 7-19 13-6.3 12.3-7 19-1.3 16-2 28v79z"></path></svg></a>
                    </li>
                    <li>
                        <a href="/checkout">cart <br />({shoppingCountState})</a>
                    </li>
                    </ul>
                </li>
            </ul>
        </div>
    
    );
}

export default TopBar;
