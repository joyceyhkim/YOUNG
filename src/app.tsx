import './app.css';
// @ts-ignore
import {Link, Route, Routes} from "react-router-dom";
import React from "react";
import Shop from "./shop/shop.tsx";
import Cart from "./cart/cart.tsx";
import Logo from "./assets/logo/young_logo.png"
import Home from "./home/home.tsx";

const App = () => {
    const value = {
        appendTo: 'self'
    };

    return (
        <div className="App">
            <header className="header">
                <nav>
                    <Link to="/shop" className="tab">Shop</Link>
                    <Link to="/"><img src={Logo} alt="YOUNG Florals Logo" className="logo"/></Link>
                    <Link to="/cart" className="tab right"><i className="pi pi-shopping-cart"></i></Link>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="shop" element={<Shop/>}/>
                <Route path="cart" element={<Cart/>}/>
            </Routes>
        </div>
    );
}

export default App;
