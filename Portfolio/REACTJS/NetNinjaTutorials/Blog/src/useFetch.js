import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const abortCont = new AbortController();

    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
               return res.json();
            })
            .then(data =>{
                console.log(data);
                setBlogs(data)
            })

        return () => abortCont.abort();    
    }, [url]);

    return { blogs }
}

export default useFetch;