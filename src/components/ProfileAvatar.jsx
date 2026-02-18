import React from 'react';
import { motion } from 'framer-motion';

const ProfileAvatar = () => {
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
                width: '350px',
                height: '350px',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {/* Background Gradient Circle */}
            <motion.div
                animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                        '0 0 20px rgba(255, 46, 99, 0.3)',
                        '0 0 40px rgba(255, 46, 99, 0.5)',
                        '0 0 20px rgba(255, 46, 99, 0.3)',
                    ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
                    border: '2px solid rgba(255, 46, 99, 0.5)',
                    zIndex: 0,
                }}
            />

            {/* Stylized Avatar SVG */}
            <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '85%', height: '85%', zIndex: 1 }}
            >
                <defs>
                    <linearGradient id="skinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffccaa" />
                        <stop offset="100%" stopColor="#ffb38a" />
                    </linearGradient>
                    <linearGradient id="shirtGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ff2e63" />
                        <stop offset="100%" stopColor="#ff7b54" />
                    </linearGradient>
                    <linearGradient id="hairGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#2c3e50" />
                        <stop offset="100%" stopColor="#1a252f" />
                    </linearGradient>
                </defs>

                {/* Neck */}
                <path d="M85,140 L115,140 L115,160 L85,160 Z" fill="url(#skinGradient)" />

                {/* Shoulders/Body */}
                <path
                    d="M50,160 Q100,210 150,160 L150,200 L50,200 Z"
                    fill="url(#shirtGradient)"
                />

                {/* Face Shape */}
                <ellipse cx="100" cy="100" rx="45" ry="55" fill="url(#skinGradient)" />

                {/* Hair - Back */}
                <path
                    d="M55,90 Q50,130 65,140 Q135,140 145,90 Q150,30 100,20 Q50,30 55,90 Z"
                    fill="url(#hairGradient)"
                />

                {/* Hair - Front/Bangs */}
                <path
                    d="M55,90 Q70,50 100,60 Q130,50 145,90 Q120,40 80,40 Q60,50 55,90 Z"
                    fill="url(#hairGradient)"
                />

                {/* Glasses (optional, creates techy vibe) */}
                <g stroke="#38bdf8" strokeWidth="2" fill="rgba(56, 189, 248, 0.1)">
                    <rect x="65" y="90" width="30" height="15" rx="5" />
                    <rect x="105" y="90" width="30" height="15" rx="5" />
                    <line x1="95" y1="97" x2="105" y2="97" />
                </g>

                {/* Smile */}
                <path d="M85,130 Q100,140 115,130" stroke="#c08060" strokeWidth="2" fill="none" strokeLinecap="round" />

            </svg>

            {/* Floating Elements (Tech Vibe) */}
            <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: 'absolute', top: '10%', right: '10%', fontSize: '24px' }}
            >
                💻
            </motion.div>
            <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ position: 'absolute', bottom: '20%', left: '0%', fontSize: '24px' }}
            >
                ⚛️
            </motion.div>
        </motion.div>
    );
};

export default ProfileAvatar;
