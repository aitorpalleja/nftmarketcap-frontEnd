import React from 'react';
import '../Header/Header.scss'

function Header() {
    return (
        <div className='header'>
            <div className="header_container">
                <span className='header_info'>Volume 24h: <mark className='header_value'>123.000 SOL</mark></span>
                <span className='header_info'>SOL/USD: <mark className='header_value'>$32.45</mark></span>
                <span className='header_info'>Solana Network: <mark className='header_value'>3500 TPS</mark> </span>
            </div>
        </div>
    );
}

export default Header;
