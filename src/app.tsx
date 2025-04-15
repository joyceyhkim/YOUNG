import './app.css';
// @ts-ignore
import {Link, Route, Routes, useLocation} from "react-router-dom";
import React, {useState} from "react";
import Shop from "./shop/shop.tsx";
import Cart from "./cart/cart.tsx";
import Logo from "./assets/logo/young_logo.png"
import Home from "./home/home.tsx";
import {ShoppingCartOutlined} from "@ant-design/icons";
import {Button, Drawer, Space} from "antd";
import { useNavigate } from "react-router-dom";


const App = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const navToCartPage = () => {
        navigate("/cart");
        onClose();
    };

    return (
        <div className="App">
            <header className="header">
                <nav>
                    <Link to="/shop" className="tab">Shop</Link>
                    <Link to="/"><img src={Logo} alt="YOUNG Florals Logo" className="logo"/></Link>
                    <span className="tab right cart-icon" onClick={location.pathname.includes('cart') ? navToCartPage : showDrawer}><ShoppingCartOutlined /></span>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="shop" element={<Shop/>}/>
                <Route path="cart" element={<Cart/>}/>
            </Routes>
            <Drawer
                title="Cart"
                placement="right"
                width={500}
                onClose={onClose}
                open={open}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button type="primary" onClick={navToCartPage} className="primary-buttons">Check Out</Button>
                    </Space>
                }
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>
    );
}

export default App;
