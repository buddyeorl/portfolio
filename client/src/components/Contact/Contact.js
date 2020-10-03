import React, { useState, useEffect } from 'react';
import './Contact.css'
import ChatButton from '../ChatButton';
import InputTimer from '../InputTimer';
import Typing from '../../effects/Typing'
import FaceIcon from '@material-ui/icons/Face';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import CommentIcon from '@material-ui/icons/Comment';

//custom hook
import useWindowsSize from '../../hooks/Dimms/useWindowSize'


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
        <span style={{ width: '100%', position: 'absolute', margin: 0, padding: 0, display: 'grid', gridArea: children.props.style.gridArea, alignContent: 'center', justifyContent: 'center', transform: transform, transition: 'transform 700ms', overflow: 'initial' }}>
            {children}
        </span>
    )
}


const Input = ({ messages = [
    { add: ['Hi, This is Alex, What\'s your name?'], edit: ['Oh Sorry, what was your name again?'] },
    { add: [`Nice too meet you, now tell me your email?`], edit: ['Could you please tell me your email one more time?'], type: 'email' },
    { add: [`Ok now send me a brief message`], edit: ['Did you forget to tell me something?'], type: 'textarea' },
    [`Ready to send??`],
    [`Thanks for your message, I'll get back to you soon`]
], labels = ['Name Please', 'Email Please', 'Brief Message'] }) => {

    const [width, height] = useWindowsSize();

    const [cur, setCur] = useState(0);
    const [input, setInput] = useState({});
    const [inputArray, setInputArray] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [error, setError] = useState(false)

    // related to typing component cb and messages
    const [isTyping, setIsTyping] = useState(false);
    const [messageToType, setMessageToType] = useState(messages[0].add);

    //initialize with an array of length = labels.length
    const [inputStatus, setInputStatus] = useState(Array(labels.length).fill({}));

    //initialize sending status
    const [sending, setSending] = useState(false)


    const handleTyping = () => {
        //typing animation ended
        setIsTyping(false);
    }


    const styles = {
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: editMode ? 'center' : 'flex-end',
            position: 'relative',
            width: width > 500 ? '390px' : 'calc(100% - 45px)',
            overflow: 'visible'
        },
        icon: {
            //zIndex: 1,
            paddingRight: '5px',
            color: '#94afe0',
            //position: 'absolute',
            //left: '0px'
        },
        label: {
            //position: 'absolute',
            //left: '25px',
            fontWeight: 200,
            fontSize: '20px',
            color: 'rgb(171 169 169)',
            cursor: 'text',
            marginLeft: '10px'
        },
        input: {
            borderStyle: 'none',
            //background: '#eaeaea',
            color: '#2b2b2b',
            fontSize: '20px',
            fontWeight: 500,
            width: width > 500 ? '300px' : '100%',
            height: '50px',
            padding: width > 500 ? '0px 27px' : '0px 35px',
            borderRadius: '0px',
            marginRight: '10px',
            boxShadow: 'rgb(192 198 204) 0px 2px 2px -2px',
            WebkitAppearance: 'none'
        }
    }


    const icons = [<FaceIcon style={styles.icon} />, <AlternateEmailIcon style={styles.icon} />, <CommentIcon style={styles.icon} />]

    const validateInput = (data, type) => {
        const validateEmail = (email) => {
            let re = /^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(email)) {
                return false
            }
            return true
        }

        if (type === 'email') {
            return validateEmail(data)
        }

        return true
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.name || input.name.trim().length === 0 || cur > labels.length - 1) {
            setMessageToType(['oh I forgot to tell you, no empty fields are allowed, please try again']);
            return
        }


        if (messages[cur].type && messages[cur].type === 'email') {
            setError(validateInput(input.name.trim()));
            if (!validateInput(input.name.trim(), 'email')) {
                setMessageToType(['hmmm this doesn\'t look like an email, please try again']);
                return
            }
        }


        //typing animation starts
        setIsTyping(true);
        setError(false);

        //set all existing status to idle, so list of completed inputs wont render with the slide down effect
        let tempStatus = inputStatus.map(item => {
            if (item.status && (item.status === 'new' || item.status === 'edit')) {
                item.status = 'idle';
                return item
            } else {
                return item
            }
        });

        tempStatus[cur] = { status: 'new', value: input.name.trim() }

        //set new input status with the tempStatus object including new input
        setInputStatus(tempStatus);

        //reset input
        setInput({ name: '' });

        //increase current counter to show next input
        setCur(cur + 1);


        //if all itemstatus are filled, then show submit button
        if (inputStatus.every(item => (item.status))) {
            //delay ==true will delay input box render in case user tries to edit any of the inputs before sending, 
            setCur(inputStatus.length)
            setMessageToType(messages[inputStatus.length]);
        } else {
            setMessageToType(messages[cur + 1].add ? messages[cur + 1].add : messages[cur + 1]);
        }
    }

    useEffect(() => {
        if (!editMode) {
            setTimeout(() => {
                setEditMode(inputStatus.every(item => (item.status && item.status !== 'edit')))
            }, 480)
        } else {
            setEditMode(inputStatus.every(item => (item.status && item.status !== 'edit')))
        }


    }, [inputStatus])

    const handleChange = (e) => {
        e.preventDefault();
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleEdit = (newCur) => {

        let tempStatus = inputStatus.map(item => {
            if (item.status && (item.status === 'new' || item.status === 'edit')) {
                item.status = 'idle';
                return item
            } else {
                return item
            }
        });

        //set current input to edit mode
        tempStatus[newCur].status = 'edit';

        setInputStatus(tempStatus);
        setCur(newCur);
        //show correct message to show.
        setMessageToType(messages[newCur].edit);

        //set input with the previous input value
        setInput({ name: tempStatus[newCur].value })

    }

    const sendForm = (e) => {
        e.preventDefault();
        //change state to sending
        setTimeout(() => {
            setSending(true);
            setMessageToType(messages[messages.length - 1])
        }, 500)

        console.log('fetching something here')
        //change state to not sending
        //setSending(false);
    }
    console.log('sending', sending)
    return <React.Fragment>

        {/* message to be typed */}
        <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', top: 0, left: width > 500 ? '55px' : '0px', width: width > 500 ? '60%' : '100%', height: width > 500 ? '77%' : '77%', marginTop: '10px', }}>
            <span style={{ top: '10px', textAlign: 'left', padding: '10px 0px', ...(width <= 500 && { padding: '10px 25px' }) }} >
                <Typing cb={handleTyping} error={error} label={messageToType} showCursor={false} />
            </span>
        </div>

        {!sending ?

            <div style={styles.container}>
                {/* Icon and Label for this input */}
                <div style={{ position: 'absolute', left: 0, display: 'inline-flex' }}>
                    {icons && icons[cur] && icons[cur]}
                    <label onClick={() => console.log('i was clicked')} style={styles.label} htmlFor='name'> {!input.name && labels[cur]}</label>
                </div>



                {/* List of completed inputs */}
                {inputStatus.map((item, index) => {
                    if (!item.status || item.status === 'edit') {
                        return
                    } else {
                        return (
                            <SlideOnLoad direction='down' end={(index + 1) * (width > 500 ? 40 : 30)}>
                                <table onClick={(e) => { e.preventDefault(); handleEdit(index) }} style={{ position: 'absolute', left: 0, display: 'inline-flex', top: '20px' }}>
                                    <td>{icons && icons[index] && icons[index]}</td>
                                    <td style={{ marginLeft: '10px', textAlign: 'left' }}><span style={{ ...styles.label, marginLeft: '0px', color: 'rgb(77 150 214)', cursor: 'pointer' }}>{item.value}</span></td>
                                </table>
                            </SlideOnLoad>
                        )
                    }

                })}


                {/* input here */}
                {!editMode &&
                    <React.Fragment>
                        {messages[cur].type === 'textarea' ?
                            <textarea maxlength="150" onChange={handleChange} style={{ ...styles.input, fontFamily: 'inherit', fontWeight: 'inherit', resize: 'none', paddingTop: '15px' }} className='contactInput' id='name' name='name' value={input.name} rows='5' />
                            :
                            <input onChange={handleChange} className='contactInput' id='name' name='name' value={input.name} style={styles.input} />
                        }
                        <ChatButton onClick={handleSubmit} label='send' shadow={true} />
                    </React.Fragment>
                }






                {/* submit button will be showing if all status in inputStatus are completed and not in edit mode */}
                {editMode &&
                    <ChatButton onClick={sendForm} label='send' shadow={true} send={editMode} />
                }
            </div>
            :
            <React.Fragment>
                <div style={styles.container} >
                    <div style={{ height: '88px' }} />
                </div>
            </React.Fragment>
        }

    </React.Fragment>
}


const Contact = ({ standAlone = false }) => {
    const [width, height] = useWindowsSize();
    const styles = {
        contactWrapper: {
            position: !standAlone ? 'fixed' : 'inherit',
            display: !standAlone ? 'grid' : 'contents',
            alignItems: 'center',
            justifyItems: 'center',
            left: width > 980 ? '300px' : '0px',
            width: width > 980 ? 'calc(100% - 300px)' : '100%',
            padding: '20px',
            height: '100%',
            overflow: 'hidden scroll'
        },
        container: {
            backgroundColor: 'white',
            height: '300px',
            width: width > 500 ? '500px' : '100%',
            display: 'grid',
            justifyItems: 'center',
            justifyContent: 'center',
            alignItems: 'flex-end',
            alignSelf: 'flex-start',
            position: 'absolute',
            overflow: 'visible'
        },
        h1: {
            justifySelf: 'center',
            fontWeight: 400,
            color: 'rgb(82, 82, 82)'
        },
        h2: {
            justifySelf: 'center',
            lineHeight: '20px',
            fontWeight: 300,
            fontSize: '20px',
            textAlign: 'left',
            color: 'rgb(82, 82, 82)',
            ...(width <= 980 && {
                //padding: '5px 10px',
                textAlign: 'justify',
                fontSize: '16px',
            })
        }
    }

    return (
        <div style={styles.contactWrapper}>
            <div style={styles.container}>
                <div style={{ width: width > 980 ? '390px' : '100%', padding: width > 980 ? 'unset' : '25px' }}>
                    <h1 style={styles.h1}>Contact me</h1>
                    <h2 style={styles.h2}>Want to talk about a project you need help with, want to talk about this portfolio, or simply want to say hi? </h2>
                </div>
                <Input />
            </div>
        </div>
    )

}




// const Contact = () => {
//     const [input, setInput] = useState({});
//     const [line, setLine] = useState([]);
//     const [editInput, setEditInput] = useState(-1);
//     const [newInput, setNewInput] = useState('')
//     const [isTyping, setIsTyping] = useState(false);
//     const [isComplete, setIsComplete] = useState(false);

//     const messages = [
//         ['Hi, This is Alex, What\'s your name?'],
//         [`Nice too meet you ${line[0] && line[0].split(' ')[0]} and your email please?`],
//         [`Ok now send me a brief message`],
//         [`Ready to send??`],
//         [`Your message has been sent, I'll get back to you soon`]
//     ]

//     useEffect(() => {
//         let timer;
//         //name, email and message are complete
//         if ((line[2]) && line[2].length > 0) {
//             let timer = setTimeout(() => {
//                 setIsComplete(true);
//             }, 500)
//         }
//         return () => { clearTimeout(timer) }
//     }, [line]);

//     console.log(messages)
//     const styles = {
//         // wrapper: {
//         //     position: 'fixed',
//         //     display: 'grid',
//         //     alignItems: 'center',
//         //     justifyItems: 'center',
//         //     left: '300px',
//         //     width: 'calc(100% - 300px)',
//         //     padding: '20px',
//         //     height: '100%',
//         //     overflow: 'hidden scroll'
//         // },
//         container: {
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'flex-end',
//             position: 'relative',
//             width: '390px'
//         },
//         input: {
//             borderStyle: 'none',
//             //background: '#eaeaea',
//             color: '#2b2b2b',
//             fontSize: '20px',
//             fontWeight: 500,
//             width: '300px',
//             height: '50px',
//             padding: '0px 25px',
//             //borderRadius: '5px',
//             marginRight: '10px',
//             boxShadow: 'rgb(192 198 204) 0px 2px 1px -1px',
//         },
//         button: {
//             borderStyle: 'none',
//             height: '50px',
//             width: '60px',
//             padding: '0px 5px',
//             fontSize: '14px',
//             fontWeight: 200,
//             color: 'rgb(130 129 129)',
//             borderRadius: '30px 28px 28px 7px',
//             boxShadow: 'rgb(173 173 173) 0px 2px 1px -1px',
//             cursor: 'pointer',
//             outline: 'none'
//         },
//         label: {
//             //position: 'absolute',
//             //left: '25px',
//             fontWeight: 200,
//             fontSize: '20px',
//             color: 'rgb(171 169 169)',
//             cursor: 'text',
//         },
//         icon: {
//             //zIndex: 1,
//             paddingRight: '5px',
//             color: '#94afe0',
//             //position: 'absolute',
//             //left: '0px'
//         }
//     }

//     const handleChange = (e) => {
//         e.preventDefault();
//         console.log(e.target)
//         setInput({ ...input, [e.target.name]: e.target.value })
//     }
//     const handleSubmit = (e) => {
//         //typing animation starts
//         console.log(input)
//         if (!input.name || input.name.trim().length === 0) {
//             return
//         }
//         setIsTyping(true);
//         if (editInput > -1) {
//             let tempLine = [...line];
//             tempLine[editInput] = input.name.trim()
//             setLine([...tempLine]);
//         } else {
//             setLine([...line, input.name.trim()]);
//         }

//         setInput({ name: '' })
//     }

//     const handleTyping = () => {
//         //typing animation ended
//         setIsTyping(false);
//         console.log(line)
//     }

//     const activateEdit = (editItem = 0) => {
//         console.log('editing now');
//         setEditInput(editItem);
//         setNewInput(line[editItem]);
//     }

//     const handleEdit = (e) => {
//         e.preventDefault();
//         console.log(e.target)
//         setInput({ ...input, [e.target.name]: e.target.value })
//     }
//     console.log(editInput)
//     console.log(line)
//     console.log(input)


//     return (
//         <React.Fragment>
//             {/* <div style={styles.wrapper}> */}

//             <div style={{ backgroundColor: 'white', height: '300px', width: '500px', display: 'inline-grid', justifyContent: 'center', alignItems: 'flex-end', alignSelf: 'flex-start', position: 'absolute' }}>
//                 <h1 style={{ justifySelf: 'flex-start' }}>Use this to Contact me.</h1>
//                 <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', top: 0, left: '55px', width: '60%', height: '70%' }}>
//                     {/* My Intro and first question */}
//                     {!line[0] && <span style={{ top: '10px', textAlign: 'left', padding: '10px 0px' }} > <Typing label={messages[0]} showCursor={false} /></span>}


//                     {/* Name line */}
//                     {/* {line[0] && line[0] !== '' && <span style={{ top: '50px', left: '55px', textAlign: 'left', padding: '10px 0px', color: 'cadetblue', fontWeight: '300' }} > <Typing cb={handleTyping} label={[line[0]]} showCursor={false} /></span>} */}

//                     {/* My Answer to above name */}
//                     {/* {((line[0] && !isTyping) || line.length > 1) && <span style={{ top: '110px', left: '55px', textAlign: 'left', padding: '10px 0px' }} > <Typing label={[`Nice too meet you ${line[0].split(' ')[0]} and your email please?`]} showCursor={false} /></span>} */}
//                     {!line[1] && ((line[0]) || line.length > 1) && <span style={{ top: '110px', left: '55px', textAlign: 'left', padding: '10px 0px' }} > <Typing label={messages[1]} showCursor={false} /></span>}



//                     {/* email line */}
//                     {/* {line[1] && line[1] !== '' && <span style={{ top: '160px', left: '55px', textAlign: 'left', padding: '10px 0px', color: 'cadetblue', fontWeight: '300' }} > <Typing cb={handleTyping} label={[line[1]]} showCursor={false} /></span>} */}

//                     {/* My Answer to above email */}
//                     {/* {((line[1] && !isTyping) || line.length > 2) && <span style={{ top: '110px', left: '55px', textAlign: 'left', padding: '10px 0px' }} > <Typing label={[`Ok now send me a brief message`]} showCursor={false} /></span>} */}
//                     {!line[2] && ((line[1]) || line.length > 2) && <span style={{ top: '110px', left: '55px', textAlign: 'left', padding: '10px 0px' }} > <Typing label={messages[2]} showCursor={false} /></span>}


//                     {/* message line */}
//                     {/* {line[2] && line[2] !== '' && <span style={{ top: '160px', left: '55px', textAlign: 'left', padding: '10px 0px', color: 'cadetblue', fontWeight: '300' }} > <Typing cb={handleTyping} label={[line[2]]} showCursor={false} /></span>} */}

//                     {/* My Answer to above message */}
//                     {/* {((line[3] && !isTyping) || line.length > 3) && <span style={{ top: '110px', left: '55px', textAlign: 'left', padding: '10px 0px' }} > <Typing label={messages[3]} showCursor={false} /></span>} */}
//                     {!line[3] && ((line[2]) || line.length > 3) && <span style={{ top: '110px', left: '55px', textAlign: 'left', padding: '10px 0px' }} > <Typing label={messages[3]} showCursor={false} /></span>}


//                 </div>

//                 <div style={styles.container}>
//                     <div style={{ position: 'absolute', left: 0, display: 'inline-flex' }}>
//                         {!line[0] && <FaceIcon style={styles.icon} />}
//                         {!line[1] && ((line[0]) || line.length > 1) && <AlternateEmailIcon style={styles.icon} />}
//                         {!line[2] && ((line[1]) || line.length > 2) && <CommentIcon style={styles.icon} />}
//                         <label onClick={() => console.log('i was clicked')} style={styles.label} for='name'> {(!line[0] && !input.name) && 'Name Please'} {(line[0] && !line[1] && !input.name) && 'Email Please'}  {(line[0] && line[1] && !line[2] && !input.name) && 'Brief Message'}</label>
//                     </div>

//                     {editInput !== 0 && (line[0] || line.length > 1) &&
//                         <SlideOnLoad direction='down' end={60}>
//                             <table onClick={(e) => { e.preventDefault(); activateEdit(0) }} style={{ position: 'absolute', left: 0, display: 'inline-flex', top: '32px' }}>
//                                 <td><FaceIcon style={styles.icon} /></td>
//                                 {/* <td style={{ width: '85px', textAlign: 'left' }}><label onClick={() => console.log('i was clicked')} style={styles.label} for='name'> Name: </label></td> */}
//                                 <td style={{ marginLeft: '10px' }}><span style={styles.label}>{line[0]}</span></td>
//                             </table>
//                         </SlideOnLoad>
//                     }

//                     {editInput !== 1 && (line[1] || line.length > 2) &&
//                         <SlideOnLoad direction='down' end={100}>
//                             <table onClick={(e) => { e.preventDefault(); activateEdit(1) }} style={{ position: 'absolute', left: 0, display: 'inline-flex', top: '32px' }}>
//                                 <td><AlternateEmailIcon style={styles.icon} /></td>
//                                 {/* <td style={{ width: '85px', textAlign: 'left' }}><label onClick={() => console.log('i was clicked')} style={styles.label} for='name'> Email: </label></td> */}
//                                 <td style={{ marginLeft: '10px' }}><span style={styles.label}>{line[1]}</span></td>
//                             </table>
//                         </SlideOnLoad>
//                     }
//                     {editInput !== 2 && (line[2] || line.length > 3) &&
//                         <SlideOnLoad direction='down' end={140}>
//                             <table onClick={(e) => { e.preventDefault(); activateEdit(2) }} style={{ position: 'absolute', left: 0, display: 'inline-flex', top: '32px' }}>
//                                 <td><CommentIcon style={styles.icon} /></td>
//                                 {/* <td style={{ width: '85px', textAlign: 'left' }}><label onClick={() => console.log('i was clicked')} style={styles.label} for='name'> Message: </label></td> */}
//                                 <td style={{ marginLeft: '10px', textAlign: 'left' }}><span style={styles.label}>{line[2]}</span></td>
//                             </table>
//                         </SlideOnLoad>
//                     }


//                     {/* <div style={{ position: 'absolute', left: 0, display: 'inline-flex' }}>
//                         <EmojiEmotionsIcon style={styles.icon} />
//                         <label onClick={() => console.log('i was clicked')} style={styles.label} for='name'> {(!line[0] && !input.name) && 'Name Please'} {(line[0] && !line[1] && !input.name) && 'Email Please'}  {(line[0] && line[1] && !line[2] && !input.name) && 'Brief Message'}</label>
//                     </div> */}

//                     {!(line[1] || line.length > 2) && <input onChange={handleChange} className='contactInput' id='name' name='name' value={input.name} style={styles.input}></input>}
//                     {!isComplete && ((line[1]) || line.length > 2) && <textarea onChange={handleChange} style={{ ...styles.input, fontFamily: 'inherit', fontWeight: 'inherit', resize: 'none', paddingTop: '15px' }} className='contactInput' id='name' name='name' value={input.name} rows='5' />}

//                     {(editInput > -1) &&
//                         <React.Fragment>
//                             <div style={{ position: 'absolute', left: 0, display: 'inline-flex' }}>
//                                 <FaceIcon style={styles.icon} />
//                                 <label onClick={() => console.log('i was clicked')} style={styles.label} for='name'>{newInput}</label>
//                             </div>
//                             <input onChange={handleEdit} className='contactInput' id='name' name='name' value={input.name} style={styles.input} />
//                         </React.Fragment>
//                     }


//                     <ChatButton onClick={handleSubmit} label='send' shadow={true} send={(editInput === -1 && line.length >= 3)} />

//                     {/* <div className='outer_circle'>
//                             <div className='inner_circle'>

//                             </div>
//                         </div> */}

//                 </div>

//             </div>
//             {/* </div> */}
//         </React.Fragment >
//     )
// }

export default Contact;