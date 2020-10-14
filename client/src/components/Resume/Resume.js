import React, { useRef } from 'react';
import './Resume.css';
import { cvFile } from '../../setup/ProjectData'
const Resume = () => {
    const something = useRef(null);
    const styles = {
        wrapper: {
            position: 'fixed',
            left: '300px',
            width: 'calc(100% - 300px)',
            height: '100%',
            // maxWidth: '800px',
            //color: '#464646',
            overflow: 'hidden scroll'
        }
    }
    return (
        <React.Fragment>
            {/* <iframe ref={something} width="400" height="500" className='resume' name="myiframe" id="myiframe" src="./CV JULY 2020.pdf" /> */}
            <object ref={something} className='resume' type="application/pdf" data={`${cvFile}#zoom=100`} id="pdf_content">
                <p>Insert your error message here, if the PDF cannot be displayed.</p>
            </object>
        </React.Fragment>
    )
}

export default Resume;