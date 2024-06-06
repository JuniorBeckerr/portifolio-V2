import React, { useEffect, useState } from "react";

const Typewriter = ({ text, typingSpeed = 1, onComplete }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [typingIndex, setTypingIndex] = useState(0);

    useEffect(() => {
        const typeInterval = setInterval(() => {
            setDisplayedText((prev) => prev + text[typingIndex]);
            setTypingIndex((prev) => prev + 1);

            if (typingIndex === text.length - 1) {
                clearInterval(typeInterval);
                if (onComplete) {
                    onComplete();
                }
            }
        }, typingSpeed);

        return () => clearInterval(typeInterval);
    }, [text, typingSpeed, typingIndex, onComplete]);

    return <span className="typewriter-text">{displayedText}</span>;
};

export default Typewriter;
