import React, { useState, useEffect } from 'react';
import './ChattyForm.css';
import ChatButton from '../ChatButton';
import Typing from '../../effects/Typing'
import FaceIcon from '@material-ui/icons/Face';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import CommentIcon from '@material-ui/icons/Comment';
import FingerprintIcon from '@material-ui/icons/Fingerprint';


//custom hook
import useWindowsSize from '../../hooks/Dimms/useWindowSize'


const SlideOnLoad = ({ children, direction = 'right', initial = '0px', end = '20px' }) => {
    const [trigger, setTrigger] = useState(false)
    const [transform, setTransform] = useState()


    //console.log('got here again', direction)
    useEffect(() => {
        //console.log('waiting')
        let timer = setTimeout(() => {
            //console.log('triggered')
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
                //console.log('custom')
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


const Input = ({ messages }) => {

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
    //const [inputStatus, setInputStatus] = useState(Array(labels.length).fill({}));
    //-2 because there is a review message and a confirmation input.
    const [inputStatus, setInputStatus] = useState(Array(Object.keys(messages).length - 2).fill({}));

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


    //const icons = [<FaceIcon style={styles.icon} />, <AlternateEmailIcon style={styles.icon} />, <CommentIcon style={styles.icon} />]

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
        if (!input.name || input.name.trim().length === 0 || cur > Object.keys(messages).length - 1) {
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

        //console.log(inputStatus)
        //if all itemstatus are filled, then show submit button
        if (inputStatus.every(item => (item.status))) {
            //delay ==true will delay input box render in case user tries to edit any of the inputs before sending, 
            setCur(inputStatus.length);
            //setMessageToType(messages[inputStatus.length]);
            setMessageToType(messages[messages.length - 2]);
        } else {
            if (cur === inputStatus.length - 1) {
                setCur(inputStatus.length);
                setMessageToType(messages[messages.length - 2]);
                return
            }
            //handle the next empty input and message to show, 
            //show the first input that hasn't been filled up yet
            for (let i = 0; i < inputStatus.length; i++) {
                if (inputStatus[i].status || i === cur) {
                    continue;
                }
                setCur(i);
                setMessageToType(messages[i].add ? messages[i].add : messages[i]);
                break;


            }

        }
    }

    useEffect(() => {
        let timer;
        if (!editMode) {
            timer = setTimeout(() => {
                setEditMode(inputStatus.every(item => (item.status && item.status !== 'edit')))
            }, 480)
        } else {
            setEditMode(inputStatus.every(item => (item.status && item.status !== 'edit')))
        }

        return () => { clearTimeout(timer) }
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

        // console.log('fetching something here')
        //change state to not sending
        //setSending(false);
    }
    //console.log('sending', sending)
    return <React.Fragment>

        {/* message to be typed */}
        <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', top: 0, left: width > 500 ? '55px' : '0px', width: width > 500 ? '60%' : '100%', height: width > 500 ? '70px' : '70px', marginTop: '10px', }}>
            <span style={{ top: '10px', textAlign: 'left', padding: '10px 0px', ...(width <= 500 && { padding: '10px 25px' }) }} >
                <Typing cb={handleTyping} error={error} label={messageToType} showCursor={false} />
            </span>
        </div>

        {!sending ?

            <div style={styles.container}>
                {/* Icon and Label for this input */}
                <div style={{ position: 'absolute', left: 0, display: 'inline-flex' }}>
                    {(messages[cur].icon) ? messages[cur].icon : <span style={{ width: '24px', height: '24px' }}></span>}
                    <label style={styles.label} htmlFor='name'> {!input.name && messages[cur].label}</label>
                </div>



                {/* List of completed inputs */}
                {inputStatus.map((item, index) => {
                    if (!item.status || item.status === 'edit') {
                        return
                    } else {
                        return (
                            <SlideOnLoad direction='down' end={(index + 1) * (width > 500 ? 40 : 30)}>
                                <table onClick={(e) => { e.preventDefault(); handleEdit(index) }} style={{ position: 'absolute', left: 0, display: 'inline-flex', top: '20px' }}>
                                    <td style={{ overflow: 'initial' }}>{messages[index].icon && messages[index].icon && messages[index].icon}</td>
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
                            <textarea maxLength="150" onChange={handleChange} style={{ ...styles.input, fontFamily: 'inherit', fontWeight: 'inherit', resize: 'none', paddingTop: '15px' }} className='contactInput' id='name' name='name' value={input.name} rows='5' />
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


const ChattyForm = ({ standAlone = false, title = 'Try this form', optionalMessage = '',
    inputs = [
        { add: ['Hey send me something, this is a regular input'], edit: ['Ok ok ok, try again sending me a regular input'], label: 'Regular Input', icon: <FingerprintIcon style={{ paddingRight: '5px', color: '#94afe0' }} /> },
        { add: [`This is a validated input, please type in an email:`], edit: ['Could you please tell me your email one more time?'], label: 'Email Input', type: 'email', icon: <AlternateEmailIcon style={{ paddingRight: '5px', color: '#94afe0' }} /> },
        { add: [`Ok now send me a brief message, this is a text Area input`], edit: ['Did you forget to tell me something?'], label: 'Text Area Input', type: 'textarea', icon: <CommentIcon style={{ paddingRight: '5px', color: '#94afe0' }} /> },
        [`Review message will appear here`],
        [`Confirmation Message will appear here`, `You did it!! congrats!!!`]
    ] }) => {




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
            height: '150px',
            width: width > 500 ? '500px' : '100%',
            display: 'grid',
            gridTemplateColumns: '100%',
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

                <Input messages={inputs} />
            </div>
        </div>
    )





}


export default ChattyForm;