import React, { useState } from 'react';

const Test = (props) => {
    // console.log(count)

    const [count, setCount] = useState(0);
    return (
        <div>

            <div className="count mt-5"></div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)} className='ms-3 p-3' >+</button>
            <button onClick={() => setCount(count - 1)} className='ms-3 p-3'>-</button>
        </div>
    );
};

export default Test;