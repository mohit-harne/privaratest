// components/PhotoPopup.js
'use client';
import { useState } from 'react';
import styles from './PhotoPopup.module.css';

const PhotoPopup = ({ imageSrc }) => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <>
        <div className={styles.container}>
            <button onClick={togglePopup}>Show Photo</button>
            {showPopup && (
                <div id="popup" className={styles.popup}>
                    <img src={imageSrc} alt="Popup" />
                </div>
            )}
        </div>
        </>
    );
};

export default PhotoPopup;
