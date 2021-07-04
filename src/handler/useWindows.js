import { useState, useEffect } from 'react';

const useWindows = () => {
    const [Width, setWidth] = useState(null);
    const [Height, setHeight] = useState(null);
    const handleRWD = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', handleRWD);
        handleRWD();
        return (() => {
            window.removeEventListener('resize', handleRWD);
        })
    }, []);

    return [Width, Height];
}

export default useWindows;