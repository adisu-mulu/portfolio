import React, { useState, useEffect } from 'react';
import { HandIndexThumb } from 'react-bootstrap-icons';
import './swipe-hint.css';

const SwipeHint = ({ scrollContainerRef }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            if (container.scrollLeft > 20) {
                setIsVisible(false);
            }
        };

        // Also hide if the user touches the container (immediate feedback)
        const handleTouch = () => {
            setIsVisible(false);
        };

        container.addEventListener('scroll', handleScroll);
        container.addEventListener('touchstart', handleTouch);

        return () => {
            container.removeEventListener('scroll', handleScroll);
            container.removeEventListener('touchstart', handleTouch);
        };
    }, [scrollContainerRef]);

    if (!isVisible) return null;

    return (
        <div className="swipe-hint-overlay">
            <div className="swipe-hint-content">
                <HandIndexThumb className="swipe-hand-icon" size={32} />
                <span className="swipe-text">Swipe to explore</span>
            </div>
        </div>
    );
};

export default SwipeHint;
