import React from 'react';
import axios from 'axios';

import deleteCookie from '../common/deleteCookie';
// API Call
async function logoutCall(){
    console.log("-----");
    try{
        const res = await axios.post('/api/v1/signout',{
            headers : {
                'Content-Type' : 'application/json'
            }
        });
        deleteCookie("SESSION");
        //로그아웃 성공시 홈화면으로 이동
        window.location.href = "/";    
    }catch(e){
        deleteCookie("SESSION");
        //로그아웃 실패시 현재화면 새로고침
        window.location.reload();
        console.log(e);
        return false;
    }
    
    return true;
}


export default async function logout(){
    const result = await logoutCall();
    
    return(
        <div>logout</div>
    )
}
