import React from 'react';
import img from "./bg.png"
const First = () => {
    return (
        <section className="first" style={{background: `url(${img}) center/cover no-repeat`}}>
            <div className="container">
                <p className="first__subtitle">OUTDOOR EXPLORATION</p>
                <h2 className="first__title">Gear for when it <br/> actually matters.</h2>
                <p className="first__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Suspendisse varius enim in eros elementum tristique.</p>
            </div>
        </section>
    );
};

export default First;