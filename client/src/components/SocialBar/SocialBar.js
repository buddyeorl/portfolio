import React, { useState, useEffect } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

//react router
import {
    useLocation
} from "react-router-dom";

//custom hooks
import useWindowsSize from '../../hooks/Dimms/useWindowSize'


const Item = ({ onMouseEnter, onMouseLeave, url, icon, styles, initialColor = 'white', backgroundColor = 'white', iconColor = '#7a7a7a' }) => {

    const [hover, setHover] = useState(false);
    const [newChild, setNewChild] = useState(icon)

    const handleOnMouseEnter = (e) => {
        setHover(true);
        onMouseEnter();
    }

    const handleOnMouseLeave = (e) => {
        setHover(false);
        onMouseLeave();
    }

    //use this to clone material icon received and changed color
    useEffect(() => {
        //console.log('========CLONING CHILDREN HERE ==========', child)
        let newProps = {
            style: {
                ...icon.props.style && icon.props.style,
                ...{
                    color: hover ? 'white' : iconColor
                }
            }
        }

        setNewChild(React.cloneElement(icon, { ...icon.props, ...newProps }))
    }, [hover])



    return (
        <React.Fragment>
            <li onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} style={{ ...styles.li, cursor: 'pointer', width: hover ? '75px' : '100%', backgroundColor: hover ? backgroundColor : initialColor, transition: 'width 200ms' }}>
                <a href={url} target='blank' style={styles.a}>
                    {newChild}
                </a>
            </li>
        </React.Fragment>)
}

const SocialBar = ({ extend = false, trigger = false }) => {
    const [width, height] = useWindowsSize();

    const socialAccounts = {
        github: { label: 'buddyeorl', url: 'https://github.com/buddyeorl' },
        linkedin: { label: 'alizarraga', url: 'https://www.linkedin.com/in/alizarraga/' },
        twitter: { label: 'A_Lizar', url: 'https://twitter.com/A_Lizar' },
        facebook: { label: 'alexander.lizarraga.144', url: 'https://www.facebook.com/alexander.lizarraga.144' }
    }
    const location = useLocation();
    const [socialLink, setSocialLink] = useState(null)

    const styles = {
        container: {
            zIndex: 3,
            position: 'fixed',
            left: 0,
            top: location.pathname === '/' ? 'calc(50% - (275px / 2))' : ((trigger || location.pathname === '/contact') ? (width > 500 ? 'calc(90% - (275px))' : 'calc(100% - 220px)') : 'calc(100% - (230px))'),
            width: '55px',
            height: '275px',
            overflow: 'initial',
            transition: 'top 500ms, left 500ms, transform 250ms',
            ...((trigger || location.pathname === '/contact') ? {
                left: width > 980 ? 'calc(50% + 300px - (300px / 2))' : 'calc(50%)',
                transform: 'rotate(-90deg)'
            } : {})
        },
        textContainer: {
            zIndex: 3,
            position: 'fixed',
            // left: width > 980 ? 'calc((50% + 300px) - 222px)' : 'calc(50% - 70px)',
            left: width > 980 ? 'calc((50% + 300px) - 222px)' : 'inherit',
            top: width > 500 ? 'calc(95% - 275px)' : 'calc(100% - 170px)',
            width: width > 980 ? '147px' : '100%',
            height: '52px',
            transition: 'top 500ms ease 0s, left 500ms ease 0s, transform 250ms ease 0s',
            transform: 'rotate(0deg)',
        },
        ul: {
            listStyle: 'none',
            margin: 0,
            padding: 0,
            overflow: 'initial',
        },
        li: {
            listStyle: 'none',
            margin: 0,
            padding: 0,
            width: '100%',
            //testing 

            // backgroundColor: '#ffffff9c',
            // boxShadow: '2px 0px 2px -2px'

        },
        a: {
            WebkitAlignItems: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '55px',
            ...((trigger || location.pathname === '/contact') ? {
                transform: 'rotate(90deg)'
            } : {
                    transform: 'rotate(0deg)'
                })
        },
        small: {
            left: '-2px',
            width: '100%',
            textAlign: 'right',
            color: '#7a7a7a',
            fontWeight: 600,
            fontSize: '.65em',
            marginLeft: '2px'
        },
        smallIcons: {
            left: '-2px',
            width: '100%',
            textAlign: 'right',
            color: '#7a7a7a',
            transition: 'transform 250ms',


        }
    }

    const handleOnMouseEnter = (item) => {
        console.log(item)
        setSocialLink(item)
    }

    return (
        <React.Fragment>
            <div style={styles.container}>
                <ul style={styles.ul}>
                    <Item url={socialAccounts.github.url} onMouseEnter={() => { handleOnMouseEnter(socialAccounts.github) }} onMouseLeave={() => { handleOnMouseEnter(null) }} styles={styles} backgroundColor={'#4e545a'} initialColor={'unset'} iconColor={'#7a7a7a'} icon={<GitHubIcon style={styles.smallIcons} />} />
                    <Item url={socialAccounts.linkedin.url} onMouseEnter={() => { handleOnMouseEnter(socialAccounts.linkedin) }} onMouseLeave={() => { handleOnMouseEnter(null) }} styles={styles} backgroundColor={'#0077ba'} initialColor={'unset'} iconColor={'#7a7a7a'} icon={<LinkedInIcon style={styles.smallIcons} />} />
                    <Item url={socialAccounts.twitter.url} onMouseEnter={() => { handleOnMouseEnter(socialAccounts.twitter) }} onMouseLeave={() => { handleOnMouseEnter(null) }} styles={styles} backgroundColor={'#3299ff'} initialColor={'unset'} iconColor={'#7a7a7a'} icon={<TwitterIcon style={styles.smallIcons} />} />
                    <Item url={socialAccounts.facebook.url} onMouseEnter={() => { handleOnMouseEnter(socialAccounts.facebook) }} onMouseLeave={() => { handleOnMouseEnter(null) }} styles={styles} backgroundColor={'#4868ad'} initialColor={'unset'} iconColor={'#7a7a7a'} icon={<FacebookIcon style={styles.smallIcons} />} />
                </ul>
            </div>
            {(trigger || location.pathname === '/contact') &&
                <div style={styles.textContainer}>
                    <p style={{ color: 'rgb(82, 82, 82)' }}>Let's get social now</p>
                    <a target='_blank' style={{ position: 'relative', top: '73px', color: 'rgb(82, 82, 82)' }}>{socialLink && socialLink.label} </a>

                </div>
            }

        </React.Fragment>
    )
}

export default SocialBar;