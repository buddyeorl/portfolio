import React, { useState } from 'react';

const ActivateOnClick = ({ children }) => {
    const [active, setActive] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setActive(!active);

    }

    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            marginRight: '10px',
            alignItems: 'center'
        }}>
            <span style={{ height: '40px', width: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', background: 'white', borderRadius: '5px', boxShadow: '-1px 2px 4px -2px', margin: '0px 10px' }} className='project' onClick={handleClick}>{active ? 'Reset' : 'Try me'} </span>
            {active && children}
        </div>
    )
}


export default ActivateOnClick;