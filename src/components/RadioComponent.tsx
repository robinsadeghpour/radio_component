import React, {Component, useEffect, useState} from 'react';
import './RadioComponent.scss'
import RadioList from "./RadioList";
import { Radio } from '../model/Radio'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faPowerOff} from "@fortawesome/free-solid-svg-icons";
import axios, {AxiosResponse} from "axios";
import CurrentRadioDisplay from "./CurrentRadioDisplay";
import {Exception} from "sass";

export const RadioComponent = () => {

    const [radios, setRadios] = useState<Array<Radio>>(new Array<Radio>());
    const [currentRadio, setCurrentRadio] = useState<Radio>();

    useEffect(() => {
        axios.get('https://jobapi.teclead-ventures.de/recruiting/radios')
            .then(
                (response: AxiosResponse<{ radios: Radio[] }>) => {
                    if (response.data && response.data.radios) {
                        setRadios(response.data.radios);
                    }
                });
    }, [])

    return (
        <div className='RadioComponentWrapper col'>
            <div className='RadioComponentHeader row center'>
                <FontAwesomeIcon icon={faChevronLeft} />
                <div className='RadioComponentHeaderTitle center'>STATIONS</div>
                <FontAwesomeIcon icon={faPowerOff} />
            </div>
            <RadioList radios={radios} setCurrentRadio={setCurrentRadio}/>
            <div className='RadioComponentFooter center'>
                {currentRadio &&
                    <CurrentRadioDisplay radioName={currentRadio.name}/>
                }
            </div>
        </div>
    );
}

export default RadioComponent;