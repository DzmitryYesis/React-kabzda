import React, {useEffect, useState} from 'react';

const UseEffectTesting = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake]=useState(1)

    console.log('UseEffect Training')
    // useEffect(() => {
    //     console.log('useEffect')
    //     //api.getUsers().then('')   - запрос на сервер
    //     // setInterval              - установка интервалов
    //     // indexedDB                - работа с базой данных
    //     //document.getElementId     - обращение к элементу
    //     document.title=counter.toString()     //- изменение заголовка документа
    //         // Все это - грязь которая не может использоватся в чистой функции, но через useEffect можно
    // })

    // 1. Сработает каждый раз при перерисовке компаненты
    useEffect(() => {
        console.log('useEffect every render')
        document.title=counter.toString()
    })

    // 2. Сработает лишь при первой отрисовке компоненты
    useEffect(() => {
        console.log('useEffect render only first render')
        document.title=counter.toString()
    },[])

    // 3. сработает каждый раз, когда изменится counter
    useEffect(() => {
        console.log('useEffect render only when `counter` changed')
        document.title=counter.toString()
    }, [counter])

    return <>
        Hello, {counter}{fake}
        <button onClick={() => setFake(fake + 1)}>fake</button>
        <button onClick={() => setCounter(counter + 1)}>counter</button>
    </>
};

export default UseEffectTesting;