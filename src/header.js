import React from 'react';
import { useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    const showHeader = ['/dashboard'].includes(location.pathname);

    return showHeader ? (
        <header>
            <nav>
                <ul>
                    <li><p>text1</p></li>
                    <li><p>text2</p></li>
                </ul>
            </nav>
        </header>
    ) : null;
}

export default Header;
