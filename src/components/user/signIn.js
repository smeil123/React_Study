import React from 'react';
import axios from 'axios';
import { FastRewind } from '@material-ui/icons';


// API Call
export default async function signIn(credentials){
    try{
        const res = await axios.post('/api/v1/signin',  JSON.stringify(credentials),{
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        console.log("ok");
        return res;
    }catch(err){        
        console.log(err);
        if(err.response && err.status === 400){ // 잘안됌
            console.log("400 err");
        }
        return {data : "로그인 오류"}
    }
}

