import React from 'react';
import { useHistory, useLocation, Link } from "react-router-dom";

//import user data
import { ownerInfo } from '../../../setup/ProjectData.js';

const Description = ({ loading }) => {
    const history = useHistory();
    const location = useLocation();

    const styles = {

        a: {
            textDecoration: 'none',
            color: '#8b8b8b',
            fontWeight: 700
        },
        h1: {
            marginTop: '15px',
            marginBottom: '3px',
            paddingBottom: '3px',
            fontSize: '30px',
            fontWeight: 300,
            lineHeight: '30px',
            marginLeft: '-1px',
            color: '#525252',
            marginRight: '0px',
            textAlign: 'center'
        },
        h2: {
            marginTop: '0px',
            marginBottom: 0,
            letterSpacing: '.3px',
            fontSize: '13px',
            lineHeight: '16px',
            fontWeight: 400,
            color: '#000',
            fontFamily: 'freight-sans-pro,helvetica,sans-serif',
            marginRight: '0px',
            textAlign: 'center'
        },
        h3: {
            fontWeight: 300,
            fontSize: '13px',
            WebkitFontSmoothing: 'antialiased',
            marginRight: '0px',

        }
    }


    const handleLinkClick = (path) => {
        if (location.pathname !== path) {
            loading(history, "/");
        }

    }


    return (
        <React.Fragment>

            <Link onClick={(e) => { e.preventDefault(); handleLinkClick('/') }} to='/' style={styles.a}>
                <h1 className='project' style={styles.h1}>
                    Alex Lizarraga
        </h1>
            </Link>
            <div>
                <h2 style={styles.h2}> {ownerInfo.title}</h2>
                <h3 style={styles.h3}>{ownerInfo.description} </h3>
                {/* <h3 style={styles.h3}>Full stack developer & entrepreneur <br />ReactJS, Native, NodeJS, JS, Python and more  </h3> */}
            </div>

        </React.Fragment>
    )
}

export default Description;