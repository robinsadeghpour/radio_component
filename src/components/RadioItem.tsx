import React from 'react';
import './RadioItem.scss';
import {Radio} from "../model/Radio";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinusCircle, faPlusCircle} from '@fortawesome/free-solid-svg-icons'

type RadioItemProps = {
    radio: Radio,
    setCurrentRadio: Function,
    currentRadioName: string
};

const RadioItem = (props: RadioItemProps) => {

    const handleOnClick = (radio: Radio) => {
        props.setCurrentRadio(isCurrentRadioSelected() ? null : radio);
    };

    const isCurrentRadioSelected = () => {
        return props.currentRadioName === props.radio.name;
    };

    return (
        <div className='col'>
            <div className='radio-item row center' onClick={() => handleOnClick(props.radio)}>
                <div className='radio-name'>
                    {props.radio.name}
                </div>
                <div className='radio-frequency'>
                    {props.radio.frequency}
                </div>
            </div>
            <div
                className={isCurrentRadioSelected() ? 'radio-item-active row center space-between' : 'radio-item-inactive'}>
                <div className='col center'>
                    <FontAwesomeIcon icon={faMinusCircle}/>
                </div>
                <div className='radio-item-image col center'>
                    <img src={props.radio.image} alt='radio'/>
                </div>
                <div className='col center'>
                    <FontAwesomeIcon icon={faPlusCircle}/>
                </div>
            </div>
        </div>
    );
};

export default RadioItem;
