import React, { useEffect, useState } from 'react';
import './ChatButton.css'

const ChatButton = ({ children, label = 'Portfolio', onClick = () => { return }, size = 50, width = 60, direction = 'left', shadow = false, send = false }) => {
    const [deg, setDeg] = useState(0);
    const [timer, setTimer] = useState(shadow);
    const [trigger, setTrigger] = useState(false);
    const [sendAfterDelay, setSendAfterDelay] = useState(false);
    const [shadowEffect, setShadowEffect] = useState(false);

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
        },
        shadow: {
            borderStyle: 'none',
            zIndex: 'unset',
            borderRadius: direction === 'left' ? '30px 28px 28px 7px' : '30px 28px 7px 28px',
            padding: '0px 5px',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: `conic-gradient(#5aea36 ${deg}deg, white 0deg 360deg )`,
            boxShadow: 'none',
            height: (size) * 1.2 + 'px',
            width: width * 1.2 + 'px',
            left: '-94px',
            marginRight: '-94px',
            transition: 'background 50ms'
        },
        send: {
            width: '375px',
            borderRadius: '5px',
            color: 'black',
            position: 'absolute',
            // left: 'calc(50% - 30px)'
        },
        sendShadow: {
            width: 'calc(100%)',
            //position: 'absolute',
            left: -100 + 'px',
            //marginRight: -441 + 'px',
            borderRadius: '5px',
            //marginRight: '-176px'
        }
    }
    useEffect(() => {
        let timer1;
        if (timer && trigger) {
            timer1 = setTimeout(() => {
                if (deg < 360) {
                    setDeg(deg + 36)
                } else {
                    //setTimer(false);
                    setTrigger(false);
                    setDeg(0);
                }
            }, 50)
        }
        return () => { clearTimeout(timer1); }
    }, [deg, trigger])

    useEffect(() => {
        //send button trigger
        setSendAfterDelay(send)
        //shadow effect delay
        setShadowEffect(send)
        // //send button trigger
        // let timer = setTimeout(() => { setSendAfterDelay(send) }, 0);
        // //shadow effect delay
        // let timer2 = setTimeout(() => { setShadowEffect(send) }, 0);
        //return () => { clearTimeout(timer); clearTimeout(timer2); }
    }, [send])

    const handleClick = (e) => {
        e.persist();
        setTrigger(true);
        //received onclick
        onClick(e);
    }


    return (
        <React.Fragment>
            <button onClick={handleClick} className={(!sendAfterDelay) ? 'chatButton' : 'sendButton'} style={{ ...styles.button, ...(sendAfterDelay && styles.send) }}>{children}<span>{label}</span></button>
            {/* {shadow && <button style={{ ...styles.button, zIndex: 'unset', background: `conic-gradient(#5aea36 ${deg}deg, white 0deg 360deg )`, boxShadow: 'none', height: '60px', width: '72px', left: '-94px', marginRight: '-94px', transition: 'background 50ms' }}></button>} */}
            {shadow && <button style={{
                ...styles.shadow, ...shadowEffect && styles.sendShadow
            }}></button>}

        </React.Fragment>
    )
}

export default ChatButton;