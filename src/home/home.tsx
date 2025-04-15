import React, {FC, useState} from 'react';
import './home.css';
import Banner from '../assets/gallery/arches.JPG';
import {Card, Carousel, Col} from "antd";
import Meta from "antd/lib/card/Meta";
import galleryAssets from "../assets/gallery/gallery-export.ts";


interface homeProps {}

const Home: FC<homeProps> = () => (
 <homeWrapper>
    <div className="banner-container">
        <div className="banner-centerer">
            <img src={Banner} alt="banner" />
        </div>
    </div>
    <div className='content-body'>
        <Carousel arrows dotPosition="right" autoplay={{ dotDuration: true }} autoplaySpeed={10000} speed={1500} className="carousel">
            {galleryAssets.map((item) => (
                <Card
                    className='card-item'
                    cover={<img src={item.imgSrc} alt={item.description} className="card-img" />}
                >
                    <Meta title={item.description} description={item.description} />
                </Card>
            ))}
        </Carousel>
    </div>
 </homeWrapper>
);

export default Home;
