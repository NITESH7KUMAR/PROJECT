import React,{useState} from 'react';
import './Hcarousel.css';

import{
    img15, img8, img9, img10, img11, img12, img13, img14
} from '../assets';

const images = [
        { src: img8, caption: "LifeSaver: Bringing communities together to donate blood and save lives across the nation." },
        { src: img9, caption: "Our Mission: Ensuring no one in need is left without the vital blood resources they require." },
        { src: img10, caption: "BloodConnect: An easy-to-use platform connecting donors with blood banks in their area." },
        { src: img11, caption: "Community Heroes: Celebrating the commitment of our local blood donors at each camp." },
        { src: img12, caption: "Crisis Relief: Mobilizing emergency blood donation drives during critical shortages." },
        { src: img13, caption: "Youth Power: Empowering young people to become regular blood donors." },
        { src: img14, caption: "Awareness Campaigns: Educating communities on the importance of safe and frequent blood donations." },
        { src: img15, caption: "Support Network: Building a volunteer network to assist in organizing and promoting donation events." }
    ];
    

const Hcarousel = () =>{

    const[currentIndex,setCurrentIndex] = useState(0);

    const nextSlide = () =>{
        setCurrentIndex((prevIndex) =>
            prevIndex +4 >= images.length ? 0 :prevIndex +4
        );
    };

    const prevSlide = () =>{
        setCurrentIndex((prevIndex) =>
        prevIndex -4 < 0 ? images.length-4 :prevIndex-4
    );
    };

    return(
        <div className='carousel'>
            <button className='nav-button prev' onClick={prevSlide}>{"<"}</button>
            <div className='container1'>
                <div className='slides1'
                style={{transform: `translateX(-${currentIndex*(100/4)}%)`}}>
                    {images.map((image,index) =>(
                        <div className='slides2' key={index}>
                            <img src={image.src} alt={`Digital Experience ${index+1}` } />
                            <p className="image-caption">{image.caption}</p>
                        </div>
                    ))}
    
                </div>
            </div>
            <button className='nav-button next' onClick={nextSlide}>{">"}</button>
        </div>
    );
};
export default Hcarousel;