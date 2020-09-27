import React from 'react';
import './InputTimer.scss'

const InputTimer = () => {
    const styles = {
        button: {
            borderStyle: 'none',
            height: 50 + 'px',
            width: '60px',
            padding: '0px 5px',
            fontSize: '14px',
            fontWeight: 200,
            color: 'rgb(130 129 129)',
            //borderRadius: ((size / 50) * 30 + 'px ') + ((size / 50) * 28 + 'px ') + ((size / 50) * 28 + 'px ') + ((size / 50) * 7 + 'px '),
            borderRadius: '30px 28px 28px 7px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    }
    return (
        <section className="buttons">
            <button className='spin circle' ><span>timer</span></button>
        </section>
    )
}

export default InputTimer;