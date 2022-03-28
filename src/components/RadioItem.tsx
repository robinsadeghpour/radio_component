import React from 'react';
import './RadioItem.scss';
import {Radio} from "../model/Radio";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinusCircle, faPlusCircle} from '@fortawesome/free-solid-svg-icons'

const RadioItem = (props: { radio: Radio, setCurrentRadio: Function, currentRadioName: string }) => {


    const handleOnClick = (radio: Radio) => {
        props.currentRadioName === props.radio.name ? props.setCurrentRadio(null) : props.setCurrentRadio(radio)
    }

    const isCurrentRadio = () => {
        return props.currentRadioName === props.radio.name
    }

    return (
        <div className='col' onClick={() => handleOnClick(props.radio)}>
            <div className='RadioItem row center'>
                <div className='RadioName'>
                    {props.radio.name}
                </div>
                <div className='RadioFrequency'>
                    {props.radio.frequency}
                </div>
            </div>
            <div className={isCurrentRadio() ? 'RadioItemActive row center space-between' : 'RadioItemInactive'}>
                <div className='col center'>
                    <FontAwesomeIcon icon={faPlusCircle}/>
                </div>
                <div className='RadioItemImage col center'>
                    <img src={props.radio.image} alt='radio'/>
                </div>
                <div className='col center'>
                    <FontAwesomeIcon icon={faMinusCircle}/>
                </div>
            </div>
        </div>
    );
};

export default RadioItem;
