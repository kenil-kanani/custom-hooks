//* Create a hook that abstracts setTimeout and clearTimeout logic.

function useTimeout(callback , time=1000) {
    let id;
    if(id) clearInterval(id);
    return (...args) => {
        id = setTimeout(() => {
            callback(...args);
        } , time)
    }
}

export default useTimeout;