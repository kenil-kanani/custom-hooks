function useDebounce(callback, time = 1000) {

    let id;
    return (...args) => {
        if (id) clearInterval(id);
        id = setTimeout(() => {
            callback(...args);
        }, time);
    }
}

export default useDebounce;