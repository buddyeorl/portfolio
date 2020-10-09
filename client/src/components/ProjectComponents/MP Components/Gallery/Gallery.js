import React, { useState, useEffect, useRef } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import { makeStyles } from '@material-ui/core/styles';
//icons
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import IconButton from '@material-ui/core/IconButton';
import Skeleton from '@material-ui/lab/Skeleton';


const useStyles = makeStyles({
    paper: {
        marginTop: '32px',
        marginBottom: '32px',
        marginLeft: '0px',
        marginRight: '0px',
        padding: '0px',
        backgroundColor: 'black',
        paddingTop: '32px',
    },


});


const ImgWithLoading = ({ src, style, styleParent, ref1, className = '', alt = '', onClick = () => { return } }) => {
    const [loading, setLoading] = useState(true)
    return (
        <React.Fragment>

            {loading && <Skeleton variant="rect" style={{ ...styleParent, justifyContent: 'center', justifySelf: 'center' }} />}
            <img ref={ref1} onClick={onClick} onLoad={(e) => { e.preventDefault(); setLoading(false) }} src={src} style={style} alt='' />
        </React.Fragment>

    )
}

const ZoomableImage = ({ image, onClick }) => {
    const classes = useStyles();
    const [pinch, setPinch] = useState([])
    const [midPointPerc, setMidPointPerc] = useState(0)
    const [width, setWidth] = useState('100%')
    const [overflowOnTouch, setOverflowOnTouch] = useState('overflow')



    return (
        <Dialog classes={{

            paper: classes.paper, // class name, e.g. `classes-nesting-root-x`

        }} open={true} style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: 'black', top: 0, zIndex: 100, overflow: 'scroll', display: 'grid', paddingTop: '8px', alignContent: 'baseline', touchAction: 'none' }}>

            <div style={{ backgroundColor: 'black', justifySelf: 'start', width: '100%', position: 'fixed', top: '0', left: '0', zIndex: 1, opacity: `${pinch.length === 2 ? 0 : 1}`, transition: 'opacity 1s' }}>
                <Button onClick={onClick} style={{ color: 'white', width: '100%', height: '64px' }}> Go Back</Button>
            </div>
            <div style={{ backgroundColor: 'black', display: 'grid', position: 'fixed', top: 0, left: 0, height: '100%', overflow: overflowOnTouch, width: '100%', touchAction: 'pan-x pan-y' }}>
                <img
                    onPointerDown={(e) => {
                        e.persist()
                        e.preventDefault();
                        let tempPinch = pinch
                        tempPinch.prevDist = false
                        tempPinch.push(e)
                        //add to the last event pushed to tempPinch
                        tempPinch[tempPinch.length - 1].prevDist = false
                        //location of the touch in percentage to the img total width
                        let percentageX = Math.floor(100 * ((e.clientX + (-e.target.x) + pinch[0].clientX + (-e.target.x)) / 2) / e.target.width);
                        let percentageY = Math.floor(100 * ((e.clientY + (-e.target.y) + pinch[0].clientY + (-e.target.y)) / 2) / e.target.height);
                        let percentageScreenX = Math.floor(100 * ((e.clientX + pinch[0].clientX) / 2) / e.target.parentElement.clientWidth);
                        let percentageScreenY = Math.floor(100 * ((e.clientY + pinch[0].clientY) / 2) / e.target.parentElement.clientHeight);
                        setPinch(tempPinch)
                        setMidPointPerc([percentageX / 100, percentageY / 100, percentageScreenX / 100, percentageScreenY / 100])
                        if (tempPinch.length === 2) {
                            setOverflowOnTouch('hidden');
                        }
                        console.log(midPointPerc)
                    }}
                    onPointerMove={(e) => {
                        e.persist()
                        e.preventDefault();
                        let tempPinch = pinch;
                        let a;
                        let b;
                        let dist;
                        if (pinch.length > 1) {
                            if (e.pointerId === pinch[1].pointerId) {
                                tempPinch[1] = e;
                                a = Math.pow(e.clientX - pinch[0].clientX, 2)
                                b = Math.pow(e.clientY - pinch[0].clientY, 2)
                                dist = Math.sqrt(a + b)
                                tempPinch[1].prevDist = dist
                                //setting prevDist to initial distance on first run
                                if (!tempPinch[0].prevDist) {
                                    tempPinch[0].prevDist = dist
                                }
                            } else {
                                tempPinch[0] = e;
                                tempPinch[0].prevDist = tempPinch[1].prevDist
                            }
                        } else {
                            return
                        }
                        if (e.pointerId === pinch[1].pointerId) {
                            if (tempPinch[1].prevDist > tempPinch[0].prevDist) {
                                if (4 * e.target.parentElement.clientHeight > e.target.height + (pinch[1].prevDist - pinch[0].prevDist)) {
                                    for (let i = e.target.width; i < (e.target.width + e.target.width / 15); i++) {
                                        setWidth(`${e.target.width + 60}px`)
                                        e.target.parentElement.scrollLeft = ((e.target.width + 60) * midPointPerc[0]) - e.target.parentElement.clientWidth * midPointPerc[2]
                                        e.target.parentElement.scrollTop = ((e.target.height) * midPointPerc[1]) - e.target.parentElement.clientHeight * midPointPerc[3]

                                    }
                                }
                            } else {
                                if (e.target.parentElement.clientWidth < e.target.width - (pinch[0].prevDist - pinch[1].prevDist)) {
                                    for (let i = e.target.width; i > (e.target.width - e.target.width / 15); i--) {
                                        setWidth(`${i}px`)
                                        e.target.parentElement.scrollLeft = ((i) * midPointPerc[0]) - e.target.parentElement.clientWidth * midPointPerc[2]
                                        e.target.parentElement.scrollTop = ((e.target.height) * midPointPerc[1]) - e.target.parentElement.clientHeight * midPointPerc[3]

                                    }
                                    //e.target.parentElement.scrollTop = e.target.parentElement.scrollTop + (pinch[1].prevDist - pinch[0].prevDist)
                                } else {
                                    //set width to 100% when pinch distance will reduce width below 100%
                                    setWidth('100%');
                                }
                            }
                        }
                        return
                    }}
                    onPointerUp={(e) => {
                        e.persist()
                        e.preventDefault();
                        setOverflowOnTouch('scroll')
                        setPinch([]);
                    }}

                    //fix safari not triggering onPointerUp when one point gesture was capture, this is due to scroll being active.
                    onPointerCancel={(e) => {
                        e.persist()
                        e.preventDefault();
                        setOverflowOnTouch('scroll')
                        setPinch([]);
                    }}
                    style={{ width: width, left: 0, zIndex: '40', alignSelf: 'center' }} src={image} alt='' />
            </div>

        </Dialog>
    )
}

const FullScreenGallery = ({ images, onClick }) => {
    const classes = useStyles();
    const [zoomable, setZoomable] = useState(false)
    const [zoomableImg, setZoomableImg] = useState('')
    // set initial window scroll
    const [scrollY, setScrollY] = useState(window.scrollY)

    useEffect(() => {
        //prevent background scroll from touch or scroll
        document.body.style.position = 'fixed'
    }, [])

    const handleClick = (e, image) => {
        e.preventDefault();
        console.log('clicked here')
        setZoomableImg(image);
        setZoomable(true);
    }

    const handleGoBack = (e) => {
        e.preventDefault();
        //set body back to absolute and scroll to original position
        document.body.style.position = 'absolute'
        window.scrollTo(0, scrollY)
        //received prop onclick
        onClick(e);
    }

    return (
        <React.Fragment>
            {zoomable &&
                <ZoomableImage image={zoomableImg} onClick={(e) => { e.preventDefault(); setZoomable(false) }} />
            }
            <Dialog classes={{

                paper: classes.paper, // class name, e.g. `classes-nesting-root-x`

            }} open={true} style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: 'black', top: 0, zIndex: 99, overflow: 'scroll', display: 'grid', paddingTop: '8px', alignContent: 'baseline' }}>
                <div style={{ backgroundColor: 'black', justifySelf: 'start', width: '100%', position: 'fixed', top: '0', left: '0' }}>
                    <Button onClick={handleGoBack} style={{ color: 'white', width: '100%', height: '64px' }}> Go Back</Button>
                </div>
                {images.map(img => {
                    console.log(`zoomable is =${zoomable}`)
                    return <div key={img} style={{ backgroundColor: 'black' }}>
                        <img onClick={(e) => { e.preventDefault(); handleClick(e, img) }} style={{ width: '100%' }} src={img} alt='' />
                    </div>
                }

                )}

            </Dialog>
        </React.Fragment>
    )

}

const GalleryMobile = ({ images }) => {
    const ref = useRef(null);
    const refMainDiv = useRef(null);
    const refCurImage = useRef(null);
    const [curImg, setCurImg] = useState(0);
    const [showOnTouch, setShowOnTouch] = useState(false)
    const [startX, setStartX] = useState(0);
    const [touchX, setTouchX] = useState(0);
    const [touchY, setTouchY] = useState(0);
    const [activateScroll, setActivateScroll] = useState(true)
    const [needDelay, setNeedDelay] = useState(false)
    const [myTimeOut, setMyTimeOut] = useState()
    const [fullScreenImg, setFullScreenImg] = useState(false)


    const handleImgClick = (e, index) => {
        e.preventDefault();
        // console.log(e.target.offsetLeft)
        // console.log(e.target.scrollLeft)
        // console.log(e.target.parentElement.offsetLeft)
        // console.log(e.target.parentElement.clientWidth)
        // console.log(e.target.parentElement.scrollWidth)
        // console.log(e.target.parentElement.scrollLeft)

        //synthetic scroll right when click/tap on right most image
        if (Math.abs(e.target.offsetLeft - e.target.parentElement.offsetLeft - e.target.parentElement.scrollLeft) > e.target.parentElement.clientWidth - e.target.clientWidth - 15) {
            refMainDiv.current.scrollLeft = e.target.offsetLeft - e.target.parentElement.offsetLeft + (e.target.clientWidth / 2) - (e.target.parentElement.clientWidth / 2)

        }
        //synthetic scroll left when click/tap on left most image
        if (Math.abs(e.target.offsetLeft - e.target.parentElement.offsetLeft - e.target.parentElement.scrollLeft) < e.target.clientWidth - 5) {
            refMainDiv.current.scrollLeft = e.target.offsetLeft - e.target.parentElement.offsetLeft + (e.target.clientWidth / 2) - (e.target.parentElement.clientWidth / 2)
        }
        setCurImg(index)
    }
    const handleNextClick = (e, left) => {
        e.preventDefault();
        if (left && curImg === 0) {
            //scroll to last image
            refMainDiv.current.scrollLeft = refMainDiv.current.scrollWidth
            //focus last image
            setCurImg(images.length - 1)
            return
        }
        if (!left && curImg === (images.length - 1)) {
            //scroll to first image
            refMainDiv.current.scrollLeft = 0
            //focus on first image
            setCurImg(0)
            return
        }

        setCurImg(curImg + (left ? -1 : +1))
        if (left) {

            refMainDiv.current.scrollLeft = (refMainDiv.current.scrollWidth / images.length) * (curImg - 3)
        } else {
            refMainDiv.current.scrollLeft = (refMainDiv.current.scrollWidth / images.length) * (curImg - 1)
        }


    }
    return (
        <React.Fragment>
            {fullScreenImg &&
                <FullScreenGallery onClick={(e) => { setFullScreenImg(false) }} images={images} />
            }

            <div
                style={{
                    width: '100%',
                    maxWidth: '400px',
                    padding: '18px',
                    height: '350px',
                    display: 'grid',
                    justifySelf: 'center',
                    justifyContent: 'space-between',
                    gridTemplateAreas:
                        " 'main' 'slider'", gridGap: '5px'
                }}>
                <div style={{ gridArea: 'main', display: 'inline-flex', justifyContent: 'center', overflow: 'hidden', touchAction: `${activateScroll ? 'pan-y' : 'pan-x'}`, borderRadius: '10px', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}>
                    {showOnTouch &&
                        <div style={{ minWidth: '100%', transform: `translateX(${touchX - startX}px)`, transition: `transform ${needDelay ? '0.07s' : '0s'}`, touchAction: 'none' }}>
                            <ImgWithLoading styleParent={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '100%', width: '100%', maxHeight: '250px' }} src={images[curImg === 0 ? (images.length - 1) : curImg - 1]} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '100%', width: '100%', height: '250px', maxHeight: '250px' }} />
                        </div>
                    }

                    <div ref={ref} style={{ minWidth: '100%', transform: `translateX(${touchX - startX}px)`, transition: `transform ${needDelay ? '0.07s' : '0s'}`, touchAction: `${activateScroll ? 'pan-y' : 'pan-x'}` }}
                        onTouchStart={(e) => { e.preventDefault(); setShowOnTouch(true); setStartX(e.changedTouches[0].clientX); setTouchX(e.changedTouches[0].clientX); setTouchY(e.changedTouches[0].clientY); }}
                        onTouchMove={(e) => {
                            e.preventDefault();
                            setTouchX(e.changedTouches[0].clientX);
                            setActivateScroll(false)
                            //reset timeout and prevent scroll to be reactivated
                            clearTimeout(myTimeOut)

                        }}
                        onTouchEnd={(e) => {
                            e.preventDefault();
                            // remove side images when user tap but dont slide
                            if (startX === touchX && e.changedTouches[0].clientY === touchY) {
                                setShowOnTouch(false)

                                //recognize tap without movement (similar to click) and set the screen to full screen, done due to safari not recognizing onclick events along with ontouch events
                                setFullScreenImg(true)
                            }
                            setNeedDelay(true);

                            // reactivate scroll after 1000ms
                            setMyTimeOut(setTimeout(() => { setActivateScroll(true) }, 400))

                            if (e.changedTouches[0].clientX > startX + 25) { setTouchX(ref.current.offsetWidth + startX) } else if (e.changedTouches[0].clientX < startX - 25) { setTouchX(-ref.current.offsetWidth + startX) } else { setTouchX(startX) }
                        }}
                        onTransitionEnd={(e) => { e.preventDefault(); setNeedDelay(false); setShowOnTouch(false); if (touchX > startX + 25) { handleNextClick(e, true) } else if (touchX < startX - 25) { handleNextClick(e, false) }; setTouchX(startX) }}

                    >
                        <ImgWithLoading styleParent={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '100%', width: '100%', maxHeight: '250px' }} src={images[curImg]} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '100%', width: '100%', height: '250px', maxHeight: '250px' }} />
                    </div>
                    {showOnTouch &&
                        <div style={{ minWidth: '100%', transform: `translateX(${touchX - startX}px)`, transition: `transform ${needDelay ? '0.07s' : '0s'}`, touchAction: 'none' }}>
                            <ImgWithLoading styleParent={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '100%', width: '100%', maxHeight: '250px' }} src={images[curImg === (images.length - 1) ? 0 : curImg + 1]} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '100%', width: '100%', height: '250px', maxHeight: '250px' }} />
                        </div>
                    }
                </div>

                <div style={{ display: 'grid', gridArea: 'slider', gridTemplateColumns: '5% 90% 5%', alignItems: 'center', justifyContent: 'space-between', maxHeight: '60px', alignSelf: 'center' }}>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxHeight: '60px', alignSelf: 'center' }}>
                        <IconButton onClick={(e) => { handleNextClick(e, true) }} size='small'>
                            <NavigateNextIcon style={{ fontSize: 'small', transform: 'rotate(180deg)' }} />
                        </IconButton>
                    </div>
                    <div ref={refMainDiv} style={{ display: 'flex', overflow: 'auto', borderRadius: '5px', maxHeight: '60px', alignSelf: 'center', scrollBehavior: 'smooth' }}>
                        {images.map((img, index) => {
                            return <ImgWithLoading key={index} ref1={refCurImage} onClick={(e) => handleImgClick(e, index)} src={img} styleParent={{ padding: '2px', minWidth: '60px', minHeight: '60px', maxWidth: '60px', maxHeight: '60px', width: '60px', height: '60px', borderRadius: '5px', }} style={{ padding: '1px', minWidth: '60px', minHeight: '60px', maxWidth: '60px', maxHeight: '60px', width: '60px', height: '60px', borderRadius: '5px', marginRight: '5px', border: curImg === index ? 'solid' : 'none', color: 'yellow' }} />
                        })}

                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxHeight: '60px', alignSelf: 'center' }}>
                        <IconButton onClick={(e) => { handleNextClick(e, false) }} size='small'>
                            <NavigateNextIcon style={{ fontSize: 'small' }} />
                        </IconButton>
                    </div>
                </div>

            </div >
        </React.Fragment>
    )
}


const Gallery = ({ images }) => {
    const [curImg, setCurImg] = useState(0);
    const refMainDiv = useRef(null);

    const handleImgClick = (e, index) => {
        e.preventDefault();
        console.log(e.target.src)
        setCurImg(index)

        //console.log(`offsetLeft - parentScrollLeft ${e.target.offsetLeft - e.target.parentElement.scrollLeft} and parent clientWidth ${e.target.parentElement.clientWidth}`)
        if (Math.abs(e.target.offsetLeft - e.target.parentElement.offsetLeft - e.target.parentElement.scrollLeft) > e.target.parentElement.clientWidth - e.target.clientWidth - 15) {
            //refMainDiv.current.scrollLeft = e.target.parentElement.scrollLeft + (e.target.offsetLeft - e.target.parentElement.scrollLeft) - e.target.parentElement.offsetLeft
            refMainDiv.current.scrollLeft = e.target.offsetLeft - e.target.parentElement.offsetLeft + (e.target.clientWidth / 2) - (e.target.parentElement.clientWidth / 2)
        }
        if (Math.abs(e.target.offsetLeft - e.target.parentElement.offsetLeft - e.target.parentElement.scrollLeft) < e.target.clientWidth - 5) {
            //refMainDiv.current.scrollLeft = e.target.parentElement.scrollLeft + (e.target.offsetLeft - e.target.parentElement.scrollLeft) - e.target.parentElement.offsetLeft
            refMainDiv.current.scrollLeft = e.target.offsetLeft - e.target.parentElement.offsetLeft + (e.target.clientWidth / 2) - (e.target.parentElement.clientWidth / 2)
        }
    }
    const handleNextClick = (e, left) => {
        e.preventDefault();
        console.log(`left : ${left}`)
        {/* if (left && curImg === 0) {
            setCurImg(images.length - 1)
            return
        }
        if (!left && curImg === (images.length - 1)) {
            setCurImg(0)
            return
        }
        setCurImg(curImg + (left ? -1 : +1)) */}

        e.preventDefault();
        if (left && curImg === 0) {
            //scroll to last image
            refMainDiv.current.scrollLeft = refMainDiv.current.scrollWidth
            //focus last image
            setCurImg(images.length - 1)
            return
        }
        if (!left && curImg === (images.length - 1)) {
            //scroll to first image
            refMainDiv.current.scrollLeft = 0
            //focus on first image
            setCurImg(0)
            return
        }

        setCurImg(curImg + (left ? -1 : +1))
        if (left) {

            refMainDiv.current.scrollLeft = (refMainDiv.current.scrollWidth / images.length) * (curImg - 3)
        } else {
            refMainDiv.current.scrollLeft = (refMainDiv.current.scrollWidth / images.length) * (curImg - 1)
        }
    }
    return (
        <div style={{
            padding: '5px',
            width: '100%',
            height: '400px',
            maxWidth: '500px',
            display: 'grid', gridTemplateAreas:
                "'main'  'slider'", gridGap: '5px'
        }}>

            <ImgWithLoading styleParent={{ display: 'flex', gridArea: 'main', alignItems: 'center', justifyContent: 'center', maxWidth: '100%', width: '100%', height: '100%' }} src={images[curImg]} style={{ display: 'flex', gridArea: 'main', alignItems: 'center', justifyContent: 'center', maxWidth: '100%', width: '100%', height: '310px', maxHeight: '310px', borderRadius: '5px' }} />


            <div style={{ display: 'grid', gridArea: 'slider', gridTemplateColumns: '5% 90% 5%', alignItems: 'center', justifyContent: 'space-between', maxHeight: '60px', alignSelf: 'center' }}>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxHeight: '60px', alignSelf: 'center' }}>
                    <IconButton onClick={(e) => { handleNextClick(e, true) }} size='small'>
                        <NavigateNextIcon style={{ fontSize: 'small', transform: 'rotate(180deg)' }} />
                    </IconButton>
                </div>
                <div ref={refMainDiv} style={{ display: 'flex', overflow: 'auto', borderRadius: '5px', maxHeight: '60px', alignSelf: 'center', scrollBehavior: 'smooth' }}>
                    {images.map((img, index) => {
                        return <ImgWithLoading key={index} onClick={(e) => handleImgClick(e, index)} src={img} styleParent={{ padding: '2px', maxWidth: '60px', maxHeight: '60px', width: '60px', height: '60px', borderRadius: '5px', }} style={{ padding: '1px', maxWidth: '60px', maxHeight: '60px', width: '60px', height: '60px', borderRadius: '5px', marginRight: '5px', border: curImg === index ? 'solid' : 'none', color: 'yellow' }} />
                    })}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxHeight: '60px', alignSelf: 'center' }}>
                    <IconButton onClick={(e) => { handleNextClick(e, false) }} size='small'>
                        <NavigateNextIcon style={{ fontSize: 'small' }} />
                    </IconButton>
                </div>
            </div>


        </div >
    )
}

export { Gallery, GalleryMobile };