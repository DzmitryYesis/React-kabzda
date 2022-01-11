import React from "react";
import {TitleProps} from '../../App';
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed:(collapsed: boolean)=>void
    items:Array<TitleProps>
}

function Accordion({titleValue, collapsed, setCollapsed, items,...props}: AccordionPropsType) {
    console.log('Accordion rendering')
        return (
            <div>
                <AccordionTitle title={titleValue} setCollapsed={()=>setCollapsed(!collapsed)}/>
                { !collapsed && <AccordionBody items={items}/>}
            </div>
        )
    }

type AccordionTitlePropsType = {
    title: string
    setCollapsed:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (

        <h3 onClick={props.setCollapsed}>-- {props.title} --</h3>

    )
}

type BodyPropsType={
    items:Array<TitleProps>
}

function AccordionBody({items,...props}:BodyPropsType) {
    console.log('AccordionBody rendering')
    return (
        <ul>
            {
                items.map(i=><li>{i.title}</li>)
            }
        </ul>

    )
}

export default React.memo(Accordion);