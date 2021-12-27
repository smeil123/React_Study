import React from "react";
import {Link} from 'react-router-dom';

import useToken from "./useToken"

import "./Header.css";

function Header(){
    const MenuItem = ({active, children, to}) =>(
        <div className="menu-item">{children}</div>
    );

    const {token, setToken} = useToken();
    if(!token || token == undefined){
        return(
            <div>
                <div className="logo">Menu</div>
                <div className="menu">
                    <Link to="/"><MenuItem>홈</MenuItem></Link>
                    <Link to="/about"><MenuItem>인기매물</MenuItem></Link>
                    <Link to="/posts"><MenuItem>글쓰기</MenuItem></Link>
                    <Link to="/invoices"><MenuItem>디테일</MenuItem></Link>
                    <Link to="/signup"><MenuItem>회원가입</MenuItem></Link>
                    <Link to="/signin"><MenuItem>로그인</MenuItem></Link>
                </div>
            </div>
        );
    }
    else{
        return(
            <div>
                <div className="logo">Menu</div>
                <div className="menu">
                    <Link to="/"><MenuItem>홈</MenuItem></Link>
                    <Link to="/about"><MenuItem>인기매물</MenuItem></Link>
                    <Link to="/posts"><MenuItem>글쓰기</MenuItem></Link>
                    <Link to="/invoices"><MenuItem>디테일</MenuItem></Link>
                    <Link to="/profile"><MenuItem>프로파일</MenuItem></Link>
                    <Link to="/logout"><MenuItem>로그아웃</MenuItem></Link>
                </div>
            </div>
        );
    }
}

export default Header;
