import React, {useState} from 'react';

export const Counter = () => {

    let [x,setX]=useState(0)

    const plus = () => {
        setX(x+1)
    }
    const minus = () => {
        setX(x-1)
    }

    return(
        <div>
            <div>
                <input value={x}/>
            </div>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </div>
    )

}