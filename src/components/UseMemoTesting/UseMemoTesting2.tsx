import React, {useMemo, useState} from 'react';

const UsersSecret = (props: { users: Array<string> }) => {

    console.log('USERSSECRET')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
};

const Users = React.memo(UsersSecret)


export const UseMemoTesting2 = () => {
    console.log('UseMemoTesting2')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dima', 'Iren', 'Ken', 'Tanya','vasa'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Users users={newArray}/>
    </>
}