import React, {useCallback, useMemo, useState} from 'react';

const BooksSecret = (props: { books: Array<string>, addBook: () => void }) => {

    console.log('BOOKS SECRET')
    return <div>
        <button onClick={props.addBook}>add book</button>
        {
            props.books.map((b, i) => <div key={i}>{b}</div>)
        }</div>
};

const Books = React.memo(BooksSecret)


export const UseCallbackTesting = () => {
    console.log('UseCallbackTesting2')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

    // const addBooks = () => {
    //     const newBooks = [...books, 'Angular ' + new Date().getTime()]
    //     setBooks(newBooks)
    // }
    //
    // // Использование useMemo для быстродействия отрисоки
    //
    // const memoBooks = useMemo(() => {
    //     return addBooks
    // }, [books])

    // Использование useCallback для быстродействия отрисоки

    const callbackBooks = useCallback(()=>{
        const newBooks = [...books, 'Angular ' + new Date().getTime()]
        setBooks(newBooks)
    },[books])

    const newArray = useMemo(() => {
        return books.filter(b => b.toLowerCase().indexOf('a') > -1)
    }, [books])
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Books books={newArray} addBook={callbackBooks}/>
    </>
}