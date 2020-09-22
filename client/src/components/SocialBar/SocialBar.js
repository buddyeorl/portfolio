import React, { useState, useEffect } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';


const Item = ({ icon, styles, backgroundColor = 'white', iconColor = '#7a7a7a' }) => {
    const [hover, setHover] = useState(false);
    const [newChild, setNewChild] = useState(icon)

    const handleOnMouseEnter = (e) => {
        setHover(true)
    }

    const handleOnMouseLeave = (e) => {
        setHover(false)
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
        <li onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} style={{ ...styles.li, cursor: 'pointer', width: hover ? '75px' : '100%', backgroundColor: hover ? backgroundColor : 'unset', transition: 'width 200ms' }}>
            <a style={styles.a}>
                {newChild}
            </a>
        </li>)
}

const SocialBar = () => {
    const styles = {
        container: {
            zIndex: 1001,
            position: 'fixed',
            left: 0,
            top: 'calc(50% - (275px / 2))',
            width: '55px',
            height: '275px',
        },
        ul: {
            listStyle: 'none',
            margin: 0,
            padding: 0,
        },
        li: {
            listStyle: 'none',
            margin: 0,
            padding: 0,
            width: '100%'
        },
        a: {
            WebkitAlignItems: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '55px',
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
        }
    }
    return (
        <div style={styles.container}>
            <ul style={styles.ul}>
                <li>
                    <small style={styles.small}>
                        Follow Me
                    </small>
                </li>
                <Item styles={styles} backgroundColor={'#4e545a'} iconColor={'#7a7a7a'} icon={<GitHubIcon style={styles.smallIcons} />} />
                <Item styles={styles} backgroundColor={'#0077ba'} iconColor={'#7a7a7a'} icon={<LinkedInIcon style={styles.smallIcons} />} />
                <Item styles={styles} backgroundColor={'#3299ff'} iconColor={'#7a7a7a'} icon={<TwitterIcon style={styles.smallIcons} />} />
                <Item styles={styles} backgroundColor={'#4868ad'} iconColor={'#7a7a7a'} icon={<FacebookIcon style={styles.smallIcons} />} />
            </ul>
        </div>)
}

export default SocialBar;