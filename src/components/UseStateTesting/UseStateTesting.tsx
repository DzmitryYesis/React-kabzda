import React, {useMemo, useState} from 'react';

function generationData() {
    console.log('Initial State')
    return 1
}

const UseStateTesting = () => {
    console.log('UseState testing')

    // 1. Вариант недопущения перевызова и отрисовки функции генерации начального значения с помощью useMemo
    // const initialState = useMemo(generationData,[])
    // const [counter, setCounter]=useState(initialState)

    // 2. Вариант меньшего кода с тем же результатом
    const [counter, setCounter]=useState(generationData)

    const changer = (state:number) => {
      return state+1
    }
    // 3. В setCounter можно использовать функцию, а не простую запись. Пока не понятно где это может понадобиться
    return <>
    <button onClick={()=> setCounter(changer)}>+</button>
        {counter}
    </>
};

export default UseStateTesting;