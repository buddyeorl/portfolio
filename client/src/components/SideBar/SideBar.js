import React, { useState, useEffect } from 'react';

import Description from './Description';
import SideNav from './SideNav';
import MenuIcon from '@material-ui/icons/Menu';

import Intro from '../Intro'
import TaskBar from '../TaskBar';


//custom hooks
import useWindowsSize from '../../hooks/Dimms/useWindowSize';

const SlideOnLoad = ({ children, direction = 'right', initial = 0, end = 20, styles = { zIndex: 1 } }) => {
    const [trigger, setTrigger] = useState(false)
    const [transform, setTransform] = useState()


    useEffect(() => {
        switch (direction) {
            case 'right':
                setTransform(`translate(-${end})`);
                break;
            case 'left':
                setTransform(`translate(${end})`);
                break;
            case 'up':
                setTransform(`translateY(-${end})`);
                break;
            case 'down':
                setTransform(`translateY(${end})`);
                break;
            case 'custom':
                setTransform(trigger ? `translate(${initial})` : `translate(${end})`);
                break;
            default:
                setTransform(trigger ? 'translate(0px)' : `translate(-${end})`);
        }
    }, [direction])



    return (
        <span style={{ ...styles, top: initial, width: '100%', margin: 0, padding: 0, display: 'grid', gridArea: children.props.style.gridArea, alignContent: 'center', justifyContent: 'center', transform: transform, transition: 'transform 700ms' }}>
            {children}
        </span>
    )
}

const SideBarMobile = ({ loading, moveSocial }) => {
    const [open, setOpen] = useState(false);
    const [isIntroDone, setIsIntroDone] = useState(false);
    const handleIsIntroDone = () => {
        setIsIntroDone(true)
    }
    const styles = {
        sideBarButton: {
            position: 'fixed',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgb(63 158 234 / 85%)',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            bottom: 0,
            right: 0,
            marginRight: '25px',
            marginBottom: '25px',
            cursor: 'pointer',
        }
    }

    const handleClick = () => {
        setOpen(!open);
        moveSocial();
    }

    return (
        <React.Fragment>

            <SlideOnLoad direction={open ? 'down' : 'up'} initial='-100vh' end={'100vh'} styles={{ position: 'fixed', zIndex: 2 }}>
                <div style={{ width: '100vw', height: '100vh', backgroundColor: 'rgb(236 236 236)', boxShadow: '0px 0px 10px -1px', padding: '40px 20px' }}>
                    {/* <Description loading={loading} />
                    <SideNav onClick={handleClick} /> */}
                    <Intro effectEnded={handleIsIntroDone} />
                    {isIntroDone &&
                        <TaskBar loading={(history, path) => { history.push(path); handleClick(); }} />
                    }
                </div>
            </SlideOnLoad>

            {/* <SlideOnLoad direction={'down'} initial='90vh' end={'10vh'} zIndex={1}> */}
            <div onClick={handleClick} style={styles.sideBarButton}>
                {/* <Description loading={loading} /> */}
                {/* <SideNav /> */}
                <MenuIcon style={{ color: 'white' }} />
            </div>
            {/* </SlideOnLoad> */}
        </React.Fragment>)
}

const SideBar = ({ loading, moveSocial }) => {
    const [width, height] = useWindowsSize();

    const styles = {
        sideBar: {
            position: 'fixed',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '300px',
            minWidth: '300px',
            justify: 'space-between',
            boxShadow: 'rgb(225, 228, 232) -1px 0px 0px inset',
            textDecoration: 'none',
            color: '#8b8b8b',
            fontWeight: 700
        },
        wrapper: {
            padding: '20px 20px 20px 25px',
            textAlign: 'left'
        },
    }
    return (
        width > 980 ?
            <div style={styles.sideBar}>
                <div style={styles.wrapper}>
                    <Description loading={loading} />
                    <SideNav />
                </div>
            </div>
            :
            <React.Fragment><SideBarMobile loading={loading} moveSocial={moveSocial} /></React.Fragment>
    )
}

export default SideBar;