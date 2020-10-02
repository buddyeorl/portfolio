import { useState, useLayoutEffect } from 'react'

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight, window.pageYOffset]);
        }
        function updateScroll() {
            setSize([window.innerWidth, window.innerHeight, window.pageYOffset]);
        }
        window.addEventListener('resize', updateSize);
        window.addEventListener('scroll', updateScroll);
        updateSize();
        return () => { window.removeEventListener('resize', updateSize); window.removeEventListener('scroll', updateScroll); };
    }, []);
    return size;
}

export default useWindowSize;