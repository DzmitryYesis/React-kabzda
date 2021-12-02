import React, {useState} from 'react';
import s from './Counter.module.css'

export const Counter = () => {

    let [x, setX] = useState(0)

    const plus = () => {
        setX(x + 1)
    }
    const minus = () => {
        setX(x - 1)
    }

    return (
        <div className={s.all}>
            <div>
                <input className={s.inp} value={x}/>
            </div>
            <div className={s.but}>
                <button onClick={plus}>+</button>
                <button onClick={minus}>-</button>
            </div>
        </div>
    )

}