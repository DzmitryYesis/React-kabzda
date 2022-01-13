import {useMemo, useState} from 'react';
import React from 'react';

const UseCallbackTest = () => {
    console.log('UseCallback')

    const [counter, setCounter] = useState(8)
    const [users, setUsers] = useState(['Dima', 'Nastya', 'Artem', 'Elena', 'Kim'])

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [users])

    const addUser = () => {
        const mewUsers = [...users, 'Sveta ' + new Date().getTime()]
        setUsers(mewUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
};

type UserType = {
    users:Array<string>
}

const UserSecret = (props:UserType) => {
    return <div>(
        props.
        )</div>
};

const Users = React.memo(UserSecret)



export default UseCallbackTest;