import { useState } from "react";

function useFetch(url, requestOptions) {
    const [loading, setIsLoading] = useState(true); // boolean
    const [error, setError] = useState("");
    const [response, setResponse] = useState(null);

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(
            (response) => {
                setResponse(response);
                setError("");
                setIsLoading(false);
            },
            (error) => {
                setError(error.message);
                setResponse(null);
                setIsLoading(false);
            }
        )

    return [loading, error, response];
}

export default useFetch;