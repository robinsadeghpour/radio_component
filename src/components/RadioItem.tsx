import React from 'react';
import './RadioItem.scss';
import {Radio} from "../model/Radio";

const RadioItem = (props: { radio: Radio, setCurrentRadio: Function }) => {

    const handleOnClick = (radio: Radio) => {
        props.setCurrentRadio(radio)
        // TODO component ausklappen
    }

    return (
        <div className='RadioItem row' onClick={() => handleOnClick(props.radio)}>
            <div className='RadioName'>
                {props.radio.name}
            </div>
            <div className='RadioFrequency'>
                {props.radio.frequency}
            </div>
        </div>
    );
};

export default RadioItem;
