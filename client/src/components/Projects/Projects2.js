import React, { useState, useEffect } from 'react';


//import Github Label
import GithubLabel from '../GithubLabel';

const Shrink = ({ children, trigger, gridArea = '' }) => {
    const [transform, setTransform] = useState();
    console.log(children.props)
    useEffect(() => {
        setTransform(trigger ? 'scale(0.5)' : 'scale(1)');
    }, [trigger])

    return (
        <span style={{ width: '100%', height: '100%', margin: 0, padding: 0, display: 'grid', gridArea: gridArea, alignContent: 'center', justifyContent: 'center', transform: transform }}>
            {children}
        </span>
    )
}

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
                setTransform(trigger ? 'translate(0px)' : 'translate(-40px)');
                break;
            case 'left':
                setTransform(trigger ? 'translate(0px)' : 'translate(40px)');
                break;
            case 'up':
                setTransform(trigger ? 'translateY(0px)' : 'translateY(-40px)');
                break;
            case 'down':
                setTransform(trigger ? 'translateY(0px)' : 'translateY(40px)');
                break;
            case 'custom':
                console.log('custom')
                setTransform(trigger ? `translate(${initial})` : `translate(${end})`);
                break;
            default:
                setTransform(trigger ? 'translate(0px)' : 'translate(-40px)');
        }
    }, [direction, trigger])



    return (
        <span style={{ width: '100%', height: '100%', margin: 0, padding: 0, display: 'grid', gridArea: children.props.style.gridArea, alignContent: 'center', justifyContent: 'center', transform: transform, transition: 'transform 700ms' }}>
            {children}
        </span>
    )
}

const ProjectPin = ({ style, onClick = () => { return } }) => {
    const [mouse, setMouse] = useState();
    const [shadow, setShadow] = useState();

    useEffect(() => {
        switch (mouse) {
            case 'enter':
                setShadow('rgb(122, 122, 122) 0px 0px 10px');
                break;
            case 'leave':
                setShadow('rgb(122, 122, 122) 0px 0px 15px');
                break;
            case 'down':
                setShadow('rgb(122, 122, 122) 0px 0px 4px');
                break;
            case 'click':
                setShadow('rgb(122, 122, 122) 0px 0px 6px');
                break;
            default:
                setShadow('rgb(122, 122, 122) 0px 0px 15px');
        }
    }, [mouse]);

    const handleMouseMovement = (type) => {
        setMouse(type);
    }

    return (
        <React.Fragment>

            <div onClick={(e) => { handleMouseMovement('click'); onClick(e) }} onMouseEnter={() => handleMouseMovement('enter')} onMouseDown={() => handleMouseMovement('down')} onMouseLeave={() => handleMouseMovement('leave')} style={{ ...style, boxShadow: shadow }}>
            </div>

        </React.Fragment>
    )
}

const Projects = () => {
    const [trigger, setTrigger] = useState(false);
    const [select, setSelect] = useState('')

    const styles = {
        // container: {
        //     //display: 'flex',
        //     display: 'grid',
        //     gridTemplateColumns: 'repeat(4, 1fr)',
        //     gridAutoRows: 'minmax(150px, auto)',
        //     alignItems: 'center',
        //     alignSelf: 'baseline',
        //     justifyContent: 'center',
        //     overflow: 'hidden',
        //     textAlign: 'center',
        //     fontSize: '1em',
        //     height: '800px',
        //     width: '800px',
        //     maxWidth: '800px',
        //     maxHeight: '800px',
        //     paddingTop: '8%',
        //     //gridTemplateRows: '50% 50%',
        //     //flexDirection: 'column',
        //     //position: 'absolute',
        //     //backgroundColor: 'rgb(25, 23, 23)',
        //     gridTemplateAreas: '"a b c d""display display display f ""display display display  h ""stack stack stack l"',
        //     position: 'absolute',
        //     zIndex: 1002,
        //     background: 'white'
        // },

        container: {
            position: 'fixed',
            left: '300px',
            width: 'calc(100% - 300px)',
            height: '100%',
            background: 'white',
            zIndex: '1001',

            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gridAutoRows: 'minmax(150px, auto)',
            alignItems: 'center',
            alignSelf: 'baseline',
            justifyContent: 'center',
            overflow: 'hidden',
            textAlign: 'center',
            fontSize: '1em',
            gridTemplateAreas: '"display display display description description description""display display display description description description ""main main main  description description description""stack stack stack l l l"',
            position: 'absolute',
            background: 'white'
        },



        mainImage: {
            borderRadius: '2rem',
            backgroundColor: 'rgb(25, 23, 23)',
            width: '500px',
            height: '300px',
            zIndex: 2,
            gridArea: 'display',
            justifySelf: 'center',
            alignSelf: 'center',
        },
        smallArea: {
            borderRadius: '2rem',
            backgroundColor: 'white',
            backgroundImage: 'url("logo192.png")',
            backgroundSize: 'cover',
            width: '100px',
            height: '100px',
            zIndex: 2,
            justifySelf: 'center',
            alignSelf: 'center',
            cursor: 'pointer',
            transition: 'box-shadow 250ms'
        },
        textArea: {
            borderRadius: '2rem',
            backgroundColor: 'rgb(232 82 82)',
            width: 'calc(100% - 30px)',
            height: 'calc(100% - 30px)',
            zIndex: 2,
            justifySelf: 'center',
            alignSelf: 'start',
        },
        stackArea: {
            borderRadius: '2rem',
            width: 'calc(100% - 30px)',
            height: 'calc(100% - 30px)',
            zIndex: 2,
            justifySelf: 'center',
            alignSelf: 'center',
        },
        li: {
            display: 'inline-block',
            padding: '8px 5px',
            backgroundColor: '#313131',
            color: 'white',
            borderWidth: '1px 1px 2px 1px',
            borderStyle: 'solid',
            borderColor: '#222',
            borderRadius: '3px',
            textTransform: 'uppercase',
            fontWeight: 700,
            fontSize: '.75em',
            lineHeight: '1em',
            boxShadow: '1px 1px 0 rgba(0,0,0,.25)',
            margin: '3px',
            opacity: '1',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
        },
        description: {
            marginBottom: '48px',
            alignSelf: 'flex-start'
        },
        descriptionH2: {
            fontSize: '32px',
            lineHeight: '25px',
            fontWeight: '600',
            position: 'relative',
            display: 'block',
            letterSpacing: '-1px',
            padding: '0',
            marginBottom: '1.8px',
            textAlign: 'start'
        },
        descriptionHr: {
            display: 'block',
            height: '1px',
            width: '50%',
            backgroundColor: '#484848',
            position: 'relative',
            border: 0,
            margin: '8px 0 16px',
        },
        descriptionP: {
            marginBottom: '20px',
            fontSize: '20px',
            lineHeight: '30px'
        }

    }

    const handleClick = (selection) => {
        console.log('clicking')
        //setTrigger(!trigger);
        //setSelect(selection)
    }
    return (
        <React.Fragment>
            <section style={styles.container}>

                <div style={styles.mainImage}>
                    <GithubLabel />
                </div>


                {/* <SlideOnLoad direction={(trigger && select !== 'a') ? 'custom' : 'up'} initial={'600px'} end={'0px'}>
                    <ProjectPin onClick={() => handleClick('a')} style={{ ...styles.smallArea, gridArea: 'a' }} />
                </SlideOnLoad>


                <SlideOnLoad direction={(trigger && select !== 'b') ? 'custom' : 'up'} initial={'400px'} end={'0px'}>
                    <ProjectPin onClick={() => handleClick('b')} style={{ ...styles.smallArea, gridArea: 'b' }} />
                </SlideOnLoad>
                <SlideOnLoad direction={(trigger && select !== 'c') ? 'custom' : 'up'} initial={'200px'} end={'0px'}>
                    <ProjectPin onClick={() => handleClick('c')} style={{ ...styles.smallArea, gridArea: 'c' }} />
                </SlideOnLoad>
                <SlideOnLoad direction={(trigger && select !== 'd') ? 'custom' : 'up'} initial={'0px'} end={'0px'}>
                    <ProjectPin onClick={() => handleClick('d')} style={{ ...styles.smallArea, gridArea: 'd' }} />
                </SlideOnLoad>
                <SlideOnLoad direction={(trigger && select !== 'f') ? 'custom' : 'left'} initial={'0px, -200px'} end={'0px'}>
                    <ProjectPin onClick={() => handleClick('f')} style={{ ...styles.smallArea, gridArea: 'f' }} />
                </SlideOnLoad>
                <SlideOnLoad direction={(trigger && select !== 'h') ? 'custom' : 'left'} initial={'0px, -400px'} end={'0px'}>
                    <ProjectPin onClick={() => handleClick('h')} style={{ ...styles.smallArea, gridArea: 'h' }} />
                </SlideOnLoad>
                <SlideOnLoad direction={(trigger && select !== 'l') ? 'custom' : 'down'} initial={'0px, -600px'} end={'0px'}>
                    <ProjectPin onClick={() => handleClick('l')} style={{ ...styles.smallArea, gridArea: 'l' }} />
                </SlideOnLoad> */}

                <div style={{ ...styles.stackArea, gridArea: 'stack' }}>
                    <span style={{ color: '#544f4f' }}> Technologies I got involved with while working in this project:</span>
                    <ul style={{
                        listStyle: 'none', padding: 0, margin: 0, display: 'inline-grid',
                        gridTemplateColumns: '33% 34% 33%',
                        justifyContent: 'center',
                        width: '500px',
                        maxWidth: '500px',
                        padding: '10px'
                    }}>
                        <li style={styles.li}>
                            some text here
                        </li>
                        <li style={styles.li}>
                            some text here
                        </li>
                        <li style={styles.li}>
                            some text here
                        </li>
                        <li style={styles.li}>
                            some text here
                        </li>
                    </ul>
                </div>
                <div style={{ ...styles.description, gridArea: 'description' }}>
                    <h2 style={styles.descriptionH2}>Testing Text</h2>
                    <hr style={styles.descriptionHr} />
                    <p style={styles.descriptionP}></p>
                    <p style={styles.descriptionP}></p>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Projects;