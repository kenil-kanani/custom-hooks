//* Create a hook that tracks the online/offline status of the user's network.

import { useEffect } from "react";

function useEventListener(event, callback) {
    useEffect(() => {
        window.addEventListener(event, callback);
        return () => {
            window.removeEventListener(event, callback);
        }
    }, []);
}

export default useEventListener;