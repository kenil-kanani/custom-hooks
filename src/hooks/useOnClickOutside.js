function useOnClickOutside(ref, callback) {
    if (!ref.current) return;

    window.addEventListener('click', (event) => {
        if (event.target !== ref.current) {
            callback();
        }
    });
}

export default useOnClickOutside;

//- Todo : web page stucks after 10-11 clicks :)
// Implementation may be wrong :)