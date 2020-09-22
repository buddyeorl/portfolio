import React, { useState, useEffect } from 'react';

const Buff = ({ children: child }) => {
    const [newChild, setNewChild] = useState(null)
    const [scale, setScale] = useState(false);
    const [click, setClick] = useState(false);

    useEffect(() => {
        //console.log('========CLONING CHILDREN HERE ==========', child)
        let newProps = {
            onMouseEnter: () => { setScale(true); },
            onMouseLeave: () => { setScale(false); setClick(false); },
            onMouseDown: () => { setClick(true); },
            onMouseUp: () => { setClick(false); },
            style: {
                ...child.props.style && child.props.style,
                ...{
                    boxShadow: scale ? (click ? `0px 0px 0px 6px #a3b9e0d9` : `0px 0px 0px 3px #a3b9e0d9`) : '0px 0px 0px 0px',
                    transition: 'box-shadow 0.2s',
                }
            }
        }

        setNewChild(React.cloneElement(child, { ...child.props, ...newProps }))
    }, [scale, click])

    return (
        newChild && newChild

    )
}

export default Buff;