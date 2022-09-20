import React from 'react';
import '../Menu/Menu.scss'

function Menu() {
    return (
        <div className='menu'>
            <div className='menu_container'>
                <nav class="nav">
                    <div class="nav__title">Jotun Labs</div>
                    <ul class="nav__list">
                        <li class="nav__item"><a href='magiceden.io'>Home</a></li>
                        <li class="nav__item"><a href='magiceden.io'>Portfolio</a></li>
                        <li class="nav__item"><a href='magiceden.io'>Charts</a></li>
                    </ul>
                </nav>
            </div>
        </div >
    );
}

export default Menu;
