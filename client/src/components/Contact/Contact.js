import React, { useState, useEffect } from 'react';
import './Contact.css'
import ChatButton from '../ChatButton';
import InputTimer from '../InputTimer';
import Typing from '../../effects/Typing'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

const Contact = () => {
    const [input, setInput] = useState({});
    const [line, setLine] = useState([]);
    const [isTyping, setIsTyping] = useState(false)
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
        //typing animation starts
        console.log(input)
        if (!input.name || input.name.trim().length === 0) {
            return
        }
        setIsTyping(true);
        setLine([...line, input.name.trim()]);
        setInput({ name: '' })
    }

    const handleTyping = () => {
        //typing animation ended
        setIsTyping(false);
        console.log(line)
    }

    console.log(input)

    return (
        <React.Fragment>
            <div style={styles.wrapper}>
                <h1>Use this To Contact me.</h1>
                <div style={{ backgroundColor: 'white', height: '300px', width: '500px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'absolute' }}>
                    <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', top: 0, left: '55px', width: '60%', height: '70%' }}>
                        {/* My Intro and first question */}
                        <span style={{ top: '10px', textAlign: 'left', padding: '10px 0px' }} > <Typing label={['Hi, This is Alex, What\'s your name?']} showCursor={false} /></span>


                        {/* Name line */}
                        {line[0] && line[0] !== '' && <span style={{ top: '50px', left: '55px', textAlign: 'left', padding: '10px 0px', color: 'cadetblue', fontWeight: '300' }} > <Typing cb={handleTyping} label={[line[0]]} showCursor={false} /></span>}

                        {/* My Answer to above name */}
                        {((line[0] && !isTyping) || line.length > 1) && <span style={{ top: '110px', left: '55px', textAlign: 'left', padding: '10px 0px' }} > <Typing label={[`Nice too meet you ${line[0].split(' ')[0]} and your email please?`]} showCursor={false} /></span>}

                        {/* email line */}
                        {line[1] && line[1] !== '' && <span style={{ top: '160px', left: '55px', textAlign: 'left', padding: '10px 0px', color: 'cadetblue', fontWeight: '300' }} > <Typing cb={handleTyping} label={[line[1]]} showCursor={false} /></span>}

                        {/* My Answer to above email */}
                        {((line[1] && !isTyping) || line.length > 2) && <span style={{ top: '110px', left: '55px', textAlign: 'left', padding: '10px 0px' }} > <Typing label={[`Ok now send me a brief message`]} showCursor={false} /></span>}


                        {/* message line */}
                        {line[2] && line[2] !== '' && <span style={{ top: '160px', left: '55px', textAlign: 'left', padding: '10px 0px', color: 'cadetblue', fontWeight: '300' }} > <Typing cb={handleTyping} label={[line[2]]} showCursor={false} /></span>}

                        {/* My Answer to above message */}
                        {((line[3] && !isTyping) || line.length > 3) && <span style={{ top: '110px', left: '55px', textAlign: 'left', padding: '10px 0px' }} > <Typing label={[`Ok now send me a brief message`]} showCursor={false} /></span>}


                    </div>

                    <div style={styles.container}>
                        <EmojiEmotionsIcon style={styles.icon} />
                        <label onClick={() => console.log('i was clicked')} style={styles.label} for='name'> {(!line[0] && !input.name) && 'Name Please'} {(line[0] && !line[1] && !input.name) && 'Email Please'}  {(line[0] && line[1] && !line[2] && !input.name) && 'Brief Message'}</label>
                        {!((line[1]) || line.length > 2) && <input onChange={handleChange} className='contactInput' id='name' name='name' value={input.name} style={styles.input}></input>}
                        {((line[1]) || line.length > 2) && <textarea onChange={handleChange} style={{ ...styles.input, fontFamily: 'inherit', fontWeight: 'inherit', resize: 'none', paddingTop: '15px' }} className='contactInput' id='name' name='name' value={input.name} rows='5' />}


                        <ChatButton onClick={handleSubmit} label='send' shadow={true} />

                        {/* <div className='outer_circle'>
                            <div className='inner_circle'>

                            </div>
                        </div> */}

                    </div>

                </div>
            </div>
        </React.Fragment >
    )
}

export default Contact;