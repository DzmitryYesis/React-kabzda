import React, {useState} from 'react';

export const Counter = () => {

    let [x,setX]=useState(0)

    const plus = () => {
        setX(++x)
        console.log(x)

    }

    return(
        <div>
            <button onClick={plus}>+</button>
        </div>
    )

}