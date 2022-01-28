import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating, {RatingPropsType, ValueType} from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/Accordion/uncontrolledAccordion';
import UncontrolledRating from './components/Rating/uncontrolledRating';
import ControledOnOff from './components/OnOff/ControledOnOff';
import {Counter} from './components/Counter/Counter';
import UseMemoTesting from './components/UseMemoTesting/UseMemoTesting';
import {UseMemoTesting2} from './components/UseMemoTesting/UseMemoTesting2';
import {UseCallbackTesting} from './components/UseCallback/UseCallbackTest';
import UseStateTesting from './components/UseStateTesting/UseStateTesting';
import UseEffectTesting from './components/UseEffectTesting/UseEffectTesting';
import SetTimeoutTraining from './components/UseEffectTesting/SetTimeoutTraining';
import {Clock} from './components/Clock/Clock';

export type TitleProps={
    title:string
    value:any
}


let items:Array<TitleProps> = [
    {title:'Red', value:1},
    {title:'White', value:2},
    {title:'Pink', value:3}
]

function App() {
    console.log('App rendering')

    let [value, setValue] = useState<ValueType>(1)
    let [collapsed, setCollapsed] = useState(true)
    let [swet, setSwet] = useState(true)

    return (
        <div>
            {/*<OnOff/>*/}
            {/*<ControledOnOff on={swet} setSwet={() => setSwet(!swet)}/>*/}
            {/*<UncontrolledAccordion titleValue={'Vine menu'}  />*/}
            {/*<UncontrolledAccordion titleValue={'Vodochka menu'}  />*/}
            {/*<UncontrolledRating/>*/}
            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<PageTitle title={'My friends'}/>*/}
            {/*<Rating value={value} setValue={setValue}/>*/}
            {/*<Accordion titleValue={'Vine menu'} collapsed={collapsed} setCollapsed={setCollapsed} items={items}/>*/}
            {/*<Accordion titleValue={'Vodochka menu'} collapsed={collapsed} setCollapsed={setCollapsed} items={items}/>*/}
            {/*<Counter/>*/}
            {/*<UseMemoTesting/>*/}
            {/*<UseMemoTesting2/>*/}
            {/*<UseCallbackTesting/>*/}
            {/*<UseStateTesting/>*/}
            {/*<UseEffectTesting/>*/}
            {/*<SetTimeoutTraining/>*/}
            <Clock/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return (
        <h1>{props.title}</h1>
    )
}


export default App;
