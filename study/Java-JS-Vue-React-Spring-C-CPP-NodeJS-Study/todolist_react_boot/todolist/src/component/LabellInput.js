import { ReportRounded } from '@material-ui/icons';
import React, { useState } from 'react';

const LabelInput = ({ label, text, ref }) => {
    const [textValue, setTextValue] = useState(text);

    const changeTextValue = (e) => {
        setTextValue(e.target.value);
    };

    const resetText = () => {
        setTextValue('');
    };

    return (
        <>
            <div ref={ref}>
                <label onClick={() => resetText()}>{label}</label>
                <input value={textValue} onChange={(e) => changeTextValue(e)} />
            </div>
        </>
    );
};

export default LabelInput;
