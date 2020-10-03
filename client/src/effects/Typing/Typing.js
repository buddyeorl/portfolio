import React, { useState, useEffect } from 'react'

const Typing = ({ label, showCursor = true, error = false, cb = () => { return true } }) => {
    const [text, setText] = useState([''])
    const [cursor, setCursor] = useState([''])

    useEffect(() => {
        let tempText = ['']
        let timer1;
        //set new text every 100ms
        const asyncTyping = (char, newLine = false, timeout) => {
            return new Promise((resolve, reject) => {
                timer1 = setTimeout(() => {
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
                    await asyncTyping(label[j].slice(0, i + 1), newLine, 50);
                    newLine = false
                }
            }

            //callback if showcursor is false
            if (!showCursor) {
                //send signal typing ended
                cb();
            }

        }

        //call tempfunc
        tempFunc();

        return () => {
            clearTimeout(timer1);
        };

    }, [label])


    //interval for cursor
    useEffect(() => {
        let interval1;
        let timer1;
        //set new text every 100ms
        const asyncCursor = (char, timeout) => {
            return new Promise((resolve, reject) => {
                timer1 = setTimeout(() => {

                    setCursor([char])
                    resolve()
                }, timeout)
            })
        }

        //iterate label to and call asynctyping with the values of the label
        const tempFunc = async () => {
            let value = true
            if (label.length === text.length && label[label.length - 1].length === text[text.length - 1].length) {
                interval1 = await setInterval(async () => {
                    if (value) {
                        await asyncCursor('_', 100);
                        value = !value;
                    } else {
                        await asyncCursor('', 100);
                        value = !value;
                    }
                }, 250);
                //send signal typing ended
                cb();
            }
        }

        //call tempfunc only if showCursor is true
        if (showCursor) {
            tempFunc();
        }

        return () => {
            clearInterval(interval1);
            clearTimeout(timer1);
        };
    }, [text])



    return (
        <React.Fragment>
            {text && text.map((item, index) =>
                <React.Fragment key={index}>
                    <span style={{ color: error ? 'crimson' : 'inherit', zIndex: 100 }}>{item}</span>
                    {index === (text.length - 1) && text && text.length > 0 && <span style={{ position: 'absolute', color: error ? 'crimson' : 'inherit' }}>{cursor}</span>}
                    <br />
                </React.Fragment>)}
        </React.Fragment>
    )
}

export default Typing;