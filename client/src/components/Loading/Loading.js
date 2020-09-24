import React, { useState, useEffect } from 'react'

const SlideIn = ({ children }) => {
    const [newChild, setNewChild] = useState(children)


    //use this to clone material icon received and changed color
    useEffect(() => {
        //console.log('========CLONING CHILDREN HERE ==========', child)
        let newProps = {
            style: {
                ...children.props.style && children.props.style,
                ...{
                    color: 'white'
                }
            }
        }

        setNewChild(React.cloneElement(children, { ...children.props, ...newProps }))
    }, [])


    return (
        newChild
    )
}

const Loading = ({ onEnd = () => { return true } }) => {
    const [intro, setIntro] = useState(false);
    const [loading, setLoading] = useState(true)
    const [top, setTop] = useState('100%');
    const [showLoadingText, setShowLoadingText] = useState(false);
    const [translate, setTranslate] = useState('100%');

    useEffect(() => {
        setTimeout(() => {
            setTop('50%');
        }, 100)

        setTimeout(() => {
            setShowLoadingText(true);
        }, 500)

        setTimeout(() => {
            setTranslate('0%')
        }, 600)

    }, [])


    const styles = {
        container: {
            //display: 'flex',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            textAlign: 'center',
            fontSize: '1em',
            zIndex: 10,
            height: '100vh',
            width: '100%',
            //gridTemplateRows: '50% 50%',
            flexDirection: 'column',
            position: 'absolute'
        },
        upper: {
            backgroundColor: '#353333',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '50%',
            transition: 'top 1s'
        },
        lower: {
            backgroundColor: 'rgb(72 71 71)',
            width: '100%',
            height: '100%',
            position: 'absolute',
            bottom: '50%',
            transition: 'bottom 1s'
        },
        loadinText: {
            position: 'absolute',
            color: '#848282',
            fontWeight: 500,
            fontSize: '30px',
            zIndex: 999,
            textTransform: 'uppercase',
            top: '48%',
            transform: `translateX(100%)`,
            transition: 'transform 1s'
        }
    }

    const handleTransitionEnd = () => {

        setTimeout(() => {
            setTop('150%');
            if (!loading) {
                onEnd();
            }
            setLoading(false)

        }, loading ? 800 : 0);


        //hide loading text
        setTimeout(() => {
            setShowLoadingText(false);
        }, 800);
    }

    return (
        <React.Fragment>
            <section style={styles.container}>


                <div onTransitionEnd={handleTransitionEnd} style={{ ...styles.upper, top: top }}>
                </div>

                {showLoadingText && <span style={{ ...styles.loadinText, transform: `translateX(${translate})` }}>Loading...</span>}

                <div style={{ ...styles.lower, bottom: top }}>
                </div>
            </section>
        </React.Fragment>)
}

export default Loading;