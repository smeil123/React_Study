import React from "react";
import {Link} from 'react-router-dom';

import "./Header.css";

const MenuItem = ({active, children, to}) =>(
    <div className="menu-item">{children}</div>
);

const Header = () => {
    return(
        <div>
            <div className="logo">Menu</div>
            <div className="menu">
                <Link to="/"><MenuItem>홈</MenuItem></Link>
                <Link to="/about"><MenuItem>인기매물</MenuItem></Link>
                <Link to="/posts"><MenuItem>회원가입</MenuItem></Link>
                <Link to="/invoices"><MenuItem>테스트</MenuItem></Link>
            </div>
        </div>
    );
};

export default Header;
