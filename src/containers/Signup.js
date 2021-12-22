import { Button, TextField } from '@material-ui/core';
import React,{useState} from 'react';

async function joinUser(credential){
    return fetch('https://',{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(credential)
    })
    .then(data => data.json())
}

export default function Signup(){
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async e =>{
        e.preventDefault();
        const response = await joinUser({
            username,
            password
        });
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    variant="standard"  //스타일
                    margin="normal" //아래 공간 여유
                    required    //필수 입력
                    fullWidth //가로로 길게
                    id="name"
                    name="name"
                    label="Id"
                    onChange={e => setUserName(e.target.value)}
                />
                <TextField
                    required
                    fullWidth
                    margin="normal"
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                    onChange={e => setPassword(e.target.value)}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Sign up
                </Button>
            </form>
        </div>
    )
}