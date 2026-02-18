import React from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <div
            onClick={toggleTheme}
            style={{
                width: "50px",
                height: "26px",
                backgroundColor: "var(--glass-bg)",
                borderRadius: "50px",
                cursor: "pointer",
                display: "flex",
                justifyContent: theme === "dark" ? "flex-start" : "flex-end",
                alignItems: "center",
                padding: "3px",
                border: "1px solid var(--nav-border)",
                marginRight: "20px"
            }}
        >
            <motion.div
                layout
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "var(--accent-primary)",
                    borderRadius: "50%",
                }}
            />
        </div>
    );
};

export default ThemeToggle;
