//* Create a hook that detects when an element is hovered over.

import { useState } from "react";

function useHover(ref) {
    const [isHover, setIsHover] = useState(false);

    if (!ref.current) return false;

    ref.current.addEventListener('mouseover', () => {
        if (!isHover) setIsHover(true);
    })

    ref.current.addEventListener('mouseout', () => {
        if (isHover) setIsHover(false);
    })

    return isHover;
}

export default useHover;