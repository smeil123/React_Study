import React, { Component, useState } from 'react';
import { Button, TextField,MenuItem, Box,Input, IconButton} from '@material-ui/core';

import { getCategory } from "../../data/categories";
import savePost from "../../components/post/savePost";
import {getConfRex} from "../../components/common/confRex.jsx";

export default function Posts(){
    const [category, setCategory] = useState('A');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    
    const [price_error] = useState("숫자 입력");

    const NUMBER = /^[0-9]*$/ ;
    let categories = getCategory();

    const handleSubmit = async e =>{
        e.preventDefault();
        const res = await savePost({
            category,
            title,
            price,
            content
        });

        try{
            console.log(res);
            if(res.status === 200 || res.status === 201){
                alert("게시글 등록 성공");

                //To-Do : 해당 게시글로 이동하기
                window.location.href = "/";
            }else if(res.status == 400){
                alert(res.message);
                window.location.href = 'signin'
            }else{
                alert(res.message);
                console.log(res.message);
            }
        }catch(e){
            alert("작성 내용을 확인해주세요");
            console.log(e);
        }

    }

    return (
        <div>
            <h1>중고거래 글쓰기</h1>
            <Box
                component="form"
                sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
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
                    label="제품 카테고리"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    //helperText="Please select your currency"
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
                    error={getConfRex("NUMBER",price) || price ==='' ? false : true}
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
                    label="판매 글"
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
            </Box>
        </div>
        );
}