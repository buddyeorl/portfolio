import React, { useEffect, useState, useRef, ReactDOM } from 'react';
import './ProjectPage.css'
import Contact from '../Contact';
import CodeGist from '../CodeGist';

import { useHistory } from "react-router-dom";

//custom hooks
import useWindowsSize from '../../hooks/Dimms/useWindowSize'

//icons
import HomeIcon from '@material-ui/icons/Home';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import AssignmentIcon from '@material-ui/icons/Assignment';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';




const NavButton = ({ onClick = () => null, position = 'left' }) => {
    const [width] = useWindowsSize();
    const [buttonStyle, setButtonStyle] = useState({
        paddingLeft: '10px',
        backgroundColor: 'rgb(206 206 206 / 25%)',
        ...(position === 'left' ? { transform: 'scale(1)' } : { right: 0, transform: 'scale(1) rotateY(180deg)' })
    })

    const styles = {
        span: {
            MozBoxSizing: 'unset',
            WebkitBoxSizing: 'unset',
            boxSizing: 'unset',
            width: width > 980 ? '50px' : '25px',
            height: width > 980 ? '100px' : '50px',
            fontSize: width > 980 ? '35px' : '20px',

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
            ...(position === 'left' ? { left: 0 } : { right: 0 })
        }
    }

    const handleMouseEnter = (e, enter) => {
        e.preventDefault();
        if (!enter) {
            setButtonStyle({

                paddingLeft: '10px',
                backgroundColor: 'rgb(206 206 206 / 25%)',
                ...(position === 'left' ? { transform: 'scale(1)' } : { right: 0, transform: 'scale(1) rotateY(180deg)' })
            })
        } else {
            setButtonStyle({
                paddingLeft: '50px',
                backgroundColor: 'rgb(150 150 150 / 80%)',
                ...(position === 'left' ? { transform: 'scale(1.3)' } : { right: 0, transform: 'scale(1.3) rotateY(180deg)' })
            });

        }
    }

    return (
        <span
            onTouchStart={(e) => { handleMouseEnter(e, true) }}
            onTouchEnd={(e) => { handleMouseEnter(e, false); onClick(e); }}
            onMouseEnter={(e) => { handleMouseEnter(e, true) }}
            onMouseLeave={(e) => { handleMouseEnter(e, false) }}
            onClick={onClick} style={{ ...buttonStyle, ...styles.span }}>
            {`<`}
        </span>
    )
}

const ProjectPageMobile = ({ loading, data, handleClickProject, onScroll }) => {
    const myRef = useRef(null);



    useEffect(() => {
        myRef.current.scrollTo(0, 0);
    }, [data])


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
            display: 'contents',
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
            borderRadius: '5px',
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
            height: '710px',
            display: 'inline-flex',
            justifyContent: 'center'
        },

    }

    const main = () => {
        return (
            <React.Fragment>
                <div>
                    <h1 style={styles.h1}> {data.main.title}</h1>
                    <p className='projectPageMobileP1' >{data.main.duty}</p>
                    <p className='projectPageMobileP2'> {data.main.content}</p>
                </div>
                <div className='projectPageMobileImg1' style={{ backgroundImage: `url("${data.main.image}")`, display: 'inline-block' }}>
                </div>
            </React.Fragment>
        )
    }


    const largeImage = (index) => {
        return (<div className='projectPageMobileImgContainer'>
            <div className='projectPageMobileImg1' style={{ backgroundImage: `url("${data.images[index]}")` }}>
            </div>
        </div>
        )
    }

    const paragraph = (index) => {
        return (
            <React.Fragment>
                <div>
                    {data.paragraph[index].title !== '' &&
                        <h1 style={styles.h1}> {data.paragraph[index].title}</h1>
                    }



                    <p className='projectPageMobileP2'>
                        {data.paragraph[index].content}
                    </p>
                </div>
            </React.Fragment>
        )
    }

    const technologies = () => {
        return (
            <React.Fragment>
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
            </React.Fragment>
        )
    }

    const referenceLinks = () => {
        return (
            <React.Fragment>
                {/* Resources */}
                <h1 style={styles.h1}> Resources:</h1>
                <p className='projectPageMobileP2' style={{ paddingBottom: '25px', boxShadow: 'rgb(225, 228, 232) 0px -1px 0px inset' }}> Check or download the app <a href={data.externalUrl} rel="nofollow" style={{ textDecoration: 'none', cursor: 'pointer' }} target="_blank"><strong>here</strong></a></p>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <NavButton onClick={(e) => { e.preventDefault(); handleClickProject(data.navigation.back) }} position='left' />
            <NavButton onClick={(e) => { e.preventDefault(); handleClickProject(data.navigation.forward) }} position='right' />
            <section ref={myRef} style={styles.container} onScroll={(e) => { onScroll(e, myRef) }}>
                {main()}
                {data.order.map((item) => {
                    switch (item.type) {
                        case 'code':
                            return <CodeGist url={data.code[item.index].url} title={data.code[item.index].title === '' ? '' : data.code[item.index].title} >
                                {data.code[item.index].title !== '' &&
                                    <h1 style={styles.h1}> {data.code[item.index].title}</h1>
                                }
                            </CodeGist>
                                ;
                            break;
                        case 'image':
                            return largeImage(item.index);
                            break;
                        case 'link':
                            return referenceLinks();
                            break;
                        case 'technologies':
                            return technologies();
                            break;
                        case 'paragraph':
                            return paragraph(item.index);
                            break;
                        case 'component':
                            let Comp = data.component[item.index];
                            return <div style={{ display: 'flex', width: '100%', justifyContent: 'center', margin: '30px 5px', minHeight: '100px' }}>
                                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: '720px' }}>
                                    {typeof data.component[item.index] === 'object' ? data.component[item.index] : <Comp />}
                                </span>
                            </div>
                            break;
                        default:
                            return null
                    }
                })}


                <div style={styles.contact}>
                    <Contact standAlone={true} />
                </div>


            </section>
        </React.Fragment>
    )
}

const ProjectPage = ({ loading, data, centerSocialBar }) => {
    const myRef = useRef(null);
    const [width, height, top] = useWindowsSize();

    const history = useHistory();

    //handle whether the social bar has been activated to move. if active ===true and scroll is 200px to the bottom, the social bar will move to the center, other wise will stay in its original position
    const [active, setActive] = useState(false)

    // && myRef1.current.contentDocument.body
    useEffect(() => {
        if (myRef.current && myRef.current.scrollTo) {
            myRef.current.scrollTo(0, 0);
        }
        centerSocialBar(false);
    }, [data])


    const styles = {
        wrapper: {
            height: '100vh',
            overflow: 'hidden scroll',
            position: 'fixed'
        },
        main: {
            //padding: '54px 72px 0px',
            //paddingTop: '54px',
            padding: '54px 90px',
            boxShadow: 'rgb(225, 228, 232) 0px -1px 0px inset',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',

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
            //top: 'calc(50% - (300px / 2))',
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
            marginTop: '0px',
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
            marginTop: '50px',
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
            height: '70px',
            position: 'fixed',
            top: '0px',
            background: 'white',
            boxShadow: '0px 0px 16px -10px',
            display: 'flex',
            justifyContent: 'center',
            zIndex: 2
        },
        navUl: {
            display: 'flex',
            width: '720px',
            paddingLeft: '0px',
            alignContent: 'center',
            justifyContent: 'space-between',
            fontSize: '18px',
            color: 'rgb(102, 102, 102)',
        },
        navLi: {
            margin: '0px 5px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
        }
    }

    const handleClickProject = (url) => {
        loading(history, url);
    }

    const handleScroll = (e, reference = myRef) => {
        e.preventDefault();
        if (reference.current.scrollHeight - reference.current.scrollTop - reference.current.clientHeight <= 60 && !active) {
            centerSocialBar(true);
            setActive(true);
        }
        if (reference.current.scrollHeight - reference.current.scrollTop - reference.current.clientHeight >= 60 && active) {
            centerSocialBar(false);
            setActive(false);
        }
    }

    const main = () => {
        return (
            <section style={styles.main}>
                <div style={{ ...styles.mainDescription, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={styles.textMain}>
                        <h1 style={styles.mainH1}> {data.main.title}</h1>
                        <p style={styles.mainName}>{data.main.duty}</p>
                        <p style={styles.mainP}> {data.main.content}</p>
                    </div>
                    <div style={{ ...styles.imgMain, backgroundImage: `url("${data.main.image}")` }}>
                    </div>
                </div>
            </section>
        )
    }


    const largeImage = (index) => {
        return (<div style={{
            ...styles.mainDescription, backgroundSize: '100% 100%',
            height: '420px',
            maxWidth: '720px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url("${data.images[index]}")`,
            marginTop: '30px',
            borderRadius: '35px 25px 25px 35px',
            boxShadow: '-1px 2px 4px -2px',
        }}></div>
        )
    }

    const paragraph = (index) => {
        return (
            <React.Fragment>
                {data.paragraph[index].title !== '' &&
                    <h1 style={{ ...styles.secondaryPara, textAlign: 'left', fontSize: '28px', fontWeight: 300 }}> {data.paragraph[index].title}</h1>
                }

                <p style={{ ...styles.secondaryPara, marginTop: '20px', fontSize: '18px', textAlign: 'initial', fontWeight: 100, lineHeight: '32px', }}>{data.paragraph[index].content}</p>
            </React.Fragment>
        )
    }

    const technologies = () => {
        return (
            <React.Fragment>
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
            </React.Fragment>
        )
    }

    const reference = (index) => {
        return (
            <React.Fragment>
                {/* <h1 style={{ ...styles.secondaryPara, textAlign: 'left', fontSize: '28px', fontWeight: 300 }}> Resources:</h1> */}
                <p style={{ ...styles.secondaryPara, marginTop: '20px', fontSize: '18px', textAlign: 'initial', fontWeight: 100, lineHeight: '32px', marginBottom: '30px' }}> {data.reference[index].content} <a href={data.reference[index].url} rel="nofollow" style={{ textDecoration: 'none', cursor: 'pointer' }} target="_blank"><strong>{data.reference[index].label}</strong></a></p>
            </React.Fragment>
        )
    }

    const referenceLinks = () => {
        return (
            <React.Fragment>
                <h1 style={{ ...styles.secondaryPara, textAlign: 'left', fontSize: '28px', fontWeight: 300 }}> Resources:</h1>
                <p style={{ ...styles.secondaryPara, marginTop: '20px', fontSize: '18px', textAlign: 'initial', fontWeight: 100, lineHeight: '32px', marginBottom: '30px' }}> Check or download the app <a href={data.link} rel="nofollow" style={{ textDecoration: 'none', cursor: 'pointer' }} target="_blank"><strong>here</strong></a></p>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            {width > 980 ?
                <div ref={myRef} onScroll={handleScroll} style={styles.wrapper}>
                    <NavButton onClick={(e) => { e.preventDefault(); handleClickProject(data.navigation.back) }} position='left' />
                    <NavButton onClick={(e) => { e.preventDefault(); handleClickProject(data.navigation.forward) }} position='right' />

                    {/* top navigation bar */}
                    <nav style={styles.nav}>

                        <ul style={styles.navUl}>
                            <li onClick={(e) => { e.preventDefault(); handleClickProject('/') }} className='navLi' style={styles.navLi}> <HomeIcon style={{ color: 'lightgray', fontSize: '14px', marginRight: '5px' }} />Alex Lizarraga</li>
                            <li onClick={(e) => { e.preventDefault(); handleClickProject('/projects') }} className='navLi' style={styles.navLi}><AccountTreeIcon style={{ color: 'lightgray', fontSize: '14px', marginRight: '5px' }} /> <span>Projects</span></li>
                            <li onClick={(e) => { e.preventDefault(); handleClickProject('/resume') }} className='navLi' style={styles.navLi}><AssignmentIcon style={{ color: 'lightgray', fontSize: '14px', marginRight: '5px' }} /> <span>CV</span></li>
                            <li onClick={(e) => { e.preventDefault(); handleClickProject('/contact') }} className='navLi' style={styles.navLi}> <QuestionAnswerIcon style={{ color: 'lightgray', fontSize: '14px', marginRight: '5px' }} /> <span>Contact</span></li>
                        </ul>
                    </nav>

                    {/* Main Section goes here */}
                    {main()}

                    {/* Long project description and secondary image, skills and resources */}
                    <section style={{ ...styles.general, backgroundColor: '#fafafa', boxShadow: 'rgb(225, 228, 232) 0px 1px', paddingTop: '50px', paddingBottom: '50px' }}>


                        {data.order.map((item) => {
                            switch (item.type) {
                                case 'code':
                                    return <CodeGist url={data.code[item.index].url}>
                                        {data.code[item.index].title !== '' &&
                                            <h1 style={{ ...styles.secondaryPara, textAlign: 'left', fontSize: '20px', fontWeight: 300 }}> {data.code[item.index].title}</h1>
                                        }
                                    </CodeGist>
                                        ;
                                    break;
                                case 'image':
                                    return largeImage(item.index);
                                    break;
                                case 'link':
                                    return referenceLinks();
                                    break;
                                case 'reference':
                                    return reference(item.index);
                                    break;
                                case 'technologies':
                                    return technologies();
                                    break;
                                case 'paragraph':
                                    return paragraph(item.index);
                                    break;
                                case 'component':
                                    let Comp = data.component[item.index];
                                    return <div style={{ display: 'flex', width: '100%', justifyContent: 'center', margin: '30px 5px', minHeight: '100px' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', overflow: 'auto', maxWidth: '720px', padding: '20px 0px' }}>
                                            {typeof data.component[item.index] === 'object' ? data.component[item.index] : <Comp />}
                                        </span>
                                    </div>
                                    break;
                                default:
                                    return null
                            }
                        })}

                    </section>


                    {/* Contact form */}
                    <section style={{ ...styles.general, height: width > 980 ? '770px' : '100%', display: 'inline-flex', justifyContent: 'center', marginTop: '100px' }}>
                        <Contact standAlone={true} />
                    </section>
                </div>
                :

                <ProjectPageMobile onScroll={handleScroll} loading={loading} data={data} handleClickProject={handleClickProject} />
            }
        </React.Fragment >
    )
}

export default ProjectPage;




