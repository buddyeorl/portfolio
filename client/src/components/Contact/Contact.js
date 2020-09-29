import React, { useState, useEffect } from 'react';
import './Contact.css'
import ChatButton from '../ChatButton';
import InputTimer from '../InputTimer';
import Typing from '../../effects/Typing'
import FaceIcon from '@material-ui/icons/Face';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import CommentIcon from '@material-ui/icons/Comment';


const SlideOnLoad = ({ children, direction = 'right', initial = '0px', end = '20px' }) => {
    const [trigger, setTrigger] = useState(false)
    const [transform, setTransform] = useState()


    console.log('got here again', direction)
    useEffect(() => {
        console.log('waiting')
        let timer = setTimeout(() => {
            console.log('triggered')
            setTrigger(true)
        }, 700)

        return () => { clearTimeout(timer) }
    }, [])

    useEffect(() => {
        switch (direction) {
            case 'right':
                setTransform(trigger ? `translate(0px)` : `translate(-${end}px)`);
                break;
            case 'left':
                setTransform(trigger ? `translate(0px)` : `translate(${end}px)`);
                break;
            case 'up':
                setTransform(trigger ? `translateY(0px)` : `translateY(-${end}px)`);
                break;
            case 'down':
                setTransform(trigger ? `translateY(0px)` : `translateY(${end}px)`);
                break;
            case 'custom':
                console.log('custom')
                setTransform(trigger ? `translate(${initial})` : `translate(${end})`);
                break;
            default:
                setTransform(trigger ? 'translate(0px)' : `translate(-${end}px)`);
        }
    }, [direction])



    return (
        <span style={{ width: '100%', position: 'absolute', margin: 0, padding: 0, display: 'grid', gridArea: children.props.style.gridArea, alignContent: 'center', justifyContent: 'center', transform: transform, transition: 'transform 700ms' }}>
            {children}
        </span>
    )
}

const Contact = () => {
    const [input, setInput] = useState({});
    const [line, setLine] = useState([]);
    const [editInput, setEditInput] = useState(-1);
    const [isTyping, setIsTyping] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    const messages = [
        ['Hi, This is Alex, What\'s your name?'],
        [`Nice too meet you ${line[0] && line[0].split(' ')[0]} and your email please?`],
        [`Ok now send me a brief message`],
        [`Ready to send??`],
        [`Your message has been sent, I'll get back to you soon`]
    ]

    useEffect(() => {
        let timer;
        //name, email and message are complete
        if ((line[2]) && line[2].length > 0) {
            let timer = setTimeout(() => {
                setIsComplete(true);
            }, 500)
        }
        return () => { clearTimeout(timer) }
    }, [line]);

    console.log(messages)
    const styles = {
        // wrapper: {
        //     position: 'fixed',
        //     display: 'grid',
        //     alignItems: 'center',
        //     justifyItems: 'center',
        //     left: '300px',
        //     width: 'calc(100% - 300px)',
        //     padding: '20px',
        //     height: '100%',
        //     overflow: 'hidden scroll'
        // },
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            position: 'relative',
            width: '390px'
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
            //position: 'absolute',
            //left: '25px',
            fontWeight: 200,
            fontSize: '20px',
            color: 'rgb(171 169 169)',
            cursor: 'text',
        },
        icon: {
            //zIndex: 1,
            paddingRight: '5px',
            color: '#94afe0',
            //position: 'absolute',
            //left: '0px'
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

    const handleEdit = (editItem = 0) => {
        console.log('editing now');
        setEditInput(editItem);
    }
    console.log(editInput)
    console.log(line)
    console.log(input)

    return (
        <React.Fragment>
            {/* <div style={styles.wrapper}> */}

            <div style={{ backgroundColor: 'white', height: '300px', width: '500px', display: 'inline-grid', justifyContent: 'center', alignItems: 'flex-end', alignSelf: 'flex-start', position: 'absolute' }}>
                <h1 style={{ justifySelf: 'flex-start' }}>Use this to Contact me.</h1>
                <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', top: 0, left: '55px', width: '60%', height: '70%' }}>
                    {/* My Intro and first question */}
                    {!line[0] && <span style={{ top: '10px', textAlign: 'left', padding: '10px 0px' }} > <Typing label={messages[0]} showCursor={false} /></span>}


                    {/* Name line */}
                    {/* {line[0] && line[0] !== '' && <span style={{ top: '50px', left: '55px', textAlign: 'left', padding: '10px 0px', color: 'cadetblue', fontWeight: '300' }} > <Typing cb={handleTyping} label={[line[0]]} showCursor={false} /></span>} */}

                    {/* My Answer to above name */}
                    {/* {((line[0] && !isTyping) || line.length > 1) && <span style={{ top: '110px', left: '55px', textAlign: 'left', padding: '10px 0px' }} > <Typing label={[`Nice too meet you ${line[0].split(' ')[0]} and your email please?`]} showCursor={false} /></span>} */}
                    {!line[1] && ((line[0]) || line.length > 1) && <span style={{ top: '110px', left: '55px', textAlign: 'left', padding: '10px 0px' }} > <Typing label={messages[1]} showCursor={false} /></span>}



                    {/* email line */}
                    {/* {line[1] && line[1] !== '' && <span style={{ top: '160px', left: '55px', textAlign: 'left', padding: '10px 0px', color: 'cadetblue', fontWeight: '300' }} > <Typing cb={handleTyping} label={[line[1]]} showCursor={false} /></span>} */}

                    {/* My Answer to above email */}
                    {/* {((line[1] && !isTyping) || line.length > 2) && <span style={{ top: '110px', left: '55px', textAlign: 'left', padding: '10px 0px' }} > <Typing label={[`Ok now send me a brief message`]} showCursor={false} /></span>} */}
                    {!line[2] && ((line[1]) || line.length > 2) && <span style={{ top: '110px', left: '55px', textAlign: 'left', padding: '10px 0px' }} > <Typing label={messages[2]} showCursor={false} /></span>}


                    {/* message line */}
                    {/* {line[2] && line[2] !== '' && <span style={{ top: '160px', left: '55px', textAlign: 'left', padding: '10px 0px', color: 'cadetblue', fontWeight: '300' }} > <Typing cb={handleTyping} label={[line[2]]} showCursor={false} /></span>} */}

                    {/* My Answer to above message */}
                    {/* {((line[3] && !isTyping) || line.length > 3) && <span style={{ top: '110px', left: '55px', textAlign: 'left', padding: '10px 0px' }} > <Typing label={messages[3]} showCursor={false} /></span>} */}
                    {!line[3] && ((line[2]) || line.length > 3) && <span style={{ top: '110px', left: '55px', textAlign: 'left', padding: '10px 0px' }} > <Typing label={messages[3]} showCursor={false} /></span>}


                </div>

                <div style={styles.container}>
                    <div style={{ position: 'absolute', left: 0, display: 'inline-flex' }}>
                        {!line[0] && <FaceIcon style={styles.icon} />}
                        {!line[1] && ((line[0]) || line.length > 1) && <AlternateEmailIcon style={styles.icon} />}
                        {!line[2] && ((line[1]) || line.length > 2) && <CommentIcon style={styles.icon} />}
                        <label onClick={() => console.log('i was clicked')} style={styles.label} for='name'> {(!line[0] && !input.name) && 'Name Please'} {(line[0] && !line[1] && !input.name) && 'Email Please'}  {(line[0] && line[1] && !line[2] && !input.name) && 'Brief Message'}</label>
                    </div>

                    {editInput !== 0 && (line[0] || line.length > 1) &&
                        <SlideOnLoad direction='down' end={60}>
                            <table onClick={(e) => { e.preventDefault(); handleEdit(0) }} style={{ position: 'absolute', left: 0, display: 'inline-flex', top: '32px' }}>
                                <td><FaceIcon style={styles.icon} /></td>
                                {/* <td style={{ width: '85px', textAlign: 'left' }}><label onClick={() => console.log('i was clicked')} style={styles.label} for='name'> Name: </label></td> */}
                                <td style={{ marginLeft: '10px' }}><span style={styles.label}>{line[0]}</span></td>
                            </table>
                        </SlideOnLoad>
                    }

                    {editInput !== 1 && (line[1] || line.length > 2) &&
                        <SlideOnLoad direction='down' end={100}>
                            <table onClick={(e) => { e.preventDefault(); handleEdit(1) }} style={{ position: 'absolute', left: 0, display: 'inline-flex', top: '32px' }}>
                                <td><AlternateEmailIcon style={styles.icon} /></td>
                                {/* <td style={{ width: '85px', textAlign: 'left' }}><label onClick={() => console.log('i was clicked')} style={styles.label} for='name'> Email: </label></td> */}
                                <td style={{ marginLeft: '10px' }}><span style={styles.label}>{line[1]}</span></td>
                            </table>
                        </SlideOnLoad>
                    }
                    {editInput !== 2 && (line[2] || line.length > 3) &&
                        <SlideOnLoad direction='down' end={140}>
                            <table onClick={(e) => { e.preventDefault(); handleEdit(2) }} style={{ position: 'absolute', left: 0, display: 'inline-flex', top: '32px' }}>
                                <td><CommentIcon style={styles.icon} /></td>
                                {/* <td style={{ width: '85px', textAlign: 'left' }}><label onClick={() => console.log('i was clicked')} style={styles.label} for='name'> Message: </label></td> */}
                                <td style={{ marginLeft: '10px', textAlign: 'left' }}><span style={styles.label}>{line[2]}</span></td>
                            </table>
                        </SlideOnLoad>
                    }


                    {/* <div style={{ position: 'absolute', left: 0, display: 'inline-flex' }}>
                        <EmojiEmotionsIcon style={styles.icon} />
                        <label onClick={() => console.log('i was clicked')} style={styles.label} for='name'> {(!line[0] && !input.name) && 'Name Please'} {(line[0] && !line[1] && !input.name) && 'Email Please'}  {(line[0] && line[1] && !line[2] && !input.name) && 'Brief Message'}</label>
                    </div> */}

                    {!(line[1] || line.length > 2) && <input onChange={handleChange} className='contactInput' id='name' name='name' value={input.name} style={styles.input}></input>}
                    {!isComplete && ((line[1]) || line.length > 2) && <textarea onChange={handleChange} style={{ ...styles.input, fontFamily: 'inherit', fontWeight: 'inherit', resize: 'none', paddingTop: '15px' }} className='contactInput' id='name' name='name' value={input.name} rows='5' />}

                    {(editInput === 0) &&
                        <React.Fragment>
                            <div style={{ position: 'absolute', left: 0, display: 'inline-flex' }}>
                                <FaceIcon style={styles.icon} />
                                <label onClick={() => console.log('i was clicked')} style={styles.label} for='name'>Name Please</label>
                            </div>
                            <input onChange={handleChange} className='contactInput' id='name' name='name' value={input.name} style={styles.input} />
                        </React.Fragment>
                    }


                    <ChatButton onClick={handleSubmit} label='send' shadow={true} send={(editInput === -1 && line.length >= 3)} />

                    {/* <div className='outer_circle'>
                            <div className='inner_circle'>

                            </div>
                        </div> */}

                </div>

            </div>
            {/* </div> */}
        </React.Fragment >
    )
}

export default Contact;