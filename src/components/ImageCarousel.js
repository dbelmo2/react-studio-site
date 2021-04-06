import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "./ImageCarousel.css";


function ImageCarousel({slides, header}) {
    const [current, setCurrent] = useState(0);

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    


    let length = slides.length;


    const handleLeftClick = () => setCurrent(current - 1 < 0 ? length-1 : current-1);
    
    const handleRightClick = () => setCurrent(current + 1 >= length ? 0 : current+1);




    return (
        <>
            <section className="slider">
            <h1 className="header">{header}</h1>
            <FaChevronLeft className="left-arrow" onClick={handleLeftClick} />
            <FaChevronRight className="right-arrow" onClick={handleRightClick} />

            { slides.map((slide, index) => {
                return (
                    <div className={index === current ? "slide-active" : "slide"} key={index} >
                        {index === current && (<img className="image" src={slide.img} alt="slide image"/>) }
                        
                    </div>
                )
                })}

            </section>
            
        </>
    )
}

export default ImageCarousel
