import React from 'react';
import axios from 'axios';


// API Call
export default async function signInUser(credentials){
    try{
        console.log(credentials);
        const res = await axios.post('/api/v1/user/signIn',  JSON.stringify(credentials),{
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        
        return res;
    }
    catch(e){
        console.log(e);
        return false;
    }
}

