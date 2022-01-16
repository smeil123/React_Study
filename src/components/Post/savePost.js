import React, { Component, useState } from 'react';
import axios from 'axios';

// API Call
async function postPost(post){
    //이미지 메타데이터를 처리하기 위해 form-data로 데이터를 전송해줘야함
    let form = new FormData()
    console.log(post)
    form.append('category',post.category)
    form.append('title',post.title)
    form.append('price',post.price)
    form.append('content',post.content)

    try{
        const res = await axios.post('/api/v1/deal-posts', form,{
            headers : {
                'Content-Type' : 'applicaton/form-data'
            }
        })
        return res;
    }catch(err){
        if(err.response){
            return err.response.data;
        }
        else {
            return false;
        }
    }
}

export default async function savePost(post){
    return await postPost(post);
}