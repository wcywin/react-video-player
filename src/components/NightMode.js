import React from 'react';
import StyledNightMode from './styles/StyledNightmode';

const NightMode = props => (
    <StyledNightMode>
        <span>NightMode: </span>
        <label className="switch">
            <input type="checkbox" checked={nightMode} onChange={nightModelCallback}/>
            <span className="slider round" />
        </label>
    </StyledNightMode>
);

export default NightMode;