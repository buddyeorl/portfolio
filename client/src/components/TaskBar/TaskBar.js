import React, { useState } from 'react';

import ChatButton from '../ChatButton'

//transitions
import Buff from '../../effects/Buff'

//icons
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import AssignmentIcon from '@material-ui/icons/Assignment';

//effects
import Typing from '../../effects/Typing';
import Loading from '../Loading'

//react router
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';


const TaskBar = ({ loading }) => {
    const history = useHistory();
    const [animation1Ended, setAnimation1Ended] = useState(false)
    // const [loading, setLoading] = useState();

    useEffect(() => {
        setTimeout(() => {
            setAnimation1Ended(true)
        }, 400)
    }, [])

    const styles = {
        container: {
            //boxShadow: 'rgb(225, 228, 232) 0px 1px 0px inset'
            position: 'relative',
            top: '-50px',
            transition: 'top 500ms'
        },
        ul: {
            padding: 0,
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'center',
        },
        li: {
            margin: '0px 10px',
            padding: '0px 15px',
            cursor: 'pointer',
            minWidth: '100px',
            minHeight: '40px',
            display: 'grid',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            gridTemplateColumns: 'auto auto',
            borderRadius: '5px',
            color: 'dimgray',
            //fontWeight: 500,
            textTransform: 'capitalize',
        },
        span: {
            marginLeft: '5px'
        }
    }

    const handleEffectEnded = () => {
        setAnimation1Ended(true)
    }

    return (
        <React.Fragment>

            <nav style={{ ...styles.container, top: animation1Ended ? '0px' : '-50px' }}>
                <ul style={styles.ul}>

                    <li style={styles.li} onClick={() => { loading(history, "/projects") }}>

                        <ChatButton label={'Projects'} width={100} direction='right'>
                            <AccountTreeIcon />
                        </ChatButton>
                    </li>


                    <li style={styles.li} onClick={() => { loading(history, "/resume") }}>


                        <ChatButton label={'The CV'} width={100} direction='left'>
                            <AssignmentIcon />
                        </ChatButton>

                    </li>


                </ul>
            </nav>
        </React.Fragment>
    )
}


export default TaskBar;