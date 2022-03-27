import React from 'react';
import {Radio} from '../model/Radio'
import './RadioList.scss';
import RadioItem from "./RadioItem";

const RadioList = (props: { radios: Radio[], setCurrentRadio: Function }) => {
    return (
        <div className='RadioList'>
            {props.radios.map(radio => {
                return <RadioItem radio={radio} setCurrentRadio={props.setCurrentRadio} key={radio.frequency}/>
            })}
        </div>
    );
}

export default RadioList;