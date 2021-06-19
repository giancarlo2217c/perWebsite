import react from 'react'
import { useEffect, useState } from 'react'

export default function useWindowSize() {

    const [windowSize, setWindowSize] = useState({ width: undefined, height: undefined });
    
    function handleResize() {

        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    useEffect( () => {

        // Add event Listener for future updates
        window.addEventListener("resize", handleResize);

        handleResize(); // call right after for the first update.

        return () => { window.removeEventListener("resize", handleResize) }

    }, [])

    return windowSize


}