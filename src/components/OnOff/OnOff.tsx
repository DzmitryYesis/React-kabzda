import React, {useState} from 'react';
import {log} from 'util';

function OnOff() {

    let [on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'Inline-block',
        padding: '2px',
        background: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'Inline-block',
        padding: '2px',
        marginLeft: '5px',
        background: !on ? 'red' : 'white'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'Inline-block',
        marginLeft: '5px',
        background: on ? 'green' : 'red'
    }

    const onClickHandler = () => setOn(true)
    const OffClickHandler = () => setOn(false)
    console.log('OnOff')
    return (
        <div>
            <div style={onStyle} onClick={onClickHandler}>
                On
            </div>
            <div style={offStyle} onClick={OffClickHandler}>
                Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default React.memo(OnOff)