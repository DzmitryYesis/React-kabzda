import React, {useEffect, useState} from 'react';
import {setInterval} from 'timers';

const SetTimeoutTraining = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('setTimeOut training')
// 1. Выполнение в зависимости от counter через секунду
//     useEffect(()=>{
//         setTimeout(()=>{
//             console.log('timeout')
//             document.title=counter.toString()
//         }, 1000)
//     },[counter])

    // 2. Выполнение в интервал с зависимостью
    useEffect(() => {
        setInterval(() => {
            console.log('tick'+counter)
            setCounter(state=>state + 1)
        }, 1000)
    }, [])

    return <>
        Hello, counter: {counter} - fake: {fake}
        {/*<button onClick={()=>setCounter(counter+1)}>counter+</button>*/}
        {/*<button onClick={()=>setFake(fake+1)}>fake+</button>*/}
    </>
};

export default SetTimeoutTraining;