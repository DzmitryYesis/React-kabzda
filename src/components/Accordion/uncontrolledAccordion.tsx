import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

    let [collapsed, setCollapsed]=useState(false)

        return (
            <div>
                <AccordionTitle title={props.titleValue} setCollapsed={setCollapsed} collapsed={collapsed}/>
                { !collapsed && <AccordionBody/>}
            </div>
        )
    }

type AccordionTitlePropsType = {
    title: string
    collapsed:boolean
    setCollapsed:(collapsed:boolean)=>void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')

    const onClickAccordionTitleHandler = () => props.setCollapsed(!props.collapsed)


    return (

        <h3 onClick={onClickAccordionTitleHandler}>-- {props.title} --</h3>

    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (

        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>

    )
}

export default UncontrolledAccordion;