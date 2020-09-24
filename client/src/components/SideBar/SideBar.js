import React from 'react';

import Description from './Description';
import SideNav from './SideNav';

const SideBar = ({ loading }) => {
    const styles = {
        sideBar: {
            position: 'fixed',
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
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
        <div style={styles.sideBar}>
            <div style={styles.wrapper}>
                <Description loading={loading} />
                <SideNav />
            </div>
        </div>
    )
}

export default SideBar;