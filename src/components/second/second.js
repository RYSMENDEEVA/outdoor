import React from 'react';
import img from './img.png'
const Second = () => {
    return (
        <section className="second">
            <div className="container">
                <div className="second__row">
                    <div className="second__left" style={{background: `url(${img}) center/cover no-repeat`}}>

                    </div>
                    <div className="second__right">
                         <p className="second__subtitle">
                             Who are we?
                         </p>
                        <h2 className="second__title">A bit about us.</h2>
                        <p className="second__desc">
                            We are an outdoor gear company focused on <br/> Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Nullam scelerisque aliquam odio <br/> et faucibus. Nulla rhoncus feugiat eros quis <br/> consectetur. Morbi neque ex, condimentum <br/> dapibus congue et.
                        </p>
                        <a className="second__link" href="">Read more
                            <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.6798 3.77312L15.2029 0.341984C14.7257 -0.102793 13.9758 -0.102793 13.4986 0.278444C13.0213 0.723221 13.0213 1.42216 13.4304 1.86693L15.4075 3.83666H1.22714C0.545397 3.83666 0 4.34498 0 4.98037C0 5.61577 0.545397 6.12409 1.22714 6.12409H15.4756L13.4986 8.09381C13.0213 8.53859 13.0895 9.23752 13.5667 9.6823C13.7713 9.87292 14.1121 10 14.3848 10C14.7257 10 14.9984 9.87292 15.2711 9.6823L18.748 6.25116C19.3616 5.48869 19.3616 4.47206 18.6798 3.77312Z" fill="#575445"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Second;