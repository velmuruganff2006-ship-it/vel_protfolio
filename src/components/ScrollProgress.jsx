import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            style={{
                scaleX: scrollYProgress,
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #ff2e63, #ff7b54, #00d1ff)',
                transformOrigin: '0%',
                zIndex: 10000,
                boxShadow: '0 0 10px rgba(255, 46, 99, 0.5)'
            }}
        />
    );
};

export default ScrollProgress;
