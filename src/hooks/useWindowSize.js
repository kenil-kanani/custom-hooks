import { useEffect, useState } from "react";
import useEventListener from "./useEventListener";

function useWindowSize() {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    //! Normal Life
    // useEffect(() => {
    //     window.addEventListener('resize', () => {
    //         setSize({
    //             width: window.innerWidth,
    //             height: window.innerHeight
    //         })
    //     })
    //     return () => {
    //         window.removeEventListener('resize', () => {
    //             setSize({
    //                 width: window.innerWidth,
    //                 height: window.innerHeight
    //             })
    //         })
    //     }
    // }, [])

    //! Mentos Life
    //* Reused our own hook :)
    useEventListener('resize', () => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    });

    return size;
}

export default useWindowSize;