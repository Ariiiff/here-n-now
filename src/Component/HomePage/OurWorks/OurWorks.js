import React from 'react';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import './OurWorks.css';

const OurWorks = () => {
    return (
        <div id="carouselExampleIndicators" class="carousel slide bg-dark p-5" data-ride="carousel">
            <h4 className='text-center text-light my-5'>Here are some of <span className='text-success'>our works</span></h4>
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item text-center p-5 active">
                    <img src={carousel1} class="img-fluid carousel-img m-3" alt="..." />
                    <img src={carousel2} class="img-fluid carousel-img m-3" alt="..." />

                </div>
                <div class="carousel-item text-center p-5">
                    <img src={carousel2} class="img-fluid carousel-img m-3" alt="..." />
                    <img src={carousel3} class="img-fluid carousel-img m-3" alt="..." />
                </div>
                <div class="carousel-item text-center p-5">
                    <img src={carousel3} class="img-fluid carousel-img m-3" alt="..." />        
                    <img src={carousel4} class="img-fluid carousel-img m-3" alt="..." />
                </div>
            </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
        </div>
    );
};

export default OurWorks;