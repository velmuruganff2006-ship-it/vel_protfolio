import { useState, useEffect } from 'react';

export const useTypewriter = (text, speed = 150, delay = 1000) => {
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (index < text.length) {
                setDisplayText((prev) => prev + text.charAt(index));
                setIndex((prev) => prev + 1);
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [index, text, speed]);

    return displayText;
};
