import React from 'react';

const Projects = () => {
    const styles = {
        container: {
            //display: 'flex',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            textAlign: 'center',
            fontSize: '1em',
            height: '100vh',
            width: '100%',
            //gridTemplateRows: '50% 50%',
            flexDirection: 'column',
            position: 'absolute',
            backgroundColor: 'blue'
        },
    }
    return (
        <React.Fragment>
            <section style={styles.container}>
            </section>
        </React.Fragment>
    )
}

export default Projects;