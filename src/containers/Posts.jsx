import React, { Component, useState } from 'react';
import { Button, TextField,MenuItem, Box } from '@material-ui/core';

import { getCategory } from "../data/categories"

export default function Posts(){
    const [category, setCategory] = useState('A');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    
    let categories = getCategory();

    const handleSubmit = async e =>{
        alert("게시글이 작성되었습니다.");
        e.preventDefault();
    }
    

        return (
            <div>
                <Box
                    component="form"
                    sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                <form onSubmit={handleSubmit}>
                <div>
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Select"
                        value={category}
                        onChange={setCategory}
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
                        label="판매제목"
                        margin="normal"
                        value={title}
                        onChange={setTitle}
                        variant="standard"
                        />
                </div>
                <div>
                    <TextField
                        required
                        margin="normal"
                        id="outlined-multiline-static"
                        label="판매내용"
                        multiline
                        rows={4}
                        defaultValue="작성해주세요"
                        value={content}
                        onChange={setContent}
                    />
                </div>
                <div>
                    <label>
                        사진 첨부하기.
                        <input type="file" />
                    </label>
                </div>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Sign up
                    </Button>
                </form>
                </Box>
            </div>
        );
}