import React from 'react';
import './Resume.css';
const Resume = () => {
    const styles = {
        wrapper: {
            position: 'fixed',
            left: '300px',
            width: 'calc(100% - 300px)',
            height: '100%',
            //color: '#464646',
            overflow: 'hidden scroll'
        }
    }
    return (
        <React.Fragment>
            <iframe className='resume' name="myiframe" id="myiframe" src="./CV JULY 2020.pdf" />
        </React.Fragment>
    )
}

export default Resume;