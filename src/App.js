import React from 'react';
import './App.css';
import logo from './planets.svg';

const App = () => {
    return (
        <div className={'app-wrapper'}>
            <header className={'header'}>
                <img src={logo} alt="Картинка" width={50}/>
            </header>
            <nav className={'nav'}>
                <div><a href="https://svg-art.ru/?page_id=1047">Profile</a></div>
                <div><a href="">Messages</a></div>
                <div><a href="">News</a></div>
                <div><a href="">Music</a></div>
                <div><a href="">Setting</a></div>
            </nav>

            <div className={'content'}>
                <div>
                    <img src="https://cs6.pikabu.ru/post_img/big/2015/06/10/4/1433914273_1472997847.jpg"
                         alt="Картинка"/></div>
                Content
                <div>
                    ava + desc
                </div>
                <div>
                    My post
                    <div>
                        new
                    </div>
                </div>
            </div>

        </div>)
};

export default App;
