import React, { useState, useEffect } from 'react';

//standard price formatting
const standardPrice = new Intl.NumberFormat('en-US',
    {
        style: 'currency', currency: 'USD',
        minimumFractionDigits: 0
    });

const SliderButton = ({ isEnd = false, onMouseDown = () => { }, onMouseUp = () => { }, newPosition, value, color }) => {
    const [scale, setScale] = useState(false);
    const [click, setClick] = useState(false);

    return (
        <React.Fragment>

            <div onMouseEnter={() => { setScale(true) }}
                onMouseLeave={() => { setScale(false); setClick(false); }}
                onMouseDown={(e) => { setClick(true); onMouseDown(e); }}
                onMouseUp={() => { setScale(false); setClick(false); }}
                onTouchStart={(e) => { setClick(true); onMouseDown(e); }}
                onTouchEnd={(e) => { setClick(false); onMouseUp(e); }}
                style={{ ...{ display: 'grid', placeContent: 'center', userSelect: 'none', WebkitTouchCallout: 'none', height: '10px', width: '10px', margin: '0px', padding: '8px', borderRadius: '50%', backgroundColor: color, position: 'relative', alignSelf: 'center', zIndex: 1, cursor: 'pointer', boxShadow: scale ? (click ? '0px 0px 0px 6px #a3b9e0d9' : '0px 0px 0px 3px #a3b9e0d9') : '0px 0px 0px 0px', transition: 'box-shadow 0.2s' }, ...isEnd ? { right: `${newPosition}px` } : { left: `${newPosition}px` } }}>
                <span style={{ position: 'relative', top: '-30px', color: 'gray', borderRadius: '5px', padding: '2px', backgroundColor: '#7fffd4e0', display: click ? 'unset' : 'none' }}>{value}</span>
            </div>
        </React.Fragment>
    )
}

const SliderRail = ({ color }) => {
    return (
        <React.Fragment>
            <div style={{ height: '2px', width: '100%', backgroundColor: color, position: 'relative', top: '9px', transform: 'scaleX(1)', userSelect: 'none', WebkitTouchCallout: 'none' }}>
            </div>
        </React.Fragment>
    )
}

const RangeSlider = ({ range = [1980, 2020], colorButtonLeft = 'gray', colorButtonRight = 'darkgray', colorRail = 'cornflowerblue', colorProgress = 'cornflowerBlue', label = 'Year', getValues = (startValue, endValue) => { console.log('Start=', startValue, ' End=', endValue) } }) => {
    const [startPosition, setStartPosition] = useState(0);
    const [endPosition, setEndPosition] = useState(0);
    const [curMouseEvent, setCurMouseEvent] = useState({ mouseDown: false, buttonClicked: 'none' });
    const [elements, setElements] = useState({})
    const [startValue, setStartValue] = useState(range[0]);
    const [endValue, setEndValue] = useState(range[1]);
    const [progress, setProgress] = useState({ width: 100, left: '5px' })
    // console.log('startValue= ', startValue, ' endValue=', endValue);

    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    const [touchPosition, setTouchPosition] = useState({ x: null, y: null });


    // console.log(mousePosition)
    const updateMousePosition = ev => {
        setMousePosition({ x: ev.clientX, y: ev.clientY, movement: ev.movementX });
    };

    const updateTouchPosition = ev => {
        // ev.preventDefault();
        //console.log(ev);
        setTouchPosition({ x: ev.changedTouches[0].clientX, y: ev.changedTouches[0].clientY, movement: ev.changedTouches[0].movementX });
    };

    useEffect(() => {

        if (curMouseEvent.mouseDown && curMouseEvent.buttonClicked === 'start') {
            if (touchPosition.x >= elements.parent.x + 10 && touchPosition.x <= elements.parent.width + elements.parent.x - 10 - elements.child.width - endPosition) {
                // console.log('e.client >= parent.')
                let dif = Math.abs(range[1] - range[0])
                setStartPosition(Math.floor(touchPosition.x - elements.parent.x - elements.child.width / 2))
                setStartValue(range[0] + Math.floor(((startPosition) * dif) / (elements.parent.width - elements.child.width - elements.child.width)))

            }
            setProgress({ width: (elements.parent.width - endPosition - startPosition - elements.child.width) * 100 / elements.parent.width, left: startPosition + 5 })
        }
        if (curMouseEvent.mouseDown && curMouseEvent.buttonClicked === 'end') {
            if (touchPosition.x >= elements.parent.x + elements.child.width + startPosition + 10 && touchPosition.x + 10 <= elements.parent.width + elements.parent.left) {
                let dif = Math.abs(range[1] - range[0])
                setEndPosition(Math.ceil(-touchPosition.x + elements.parent.width + elements.parent.left - elements.child.width / 2))

                setEndValue(range[0] + Math.ceil(((elements.parent.width - endPosition - elements.child.width - elements.child.width) * (dif)) / (elements.parent.width - elements.child.width - elements.child.width)))

            }
            setProgress({ width: (elements.parent.width - endPosition - startPosition - elements.child.width) * 100 / elements.parent.width, left: startPosition + 5 })
        }
    }, [touchPosition])




    useEffect(() => {

        if (curMouseEvent.mouseDown && curMouseEvent.buttonClicked === 'start') {
            if (mousePosition.x >= elements.parent.x + 10 && mousePosition.x <= elements.parent.width + elements.parent.x - 10 - elements.child.width - endPosition) {
                // console.log('e.client >= parent.')
                let dif = Math.abs(range[1] - range[0])
                setStartPosition(Math.floor(mousePosition.x - elements.parent.x - elements.child.width / 2))
                setStartValue(range[0] + Math.floor(((startPosition) * dif) / (elements.parent.width - elements.child.width - elements.child.width)))

            }
            setProgress({ width: (elements.parent.width - endPosition - startPosition - elements.child.width) * 100 / elements.parent.width, left: startPosition + 5 })
        }
        if (curMouseEvent.mouseDown && curMouseEvent.buttonClicked === 'end') {
            if (mousePosition.x >= elements.parent.x + elements.child.width + startPosition + 10 && mousePosition.x + 10 <= elements.parent.width + elements.parent.left) {
                let dif = Math.abs(range[1] - range[0])
                setEndPosition(Math.ceil(-mousePosition.x + elements.parent.width + elements.parent.left - elements.child.width / 2))

                setEndValue(range[0] + Math.ceil(((elements.parent.width - endPosition - elements.child.width - elements.child.width) * (dif)) / (elements.parent.width - elements.child.width - elements.child.width)))

            }
            setProgress({ width: (elements.parent.width - endPosition - startPosition - elements.child.width) * 100 / elements.parent.width, left: startPosition + 5 })
        }
    }, [mousePosition])

    //send values
    useEffect(() => {
        getValues(startValue, endValue)
    }, [startValue, endValue])

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener("touchmove", updateTouchPosition);
        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("touchmove", updateTouchPosition);
        }
    }, []);


    const handleMouseDown = (e, button) => {
        e.preventDefault();

        setCurMouseEvent({ mouseDown: true, buttonClicked: button })
        setElements({
            parent: e.target.parentElement.getBoundingClientRect(),
            child: e.target.getBoundingClientRect()
        })
        //console.log('mouseDown', e.clientX)

    }

    const handleMouseUp = (e, button) => {
        e.preventDefault();
        setCurMouseEvent({ mouseDown: false, buttonClicked: button })

    }


    const handleSlide = (e) => {
        e.preventDefault();
        e.persist();

        setElements({
            parent: e.target.parentElement.getBoundingClientRect(),
            child: e.target.getBoundingClientRect()
        })
        return
    }



    return (
        <React.Fragment>
            <span style={{ display: 'grid', gridTemplateColumns: '20% 60% 20%', justifyContent: 'flex-start', marginLeft: '45px', marginRight: '45px', fontWeight: 500, color: 'cadetblue', marginBottom: '5px', marginTop: '10px', textTransform: 'uppercase', fontSize: '12px', userSelect: 'none', WebkitTouchCallout: 'none' }}>
                <span style={{ display: 'flex' }}>{label}</span>
                <span >
                    <span style={{ fontSize: '12px', color: colorButtonLeft, fontWeight: 700, }}> {range.length === 3 && range[2] === '$' ? standardPrice.format(startValue) : startValue}</span>
                -
                <span style={{ fontSize: '12px', color: colorButtonRight, fontWeight: 700, }}> {range.length === 3 && range[2] === '$' ? standardPrice.format(endValue) : endValue}</span>
                </span>
                <span />
            </span>

            <div style={{ display: 'flex', position: 'relative', alignContent: 'center', height: '20px', width: '70%', marginLeft: '15%', touchAction: 'pan-x', userSelect: 'none', WebkitTouchCallout: 'none' }}>
                <span style={{ display: 'flex', width: `${progress.width}%`, left: `${progress.left}px`, height: '2px', backgroundColor: colorProgress, position: 'absolute', top: '9px', zIndex: 1 }}></span>
                {/* Left Button */}
                <SliderButton
                    color={colorButtonLeft}
                    isEnd={false}
                    onTouchStart={(e) => { handleMouseDown(e, 'start') }}
                    onTouchEnd={(e) => { handleMouseUp(e, 'start') }}
                    onMouseDown={(e) => { handleMouseDown(e, 'start') }}
                    onMouseUp={(e) => { handleMouseUp(e, 'start') }}
                    newPosition={startPosition}
                    value={range.length === 3 && range[2] === '$' ? standardPrice.format(startValue) : startValue}
                />
                {/*Rail */}
                <SliderRail color={colorRail} />
                {/* Right Rail */}
                <SliderButton
                    color={colorButtonRight} isEnd={true}
                    onTouchStart={(e) => { handleMouseDown(e, 'end') }}
                    onTouchEnd={(e) => { handleMouseUp(e, 'end') }}
                    onMouseDown={(e) => { handleMouseDown(e, 'end') }}
                    onMouseUp={(e) => { handleMouseUp(e, 'end') }}
                    newPosition={endPosition}
                    value={range.length === 3 && range[2] === '$' ? standardPrice.format(endValue) : endValue}
                />

            </div>
        </React.Fragment>
    )
}

export default RangeSlider;



