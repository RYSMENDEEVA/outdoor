import React, {useState} from 'react';

const TestAccordion = ({item}) => {
    const [accordion, setAccordion] = useState(false);
    return (
        <div className="test__accordion"
             onClick={() => setAccordion(!accordion)}>
            <div className="test__accordion-top">
                <p>{item.title}</p>
                <span>+</span>
            </div>
            <div
                className={`test__accordion-text ${accordion ? 'active' : ''}`}>
                {item.text}
            </div>
        </div>
        
    );
};

export default TestAccordion;