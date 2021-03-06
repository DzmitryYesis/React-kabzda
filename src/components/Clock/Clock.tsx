import {useEffect, useState} from 'react';
import {setInterval} from 'timers';


export const Clock = () => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])

    const secondsString = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    const minutesString = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    const hoursString = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()

    return <div>
        <span>{hoursString}</span>
        :
        <span>{minutesString}</span>
        :
        <span>{secondsString}</span>
    </div>
}