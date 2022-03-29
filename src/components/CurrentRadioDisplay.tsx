import React from 'react';
import './CurrentRadioDisplay.scss';

const CurrentRadioDisplay = (props: { radioName: string }) => {
    return (
        <div className='current-radio-display col center'>
            <div className='current-radio-label'>
                CURRENTLY PLAYING
            </div>
            <div className='current-radio-display-name'>
                {props.radioName}
            </div>
        </div>
    );
};

export default CurrentRadioDisplay;
