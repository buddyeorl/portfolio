import React from 'react';
import { useHistory, useLocation, Link } from "react-router-dom";

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
            marginBottom: 0,
            fontSize: '30px',
            fontWeight: 300,
            lineHeight: '30px',
            marginLeft: '-1px',
            color: '#525252',
            marginRight: '35px',
            textAlign: 'center'
        },
        h2: {
            marginTop: '10px',
            marginBottom: 0,
            letterSpacing: '.3px',
            fontSize: '13px',
            lineHeight: '16px',
            fontWeight: 400,
            color: '#000',
            fontFamily: 'freight-sans-pro,helvetica,sans-serif',
            marginRight: '35px',
            textAlign: 'center'
        },
        h3: {
            fontWeight: 300,
            fontSize: '13px',
            WebkitFontSmoothing: 'antialiased',
            marginRight: '35px',
            textAlign: 'center'
        }
    }


    const handleLinkClick = (path) => {
        if (location.pathname !== path) {
            loading(history, "/");
            //history.push(path);
        } else {
            console.log('same path');
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
                <h2 style={styles.h2}> Full Stack Developer</h2>
                <h3 style={styles.h3}>Full stack developer & entrepreneur <br />ReactJS, Native, NodeJS, JS, Python and more  </h3>
            </div>

        </React.Fragment>
    )
}

export default Description;