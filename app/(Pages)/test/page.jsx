// pages/Page1.js

import PhotoPopup from '../../Components/PhotoPopup.jsx';
import p1 from '../../../public/img/property-1.jpg';
const test = () => {
    const pages = [
        {name:p1}
        // Add more pages as needed
    ];
    return (
        <>
        <div>
            {pages.map(page => (
                <div key={page.name}>
                    <h2>{page.name}</h2>
                    <PhotoPopup imageSrc={page.imageSrc} />
                </div>
            ))}
        </div>
        </>
    );
};

export default test;
