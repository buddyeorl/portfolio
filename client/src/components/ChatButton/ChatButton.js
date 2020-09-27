import React, { useEffect, useState } from 'react';
import './ChatButton.css'

const ChatButton = ({ children, label = 'Portfolio', onClick = () => { return }, size = 50, width = 60, direction = 'left', shadow = false }) => {
    const [deg, setDeg] = useState(0);
    const [timer, setTimer] = useState(shadow);
    const [trigger, setTrigger] = useState(false)

    const styles = {
        button: {
            borderStyle: 'none',
            height: (size / 50) * 50 + 'px',
            width: width + 'px',
            padding: '0px 5px',
            fontSize: '14px',
            fontWeight: 200,
            color: 'rgb(130 129 129)',
            //borderRadius: ((size / 50) * 30 + 'px ') + ((size / 50) * 28 + 'px ') + ((size / 50) * 28 + 'px ') + ((size / 50) * 7 + 'px '),
            borderRadius: direction === 'left' ? '30px 28px 28px 7px' : '30px 28px 7px 28px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1
        }
    }
    useEffect(() => {
        console.log(deg);
        if (timer && trigger) {
            let timer = setTimeout(() => {
                if (deg < 360) {
                    setDeg(deg + 36)
                } else {
                    //setTimer(false);
                    setTrigger(false);
                    setDeg(0);
                }
            }, 50)
        }
    }, [deg, trigger])

    const handleClick = (e) => {
        e.preventDefault();
        setTrigger(true);
        //received onclick
        onClick();
    }


    return (
        <React.Fragment>
            <button onClick={handleClick} className='chatButton' style={styles.button}>{children}<span>{label}</span></button>
            {shadow && <button style={{ ...styles.button, zIndex: 'unset', background: `conic-gradient(#5aea36 ${deg}deg, white 0deg 360deg )`, boxShadow: 'none', height: '60px', width: '72px', left: '-94px', marginRight: '-94px', transition: 'background 50ms' }}></button>}
        </React.Fragment>
    )
}

export default ChatButton;