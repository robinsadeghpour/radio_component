import React from 'react';
import {Radio} from '../model/Radio'
import './RadioList.scss';
import RadioItem from "./RadioItem";

type RadioListProps = {
    radios: Radio[],
    setCurrentRadio: Function,
    currentRadioName: string
};

const RadioList = (props: RadioListProps) => {
    return (
        <div className='radio-list'>
            {props.radios.map(radio => {
                return <RadioItem radio={radio} setCurrentRadio={props.setCurrentRadio} key={radio.frequency}
                                  currentRadioName={props.currentRadioName}/>
            })}
        </div>
    );
};

export default RadioList;