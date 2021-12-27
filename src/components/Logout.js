import React from 'react';
import axios from 'axios';
// API Call
async function logout(){
    try{
        localStorage.clear();    
        const res = await axios.post('/api/v1/user/signout',{
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
    const result = await logout().then(res=>{
        window.location.href = "/";
    })
    
    return;
}

//export default withRouter(Logout);