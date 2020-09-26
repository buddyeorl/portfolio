import React from 'react';

const Contact = () => {
    const styles = {
        wrapper: {
            position: 'fixed',
            display: 'grid',
            alignItems: 'center',
            justifyItems: 'center',
            left: '300px',
            width: 'calc(100% - 300px)',
            padding: '20px',
            height: '100%',
            backgroundColor: '#464646',
            overflow: 'hidden scroll'
        }
    }
    return (
        <React.Fragment>
            <div style={styles.wrapper}>
                <div style={{ backgroundColor: 'white', height: '300px', width: '500px' }}>
                    <div style={{ backgroundColor: 'white', height: '300px', width: '500px' }}>
                        <input></input>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact;