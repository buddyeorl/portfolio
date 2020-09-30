import React, { useState, useEffect } from 'react';
//effects
import Typing from '../../effects/Typing';

const Typing1 = ({ children, label }) => {
    const [text, setText] = useState([''])
    const [cursor, setCursor] = useState([''])

    useEffect(() => {
        let tempText = ['']
        //set new text every 100ms
        const asyncTyping = (char, newLine = false, timeout) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (newLine && tempText[0].length > 0) {
                        tempText.push(char)
                    }
                    tempText[tempText.length - 1] = char;
                    setText([...tempText])
                    resolve()
                }, timeout)
            })
        }

        //iterate label to and call asynctyping with the values of the label
        const tempFunc = async () => {
            for (let j = 0; j < label.length; j++) {
                let newLine = true
                for (let i = 0; i < label[j].length; i++) {
                    await asyncTyping(label[j].slice(0, i + 1), newLine, 100);
                    newLine = false
                }
            }

        }

        //call tempfunc
        tempFunc();



    }, [])


    //interval for cursor
    useEffect(() => {
        let intervalId;
        //set new text every 100ms
        const asyncCursor = (char, timeout) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {

                    setCursor([char])
                    resolve()
                }, timeout)
            })
        }

        //iterate label to and call asynctyping with the values of the label
        const tempFunc = async () => {
            let value = true
            if (label.length === text.length && label[label.length - 1].length === text[text.length - 1].length) {

                intervalId = await setInterval(async () => {
                    if (value) {
                        await asyncCursor('_', 100);
                        value = !value;
                    } else {
                        await asyncCursor('', 100);
                        value = !value;
                    }
                }, 250);

            }
        }

        //call tempfunc
        tempFunc();

        return () => clearInterval(intervalId);
    }, [text])



    return (
        <React.Fragment>
            {text && text.map((item, index) => <React.Fragment><span>{item}</span>{index === (text.length - 1) && text && text.length > 0 && <span style={{ position: 'absolute' }}>{cursor}</span>}  <br /></React.Fragment>)}
            {/* <span style={{ position: 'absolute' }}>{cursor}</span> */}
        </React.Fragment>
    )
}


const Intro = ({ effectEnded }) => {
    const [typingMessage, setTypingMessage] = useState(['Hi, I\'m Alex Lizarraga', 'I like building things that are functional,simple and easy to use.'])
    const styles = {
        container: {
            width: '100%',
            color: '#7a7a7a',
            textShadow: '1px 1px 0 #0b8be7 inset',
            textAlign: 'center',
            position: 'relative',
            height: '150px',
            alignSelf: 'end'
        }
    }

    return (
        <React.Fragment>
            <div style={styles.container}>
                <h3>
                    <strong><Typing label={typingMessage} cb={effectEnded} /></strong>
                    <br />
                </h3>
                {/* <Typing><div>this<p>one child</p><p>two child</p></div></Typing> */}
                {/* <h1>
                    I like building things that are functional and simple to use.
    </h1>
                <h2>
                    Most of my time I spent on User experience, User Interface, Web Application Architecture and Product Development.
    </h2>
                <h2>
                    I'm Curently working for Blink Opus Corp as a Software Engineer, where I develop b2b applications to optimize business processes for all kind of logistic companies such as USHIP.com
                    Before Blink Opus, I was evolving as a full stack developer at UE Equipments, before that I was a Junior Developer at HG Electronics in Korea where I was building their design system.
    </h2> */}
            </div>
        </React.Fragment>
    )
}

export default Intro;