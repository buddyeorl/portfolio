import React, { useState, useEffect } from 'react';
import './Contact.css'
import ChatButton from '../ChatButton';
import InputTimer from '../InputTimer';
import Typing from '../../effects/Typing'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

const Contact = () => {
    const [input, setInput] = useState({});
    const [line, setLine] = useState([])
    const styles = {
        wrapper: {
            position: 'fixed',
            display: 'grid',
            alignItems: 'center',
            justifyItems: 'center',
            left: '300px',
            width: 'calc(100% - 300px)',
            padding: '20px',
            height: '100%',
            overflow: 'hidden scroll'
        },
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
        },
        input: {
            borderStyle: 'none',
            //background: '#eaeaea',
            color: '#2b2b2b',
            fontSize: '20px',
            fontWeight: 500,
            width: '300px',
            height: '50px',
            padding: '0px 25px',
            //borderRadius: '5px',
            marginRight: '10px',
            boxShadow: 'rgb(192 198 204) 0px 2px 1px -1px',
        },
        button: {
            borderStyle: 'none',
            height: '50px',
            width: '60px',
            padding: '0px 5px',
            fontSize: '14px',
            fontWeight: 200,
            color: 'rgb(130 129 129)',
            borderRadius: '30px 28px 28px 7px',
            boxShadow: 'rgb(173 173 173) 0px 2px 1px -1px',
            cursor: 'pointer',
            outline: 'none'
        },
        label: {
            position: 'absolute',
            left: '25px',
            fontWeight: 200,
            fontSize: '20px',
            color: 'rgb(171 169 169)',
            cursor: 'text',
        },
        icon: {
            zIndex: 1,
            paddingRight: '5px',
            color: '#94afe0',
            position: 'absolute',
            left: '0px'
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target)
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        setLine([...line, input.name]);
        setInput('')
    }
    console.log(input)

    return (
        <React.Fragment>
            <div style={styles.wrapper}>
                <div style={{ backgroundColor: 'white', height: '300px', width: '500px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'absolute' }}>
                    <span style={{ position: 'absolute', top: '10px', left: '55px', textAlign: 'left' }} > <Typing label={['Hi, This is Alex', 'What\'s your name?']} showCursor={false} /></span>
                    {line[0] && line[0].length !== '' && <span style={{ position: 'absolute', top: '60px', left: '55px', textAlign: 'left', color: 'cadetblue', fontWeight: '300' }} > <Typing label={[line[0]]} showCursor={false} /></span>}

                    <div style={styles.container}>
                        <EmojiEmotionsIcon style={styles.icon} />
                        <label onClick={() => console.log('i was clicked')} style={styles.label} for='name'> {(!line[0] && !input.name) && 'Name Please'}</label>
                        <input onChange={handleChange} className='contactInput' id='name' name='name' style={styles.input}></input>
                        <ChatButton onClick={handleSubmit} label='send' shadow={true} />

                        {/* <div className='outer_circle'>
                            <div className='inner_circle'>

                            </div>
                        </div> */}

                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact;