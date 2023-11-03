import React from 'react';

const useEscapeKey = (callback) => {
    React.useEffect(() => {
        const handleEscape = (event) => {
            if(event.key === 'Escape') {
            callback(event);
            }
        }
        window.addEventListener('keydown', handleEscape);
        return () => {
            window.removeEventListener('keydown', handleEscape);
        }
    }, [callback]);
}

export default useEscapeKey;