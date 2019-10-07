import React from 'react';
import logo from "../planets.svg";

const Header = () => {
    return (
        <header className={'header'}>
            <img src={logo} alt="Картинка" width={50}/>
        </header>
    )
}

export default Header;