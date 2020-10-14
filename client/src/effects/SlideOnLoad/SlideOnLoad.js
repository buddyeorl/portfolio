import React, { useEffect, useState } from 'react'

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
    }, [])



    return (
        <span style={{ ...styles, top: initial, margin: 0, padding: 0, display: 'grid', alignContent: 'center', justifyContent: 'center', transform: transform, transition: 'transform 700ms' }}>
            {children}
        </span>
    )
}

export default SlideOnLoad;