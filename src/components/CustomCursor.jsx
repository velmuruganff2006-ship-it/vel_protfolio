import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            backgroundColor: "rgba(255, 46, 99, 0.3)",
        },
        text: {
            height: 150,
            width: 150,
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            mixBlendMode: "difference"
        }
    };

    return (
        <motion.div
            className='cursor'
            variants={variants}
            animate={cursorVariant}
            transition={{ type: "spring", hardness: 500, damping: 28 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 9999,
                border: '1px solid #ff2e63'
            }}
        />
    );
};

export default CustomCursor;
