import React from 'react';
import axios from 'axios';

import deleteCookie from '../common/deleteCookie';
// API Call
async function logoutCall(){
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


export default async function logout(){
    const result = await logoutCall();
    window.location.href = "/";    
    return;
}
