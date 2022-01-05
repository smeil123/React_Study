import React, { Component, useState } from 'react';
import { Button, TextField,MenuItem, Box,Input, IconButton} from '@material-ui/core';

import { getCategory } from "../data/categories"
import axios from 'axios';

async function postDealPost(post){
    alert(post);
    try{
        const res = await axios.post('/api/v1/dealPost', JSON.stringify(post),{
            headers : {
                'Content-Type' : 'applicaton/json'
            }
        })
        return res;
    }catch(err){
        console.log(err);
        return {data : "생성 실패"}
    }
}

export default function Posts(){
    const [category, setCategory] = useState('A');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    
    const [price_error] = useState("판매 가격 필수");

    const NUMBER = /^[0-9]*$/ ;
    let categories = getCategory();

    const handleSubmit = async e =>{
        e.preventDefault();
        const res = await postDealPost({
            category,
            title,
            price,
            content
        });
        try{
            console.log(res);
            if(res.status == 200){
                alert("작성 성공");
                window.location.href = "/";
            }else{
                alert("작성 실패");
            }
        }catch(e){
            console.log(e);
        }

    }
    

        return (
            <div>
                중고거래 글쓰기
                <Box
                    component="form"
                    sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                <form noValidate onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="icon-button-file">
                        <Input accept="image/*" id="icon-button-file" type="file" />
                        <IconButton color="primary" aria-label="upload picture" component="span" />
                    </label>
                </div>
                <div>
                    <TextField
                        id="standard-required"
                        label="제목"
                        margin="normal"
                        onChange={e => setTitle(e.target.value)}
                        variant="standard"
                        />
                </div>
                <div>
                    <TextField
                        id="standard-select-currency"
                        select
                        // label="제품 카테고리를 선택해주세요"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        helperText="Please select your currency"
                        variant="standard"
                        >
                        {categories.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div>
                    <TextField
                        id="standard-required"
                        error={NUMBER.test(price) || price ==='' ? false : true}
                        helperText={price_error}
                        label="₩ 가격"
                        margin="normal"
                        onChange={e => {
                            if(e.target.value === ''){
                                return false;
                            }else{
                            setPrice(e.target.value)}
                        }}
                        variant="standard"
                        />
                </div>
                <div>
                    <TextField
                        required
                        margin="normal"
                        id="outlined-multiline-static"
                        // label="판매내용"
                        multiline
                        rows={4}
                        defaultValue="게시글 내용을 작성해주세요. 가품 및 판매금지품목은 게시가 제한될 수 있어요."
                        onChange={e => setContent(e.target.value)}
                    />
                </div>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        완료
                    </Button>
                </form>
                </Box>
            </div>
        );
}