import React from 'react';

type OnOffType = {
    on:boolean
    setSwet:()=>void
}

function OnOff({on,setSwet,...props}: OnOffType) {

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

    return (
        <div>
            <div style={onStyle} onClick={setSwet}>
                On
            </div>
            <div style={offStyle} onClick={setSwet}>
                Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default OnOff