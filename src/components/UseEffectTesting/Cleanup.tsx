import React, {useEffect, useState} from 'react';


//1. Зачистка useEffect после умирания компоненты
// const Cleanup = () => {
//     const [counter, setCounter] = useState(1)
//
//     console.log('Component rendered')
//
//     useEffect(() => {
//         console.log('Effect done')
//
//         return () => {
//             console.log('End component')
//         }
//
//     }, [])
//
//     const increase = () => setCounter(counter + 1)
//
//     return <>
//         Hello, counter:{counter}
//         <button onClick={increase}>+</button>
//     </>
// };
//
// export default Cleanup;


//2. Пример с слежением


const KeyTracker = () => {
    const [text, setText] = useState('')

    console.log('Component rendered with ' + text)

    useEffect(() => {
        const handler = (e:KeyboardEvent) => {
            console.log(e.key)
            setText((state) => state + e.key)
        }

        window.addEventListener('keypress', handler)
        return ()=>{
            window.removeEventListener('keypress', handler)
        }
    }, [])

    return <>
        Typed text:{text}
    </>
};

export default KeyTracker;

