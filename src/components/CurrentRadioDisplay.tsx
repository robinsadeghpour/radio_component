import React from 'react';
import './CurrentRadioDisplay.scss';

const CurrentRadioDisplay = (props: { radioName: string }) => {
    return (
        <div className='CurrentRadioDisplay col center'>
            <div className='CurrentRadioLabel'>
                CURRENTLY PLAYING
            </div>
            <div className='CurrentRadioDisplayName'>
                {props.radioName}
            </div>
        </div>
    );
};

export default CurrentRadioDisplay;
