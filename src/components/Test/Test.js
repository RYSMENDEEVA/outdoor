import React, {useState} from 'react';
import TestAccordion from "./TestAccordion";

const Test = () => {

    const text = [
        {
            title: "Text 1",
            text: 'Lorem ipsum dolor sit amet.'
        },
        {
            title: "Text 2",
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, quibusdam.',

        },
        {
            title: "Text 2",
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum impedit iusto quisquam repudiandae velit vero!'
        }
    ]

    return (
        <section className="test">
            <div className="container">
                {
                    text.map((item) => (
                        <TestAccordion item ={item}/>
                    ))
                }
            </div>
        </section>
    );
};

export default Test;