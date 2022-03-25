import React, { useState } from 'react';
import './Inc_Button.css'
const Inc_Button = () => {

    const [val, setVal] = useState(0);
    const incval = () => {
        setVal(val + 1);
    }
    const decval = () => {
        if (val > 0) {
            setVal(val - 1);
        } else {
            setVal(0);
            alert('Limit End')
        }
    }

    return (
        <div className='main'>
            <div className='display'>
                <h1> {val} </h1>
                <div>
                    <button onClick={incval}>Add</button>
                    <button onClick={decval}>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default Inc_Button;