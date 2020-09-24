import React from 'react';

//material ui icons
import GitHubIcon from '@material-ui/icons/GitHub';

const GithubLabel = () => {
    const styles = {
        container: {
            width: '100%',
            height: '50px',
            backgroundColor: '#272a33',
            color: 'white',
            position: 'relative',
            display: 'flex',
            top: 'calc(100% - 50px)',
            justifyContent: 'center'
        },
        githubIcon: {
            alignSelf: 'center',
            marginRight: '5px'
        },
        text: {
            alignSelf: 'center',
            fontWeight: 'bold',
            fontSize: '12px'
        }
    }

    return (

        <a href='' alt='' style={styles.container}>

            <GitHubIcon style={styles.githubIcon} />
            <span style={styles.text}>Source on Github</span>
        </a>
    )
}

export default GithubLabel;