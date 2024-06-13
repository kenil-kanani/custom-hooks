import { useState } from "react";

function useOnlineStatus() {
    const [online, setOnline] = useState(false);

    window.addEventListener('load', function () {
        if (navigator.onLine) {
            setOnline(true)
        } else {
            setOnline(false)
        }
    }, false);

    window.addEventListener('online', function (e) {
        setOnline(true);
    }, false);

    window.addEventListener('offline', function (e) {
        setOnline(false);
    }, false);

    return online;
}

export default useOnlineStatus;