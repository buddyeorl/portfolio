import React, { useEffect, useState } from 'react';
import './ProjectPage.css'
import Contact from '../Contact';

import { useHistory, useLocation, Link } from "react-router-dom";

const NavButton = ({ onClick = () => null, position = 'left' }) => {
    const styles = {
        span: {
            position: 'fixed',
            top: 'calc(50% - 50px)',
            width: '50px',
            height: '100px',
            color: 'white',
            borderTopRightRadius: '70px',
            borderBottomRightRadius: '70px',
            alignItems: 'center',
            display: 'grid',
            cursor: 'pointer',
            fontSize: '35px',
            fontWeight: 900,
            textAlign: 'initial',
            transition: 'padding 250ms, background-color 250ms, transform 250ms',
            zIndex: 1001,
            ...(position === 'left' ? { left: 0 } : { right: 0, })
        }
    }
    return (
        <span onClick={onClick} className={position === 'left' ? 'navButton' : 'navButtonRight'} style={styles.span}> {`<`}</span >
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

const ProjectPage = ({ loading, data }) => {
    const history = useHistory();
    console.log(data);
    const styles = {
        wrapper: {
            height: '100vh',
            overflow: 'scroll',
            position: 'fixed'
        },
        main: {
            //padding: '54px 72px 0px',
            paddingTop: '54px',
            boxShadow: 'rgb(225, 228, 232) 0px -1px 0px inset',
            width: '100vw'
        },
        mainDescription: {
            display: 'inline-block',
            width: '1040px',
            height: '500px',
            maxWidth: '1040px',
        },
        textMain: {
            width: '50%',
            right: '0%',
            opacity: '1',
            float: 'left',
            position: 'relative'
        },
        imgMain: {
            width: '50%',
            height: '100%',
            right: '0%',
            opacity: '1',
            float: 'left',
            position: 'relative',
            backgroundSize: '100% 70%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: 'url("../machinerypal.png")'
        },
        mainH1: {
            width: '380px',
            fontSize: '45px',
            fontWeight: 320,
            fontFamily: '"proxima nova light", "Helvetica Neue", Helvetica, Arial, Sans-serif',
            textAlign: 'left',
            marginTop: '54px',
            marginBottom: '0px',
            boxShadow: 'rgb(225, 228, 232) 0px -1px 0px inset'
        },
        mainName: {
            fontSize: '18px',
            color: '#666666',
            paddingBottom: '18px',
            textAlign: 'left'
        },
        mainP: {
            width: '380px',
            fontSize: '18px',
            textAlign: 'initial',
            fontWeight: 100,
            lineHeight: '32px',
        },
        general: {
            padding: '108px 0px',
            boxShadow: 'rgb(225, 228, 232) 0px -1px 0px inset',
            width: '100%'
        },
        secondaryDescription: {
            display: 'inline-block',
            width: '1040px',
            height: '500px',
            maxWidth: '1040px',
        },
        secondaryPara: {
            maxWidth: '720px',
            margin: '0 auto 0 auto',
            marginTop: '50px'
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
            textAlign: 'center'
        },

    }

    const handleClickProject = (url) => {
        loading(history, url);
    }

    return (
        <React.Fragment>
            <div style={styles.wrapper}>
                <NavButton onClick={(e) => { e.preventDefault(); handleClickProject(data.navigation.back) }} position='left' />
                <NavButton onClick={(e) => { e.preventDefault(); handleClickProject(data.navigation.forward) }} position='right' />
                <section style={styles.main}>
                    <div style={styles.mainDescription}>
                        <div style={styles.textMain}>
                            <h1 style={styles.mainH1}> {data.title}</h1>
                            <p style={styles.mainName}>{data.name}</p>
                            <p style={styles.mainP}> {data.shortDescription}</p>
                        </div>
                        <div style={{ ...styles.imgMain, backgroundImage: `url("../${data.img[0]}")` }}>
                        </div>
                    </div>
                </section>
                <section style={{ ...styles.general, backgroundColor: '#fafafa' }}>
                    <div style={{
                        ...styles.mainDescription, backgroundSize: '100% 100%',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundImage: `url("../${data.img[1]}")`
                    }}>

                    </div>
                    <div style={{ ...styles.secondaryDescription, marginTop: '70px' }}>
                        <h1 style={{ ...styles.secondaryPara, textAlign: 'left', fontSize: '28px', fontWeight: 300 }}> Test Project</h1>
                        <p style={{ ...styles.secondaryPara, marginTop: '20px', fontSize: '18px', textAlign: 'initial', fontWeight: 100, lineHeight: '32px', }}>ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione asperiores quibusdam enim fuga iure, a veniam quaerat repellendus nisi esse similique placeat officiis culpa! Placeat officia sint ducimus quibusdam non.</p>
                        <h1 style={{ ...styles.secondaryPara, textAlign: 'left', fontSize: '28px', fontWeight: 300 }}> Test Project</h1>
                        <p style={{ ...styles.secondaryPara, marginTop: '20px', fontSize: '18px', textAlign: 'initial', fontWeight: 100, lineHeight: '32px', }}>ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione asperiores quibusdam enim fuga iure, a veniam quaerat repellendus nisi esse similique placeat officiis culpa! Placeat officia sint ducimus quibusdam non.</p>
                        <h1 style={{ ...styles.secondaryPara, textAlign: 'left', fontSize: '20px', fontWeight: 300 }}> Technologies I got involved with while working on this project:</h1>
                        <div style={{ ...styles.secondaryPara, marginTop: '20px', fontSize: '18px', textAlign: 'initial', fontWeight: 100, lineHeight: '32px', }}>
                            <ul style={{
                                listStyle: 'none', padding: 0, margin: 0, display: 'inline-grid',
                                gridTemplateColumns: '25% 25% 25% 25%',
                                justifyContent: 'center',
                                width: '100%',
                                padding: '0px'
                            }}>
                                {data.technologies.map((tech, index) =>
                                    <li key={index} style={styles.li}>
                                        {tech}
                                    </li>)}

                            </ul>

                        </div>
                        <h1 style={{ ...styles.secondaryPara, textAlign: 'left', fontSize: '28px', fontWeight: 300 }}> Resources:</h1>
                        <p style={{ ...styles.secondaryPara, marginTop: '20px', fontSize: '18px', textAlign: 'initial', fontWeight: 100, lineHeight: '32px', }}> Check or download the app <a href={data.externalUrl} rel="nofollow" style={{ textDecoration: 'none', cursor: 'pointer' }} target="_blank"><strong>here</strong></a></p>

                    </div>

                </section>
                <section style={{ ...styles.general, backgroundColor: '#fafafa' }}>
                    <Contact />
                </section>
            </div>
        </React.Fragment>
    )
}

export default ProjectPage;