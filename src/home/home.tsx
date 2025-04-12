import React, { FC } from 'react';
import './home.css';
import Banner from '../assets/gallery/arches.JPG';
import Bouquet from '../assets/gallery/bouquet.JPG';
import Candlelebra from '../assets/gallery/candlelebra.JPG';
import LargeVase from '../assets/gallery/large_vase.JPG';
import TableArrange from '../assets/gallery/table_arrangement.JPG';
import VaseArrange from '../assets/gallery/vase_arrangement.JPG';
import {Button, Card, Col, Row} from "antd";
import Meta from "antd/lib/card/Meta";

interface homeProps {}

const cardContent = [
    {
        imgSrc: Bouquet,
        description: 'Bouquet',
    },
    {
        imgSrc: Candlelebra,
        description: 'Candlelebra',
    },
    {
        imgSrc: LargeVase,
        description: 'Large Vase',
    },
    {
        imgSrc: TableArrange,
        description: 'Table Arrangement',
    },
    {
        imgSrc: VaseArrange,
        description: 'Vase Arrangement',
    },
];

const Home: FC<homeProps> = () => (
 <homeWrapper>
    <div className="banner-container">
        <div className="banner-centerer">
            <img src={Banner} alt="banner" />
        </div>
    </div>
     <div className="card-container">
         <Row gutter={[16, 16]}>
             {cardContent.map((item) => (
                 <Col span={6}>
                     <Card
                         className="card-item"
                         cover={<img src={item.imgSrc} alt={item.description} className="card-img" />}
                     >
                         <Meta title={item.description} description={item.description} />
                     </Card>
                 </Col>
             ))}
         </Row>
     </div>
 </homeWrapper>
);

export default Home;
