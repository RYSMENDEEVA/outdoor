import React from 'react';

import logo from "./logo.svg"
import {BsCart3} from "react-icons/bs"

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <h1 className="header__title">
                        <img src={logo} alt=""/>
                    </h1>
                    <div className="header__content">
                        <div className="header__links">
                            <a href="" className="header link">
                                Shop
                            </a>
                            <a href="" className="header link">
                                About us
                            </a>
                            <a href="" className="header link">
                                Our team
                            </a>
                            <a href="" className="header link">
                                Buyer's guides
                            </a>
                            <a href="" className="header link">
                                Categories
                            </a>
                        </div>
                        <div className="header__btns">
                            <button className="header__btn">
                                Buy template
                            </button>
                            <button className="header__btn">
                                <BsCart3/>
                                Cart
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;