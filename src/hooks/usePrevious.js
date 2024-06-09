import { useEffect, useRef, useState } from "react";

function usePrevious(state) {
    const previous = useRef("Pahli state hai bhai :)");

    useEffect(() => {
        previous.current = state;
    }, [state]);

    return previous.current;
}

export default usePrevious;