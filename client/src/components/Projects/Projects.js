import React, { useState, useEffect } from 'react';
import './Project.css';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

const shortProjects = [
    { url: '/projects/machinerypal', title: 'Machinery Pal', img: 'machinerypal.png', description: 'Fleet Ecommerce Site' },
    { url: '/projects/katena', title: 'Katena', img: 'katena.png', description: 'The training and development bot that provides ongoing support to employees, preserves the continuity of institutional knowledge, all while protecting the bottom-line.' },
    { url: '/projects/zipcodes-pkg', title: 'Zipcode NPM package', img: 'zipcodes-pkg.png', description: 'LightWeight NPM package to lookup for zipcodes, cities, radius distance etc' },
    { url: '/projects/zipcodees-api', title: 'Zipcode Lookup API', img: 'zipcodes-api.png', description: 'Nodejs API to lookup for zipcode related information, including distances, cities within zip codes etc' },
    { url: '/projects/machinerypal', title: 'Machinery Pal', img: 'machinerypal.png', description: 'Fleet Ecommerce Site' },
    { url: '/projects/katena', title: 'Katena', img: 'katena.png', description: 'The training and development bot that provides ongoing support to employees, preserves the continuity of institutional knowledge, all while protecting the bottom-line.' },
    { url: '/projects/zipcodes-pkg', title: 'Zipcode NPM package', img: 'zipcodes-pkg.png', description: 'LightWeight NPM package to lookup for zipcodes, cities, radius distance etc' },
    { url: '/projects/zipcodees-api', title: 'Zipcode Lookup API', img: 'zipcodes-api.png', description: 'Nodejs API to lookup for zipcode related information, including distances, cities within zip codes etc' },
    { url: '/projects/machinerypal', title: 'Machinery Pal', img: 'machinerypal.png', description: 'Fleet Ecommerce Site' },
    { url: '/projects/katena', title: 'Katena', img: 'katena.png', description: 'The training and development bot that provides ongoing support to employees, preserves the continuity of institutional knowledge, all while protecting the bottom-line.' },
    { url: '/projects/zipcodes-pkg', title: 'Zipcode NPM package', img: 'zipcodes-pkg.png', description: 'LightWeight NPM package to lookup for zipcodes, cities, radius distance etc' },
    { url: '/projects/zipcodees-api', title: 'Zipcode Lookup API', img: 'zipcodes-api.png', description: 'Nodejs API to lookup for zipcode related information, including distances, cities within zip codes etc' },
]

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


const Projects = () => {

    const styles = {
        wrapper: {
            position: 'fixed',
            left: '300px',
            width: 'calc(100% - 300px)',
            height: '100%',
            //color: '#464646',
            overflow: 'hidden scroll'
        },
        top: {
            width: '100%',
            height: '50px',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            //boxShadow: 'rgb(225, 228, 232) 0px -1px 0px inset'
        },
        listIcon: {
            color: '#888888',
            cursor: 'pointer',
            marginRight: '5px',
            fontSize: '2rem'
        },
        ul: {
            width: '100%',
            height: '100%',
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            //backgroundColor: 'gray',
            //paddingLeft: '50px',
            //marginTop: '15px',
            margin: 0,
            padding: 0,
            //boxShadow: 'rgb(225, 228, 232) 0px -1px 0px inset'
        },
        li: {
            display: 'flex',
            position: 'relative',
            padding: '20px 0px',
            width: '100%',
            height: '110px',
            cursor: 'pointer'
            //backgroundColor: 'aliceblue'
        },
        span: {
            display: 'flex',
            alignItems: 'center',
            width: '175px',
            height: '110px',
            minWidth: '175px',
            minHeight: '110px',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            borderStyle: 'solid',
            borderColor: '#e3e3e3',
            borderWidth: '1px',
            borderRadius: '25px 23px 20px 3px'
        },
        description: {
            width: '490px',
            padding: '0 55px',
            overflow: 'hidden',
            whiteSpace: 'normal',
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'left',
            height: '100%',
            //background: 'cornflowerblue'
        },
        title: {
            margin: 0,
            padding: 0,
            fontSize: '1.5rem',
            lineHeight: 1.3,
            letterSpacing: '-.025rem',
        },
        descriptionText: {
            fontSize: '14px',
            lineHeight: '18px',
            color: '#606060'
        }
    }

    return (
        <section style={styles.wrapper}>
            <div style={styles.top}>
                <ViewListIcon style={styles.listIcon} />
                <ViewModuleIcon style={{ ...styles.listIcon, marginRight: '25px' }} />
            </div>
            <ul style={styles.ul}>

                {shortProjects.map(item =>

                    <li className='project' style={styles.li}>
                        <span style={{ ...styles.span, backgroundImage: `url("${item.img}")` }}></span>
                        <div style={styles.description}>
                            <h3 style={styles.title}>{item.title}</h3>
                            <span style={styles.descriptionText}>{item.description}</span>
                        </div>
                    </li>

                )}
                {/* <SlideOnLoad direction='right'>
                </SlideOnLoad> */}
            </ul>

        </section>

    )
}

export default Projects;