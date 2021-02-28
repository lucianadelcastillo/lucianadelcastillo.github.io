import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './styles.css';

import p1 from "../../media/prince/p1.jpg";
import p2 from "../../media/prince/p2.jpg";
import p3 from "../../media/prince/p3.jpg";
import p4 from "../../media/prince/p4.jpg";
import p5 from "../../media/prince/p5.jpg";
import p6 from "../../media/prince/p6.jpg";
import p7 from "../../media/prince/p7.jpg";
import p8 from "../../media/prince/p8.jpg";
import p9 from "../../media/prince/p9.jpg";
import p10 from "../../media/prince/p10.jpg";
const images = [
    <img src={p1} className='carousel-images'/>,
    <img src={p2} className='carousel-images'/>,
    <img src={p3} className='carousel-images'/>,
    <img src={p4} className='carousel-images'/>,
    <img src={p5} className='carousel-images'/>,
    <img src={p6} className='carousel-images'/>,
    <img src={p7} className='carousel-images'/>,
    <img src={p8} className='carousel-images'/>,
    <img src={p9} className='carousel-images'/>,
    <img src={p10} className='carousel-images'/>
]
class FashionStyling extends React.Component {
    render() {
        return <div id={'fashion-styling'}>
            <div style={{animation: 'fall ease 1s'}}>
                <AliceCarousel items={images} infinite={true} autoPlay={true} autoPlayInterval={2000}
                           renderPrevButton={() => <p id={'prev-button'}>Prev</p>}
                           renderNextButton={() => <p id={'next-button'}>Next</p>}/>
            </div>
        </div>
    }
}

export default FashionStyling;