import React, { useEffect, useState } from 'react';
import './ProjectPage.css'
import Contact from '../Contact';

import { useHistory, useLocation, Link } from "react-router-dom";

//custom hooks
import useWindowsSize from '../../hooks/Dimms/useWindowSize'

const NavButton = ({ onClick = () => null, position = 'left' }) => {
    const styles = {
        span: {
            position: 'fixed',
            top: 'calc(50% - 50px)',
            color: 'white',
            borderTopRightRadius: '70px',
            borderBottomRightRadius: '70px',
            alignItems: 'center',
            display: 'grid',
            cursor: 'pointer',
            fontWeight: 900,
            textAlign: 'initial',
            transition: 'padding 100ms, background-color 100ms, transform 100ms',
            zIndex: 1,
            ...(position === 'left' ? { left: 0 } : { right: 0, })
        }
    }
    return (
        <span onClick={onClick} className={position === 'left' ? 'navButton' : 'navButtonRight'} style={styles.span}> {`<`}</span>
    )
}


const ProjectPageMobile = ({ loading, data, handleClickProject }) => {
    const styles = {
        container: {
            position: 'absolute',
            overflow: 'auto',
            height: '100%',
            padding: '0px 25px',
            paddingTop: '30px',
            paddingBottom: '30px'
        },
        h1: {
            marginBottom: '5px',
            textAlign: 'left',
            fontWeight: 500,
            color: '#3e3d3d',
        },
        // p1: {
        //     fontSize: '12px',
        //     marginTop: '0px',
        //     textAlign: 'left',
        //     color: '#989898',
        // },
        // p2: {
        //     fontSize: '12px',
        //     textAlign: 'justify',
        //     color: '#404040f2 '
        // },
        imgContainer: {
            display: 'contents'
        },
        img: {
            backgroundSize: '100% 100%',
            width: '100%',
            height: '300px',
            maxWidth: '450px',
            maxHeight: '300px',
            boxShadow: '-1px 2px 4px -2px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            borderRadius: '5px'
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
            fontWeight: 300,
            fontSize: '8px',
            lineHeight: '1em',
            //boxShadow: '1px 1px 0 rgba(0,0,0,.25)',
            margin: '3px',
            opacity: '1',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center'
        },
        contact: {
            padding: '0px 0px',
            width: '100%',
            height: '600px',
            display: 'inline-flex',
            justifyContent: 'center'
        },

    }




    return (
        <React.Fragment>
            <NavButton onClick={(e) => { e.preventDefault(); handleClickProject(data.navigation.back) }} position='left' />
            <NavButton onClick={(e) => { e.preventDefault(); handleClickProject(data.navigation.forward) }} position='right' />
            <section style={styles.container}>
                <div>
                    <h1 style={styles.h1}> {data.title}</h1>
                    <p className='projectPageMobileP1' >{data.name}</p>
                    <p className='projectPageMobileP2'> {data.shortDescription}</p>
                </div>
                <div className='projectPageMobileImgContainer'>
                    <div className='projectPageMobileImg1' style={{ backgroundImage: `url("../${data.img[0]}")` }}>
                    </div>
                </div>
                <div>
                    <h1 style={styles.h1}> Test Project</h1>
                    <p className='projectPageMobileP2'>
                        ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione asperiores quibusdam enim fuga iure, a veniam quaerat repellendus nisi esse similique placeat officiis culpa! Placeat officia sint ducimus quibusdam non.
                    </p>
                    <p className='projectPageMobileP2'>
                        ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione asperiores quibusdam enim fuga iure, a veniam quaerat repellendus nisi esse similique placeat officiis culpa! Placeat officia sint ducimus quibusdam non.
                    </p>
                </div>
                <div className='projectPageMobileImgContainer'>
                    <div className='projectPageMobileImg1' style={{ backgroundImage: `url("../${data.img[0]}")` }}>
                    </div>
                </div>



                {/* Tech */}
                <h1 style={styles.h1}> Technologies I got involved with while working on this project:</h1>
                <div style={{ marginTop: '20px', fontSize: '18px', textAlign: 'initial', fontWeight: 100, lineHeight: '32px', }}>
                    <ul style={{
                        listStyle: 'none', padding: 0, margin: 0, display: 'inline-grid',
                        gridTemplateColumns: '33% 34% 33%',
                        justifyContent: 'center',
                        width: '100%',
                        padding: '20px 0px',
                        //boxShadow: 'rgb(225, 228, 232) 0px -1px 0px inset',
                    }}>
                        {data.technologies.map((tech, index) =>
                            <li key={index} style={styles.li}>
                                {tech}
                            </li>)}

                    </ul>
                </div>

                {/* Resources */}
                <h1 style={styles.h1}> Resources:</h1>
                <p className='projectPageMobileP2' style={{ paddingBottom: '25px', boxShadow: 'rgb(225, 228, 232) 0px -1px 0px inset' }}> Check or download the app <a href={data.externalUrl} rel="nofollow" style={{ textDecoration: 'none', cursor: 'pointer' }} target="_blank"><strong>here</strong></a></p>


                <div style={styles.contact}>
                    <Contact standAlone={true} />
                </div>


            </section>
        </React.Fragment>
    )
}

const ProjectPage = ({ loading, data }) => {
    const [width, height] = useWindowsSize();

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
            //paddingTop: '54px',
            padding: '54px 90px',
            boxShadow: 'rgb(225, 228, 232) 0px -1px 0px inset',
            width: '100vw'
        },
        mainDescription: {
            display: 'inline-block',
            width: '100%',
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
            // width: '50%',
            // height: '100%',
            // right: '0%',
            // opacity: '1',
            // float: 'left',
            // position: 'relative',
            // backgroundSize: '100% 70%',
            // backgroundRepeat: 'no-repeat',
            // backgroundPosition: 'center',
            // backgroundImage: 'url("../machinerypal.png")'
            width: '400px',
            height: '300px',
            top: 'calc(50% - (300px / 2))',
            right: '0%',
            opacity: 1,
            float: 'left',
            position: 'relative',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            boxShadow: '-1px 2px 4px -2px',
            borderRadius: '10px',
        },
        mainH1: {
            width: '100%',
            maxWidth: '380px',
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
            width: '100%',
            maxWidth: '380px',
            fontSize: '18px',
            textAlign: 'initial',
            fontWeight: 100,
            lineHeight: '32px',
        },
        secondaryDescription: {
            display: 'contents',
            width: '100%',
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
        nav: {
            width: '100%',
            height: '60px',
            position: 'absolute',
            top: '0px',
            background: 'white',
            boxShadow: '0px 0px 16px -10px',
        }
    }

    const handleClickProject = (url) => {
        loading(history, url);
    }

    return (
        <React.Fragment>
            {width > 980 ?
                <div style={styles.wrapper}>
                    <NavButton onClick={(e) => { e.preventDefault(); handleClickProject(data.navigation.back) }} position='left' />
                    <NavButton onClick={(e) => { e.preventDefault(); handleClickProject(data.navigation.forward) }} position='right' />
                    <nav style={styles.nav}> </nav>
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
                    <section style={{ ...styles.general, backgroundColor: '#fafafa', boxShadow: 'rgb(225, 228, 232) 0px 1px' }}>
                        <div style={{
                            ...styles.mainDescription, backgroundSize: '100% 100%',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundImage: `url("../${data.img[1]}")`,
                            marginTop: '30px',
                            borderRadius: '35px 25px 25px 100px',
                            boxShadow: '-1px 2px 4px -2px',
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
                            <p style={{ ...styles.secondaryPara, marginTop: '20px', fontSize: '18px', textAlign: 'initial', fontWeight: 100, lineHeight: '32px', marginBottom: '30px' }}> Check or download the app <a href={data.externalUrl} rel="nofollow" style={{ textDecoration: 'none', cursor: 'pointer' }} target="_blank"><strong>here</strong></a></p>

                        </div>

                    </section>
                    <section style={{ ...styles.general, height: '100%', height: '100%', display: 'inline-flex', justifyContent: 'center', marginTop: '35px' }}>
                        <Contact standAlone={true} />
                    </section>
                </div>
                :
                <ProjectPageMobile loading={loading} data={data} handleClickProject={handleClickProject} />
            }
        </React.Fragment>
    )
}

export default ProjectPage;