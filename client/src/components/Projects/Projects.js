import React, { useState, useEffect } from 'react';
import './Project.css';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

import Projects2 from './Projects2';

import { useHistory, useLocation, Link } from "react-router-dom";

//custom hooks
import useWindowsSize from '../../hooks/Dimms/useWindowSize'

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




const Projects = ({ loading, data }) => {
    const [width, height] = useWindowsSize();
    console.log(width, height)
    const [view, setView] = useState(true); //true for module view, false for list view
    const history = useHistory();

    const styles = {
        wrapper: {
            //position: 'fixed',
            left: width > 980 ? '300px' : '0px',
            width: width > 980 ? 'calc(100% - 300px)' : '100%',
            height: '100%',
            position: 'fixed',
            overflow: 'auto',
            padding: '5px'
            //color: '#464646',
            //overflow: 'hidden scroll'
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
            display: 'grid',
            justifyContent: 'left',
            alignItems: 'center',
            flexWrap: 'wrap',
            //backgroundColor: 'gray',
            //paddingLeft: '50px',
            //marginTop: '15px',
            margin: 0,
            padding: 0,
            paddingLeft: '50px',
            //boxShadow: 'rgb(225, 228, 232) 0px -1px 0px inset'
            ...(view ? { gridTemplateColumns: width > 1400 ? '20% 20% 20% 20% 20%' : (width > 1200 ? '25% 25% 25% 25%' : (width > 980 ? '33% 34% 33%' : (width > 600 ? '50% 50%' : '100%'))), marginTop: '0px', paddingLeft: '0px', } : {})
        },
        li: {
            display: 'flex',
            position: 'relative',
            padding: '20px 0px',
            width: '100%',
            height: '150px',
            cursor: 'pointer',
            //backgroundColor: 'aliceblue'
            ...(view ? { display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' } : {})
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
            borderRadius: '25px 23px 20px 3px',
            ...(view ? { justifySelf: 'center' } : {})
        },
        description: {
            width: '350px',
            padding: '0 55px',
            overflow: 'hidden',
            whiteSpace: 'normal',
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            //justifyContent: 'center',
            justifyContent: 'flex-start',
            textAlign: 'justify',
            height: '100%',
            //background: 'cornflowerblue'
            ...(view ? { height: 'unset', justifyContent: 'left', width: '170px', display: 'grid', textAlign: 'center', padding: 0, paddingTop: '15px' } : {})
        },
        title: {
            margin: 0,
            padding: 0,
            fontSize: '1.2rem',
            lineHeight: 1.3,
            fontWeight: 400,
            marginBottom: '5px',
            letterSpacing: '-.025rem',
            ...(view ? { textAlign: 'left', fontSize: '1rem', maxWidth: '170px' } : {})
        },
        descriptionText: {
            fontSize: '14px',
            lineHeight: '18px',
            color: '#606060',
            ...(view ? { textAlign: 'left', fontSize: '12px', maxWidth: '170px' } : {})
        }
    }

    const handleViewChange = (type) => {
        if (type === 'list') {
            setView(false);
        } else {
            setView(true);
        }
    }

    const handleClickProject = (url) => {
        loading(history, url);
    }

    return (
        <React.Fragment>
            <section style={styles.wrapper}>
                <div style={styles.top}>
                    {width > 500 &&
                        <React.Fragment>
                            <ViewListIcon onClick={(e) => { e.preventDefault(); handleViewChange('list'); }} style={styles.listIcon} />
                            <ViewModuleIcon onClick={(e) => { e.preventDefault(); handleViewChange('module'); }} style={{ ...styles.listIcon, marginRight: '25px' }} />
                        </React.Fragment>
                    }
                </div>
                <ul style={styles.ul}>

                    {data.map((item, index) =>
                        <li key={index} className='project' onClick={(e) => { e.preventDefault(); handleClickProject(item.url); }} style={styles.li}>
                            <span style={{ ...styles.span, backgroundImage: `url("${item.img}")` }}></span>
                            <div style={styles.description}>
                                <h3 style={styles.title}>{item.title}</h3>
                                <span style={styles.descriptionText}>{item.description}</span>
                            </div>
                        </li>
                    )}

                </ul>
            </section>
        </React.Fragment>
    )
}

export default Projects;