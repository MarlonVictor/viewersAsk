import { useEffect, useState } from 'react';

import { SliderData } from '../../data/SliderData';

import { AsideContainer, SliderContent } from './styles';


export function Aside() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const sliderLength = SliderData.length

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentSlide(currentSlide === sliderLength - 1 ? 0 : currentSlide + 1)
        }, 7000);
      
        return () => clearTimeout(timeout);
    }, [currentSlide, sliderLength])
    
    return (
        <AsideContainer>
            <div className="slider-controller">
                <button 
                    onClick={() => setCurrentSlide(0)} 
                    className={currentSlide === 0 ? 'active' : ''} 
                />
                <button 
                    onClick={() => setCurrentSlide(1)} 
                    className={currentSlide === 1 ? 'active' : ''} 
                />
                <button 
                    onClick={() => setCurrentSlide(2)} 
                    className={currentSlide === 2 ? 'active' : ''} 
                />
            </div>

            <SliderContent>
                {SliderData.map((slide, index) => {
                    return (
                        <div key={index} className={index === currentSlide ? 'slide active' : 'slide'}>
                            <img src={slide.image} alt="Imagem do slider" />
                            <strong>{slide.strong}</strong>
                            <p>{slide.text}</p>
                        </div>
                    )
                })}
            </SliderContent>
        </AsideContainer>
    )
}