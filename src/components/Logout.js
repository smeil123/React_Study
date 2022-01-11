import React from 'react';
import axios from 'axios';

import deleteCookie from './deleteCookie';
// API Call
async function logout(){
    try{
        deleteCookie("SESSION");
        const res = await axios.post('/api/v1/signout',{
            headers : {
                'Content-Type' : 'application/json'
            }
        })
    }catch(e){
        console.log(e);
        return false;
    }
    
    return true;
}


export default async function Logout(){
    const result = await logout();
    window.location.href = "/";    
    return;
}
