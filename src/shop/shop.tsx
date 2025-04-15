import React, { FC } from 'react';
import './shop.css';
import {Card, Col, Row} from "antd";
import Meta from "antd/lib/card/Meta";
import galleryAssets from "../assets/gallery/gallery-export.ts";

interface ShopProps {}

const Shop: FC<ShopProps> = () => (
    <shopWrapper className="content-body container">
        <div className="card-container">
            <Row gutter={[16, 16]}>
                {galleryAssets.map((item) => (
                    <Col span={5}>
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
    </shopWrapper>
);

export default Shop;
