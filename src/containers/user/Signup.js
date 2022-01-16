import React,{useState} from 'react';
import { Button, TextField,MenuItem, Box,Input, IconButton} from '@material-ui/core';

import signCheck from '../../components/common/signCheck';
import getUser from '../../components/user/getUser';
import singUp from '../../components/user/singUp';
import {getConfRex} from "../../components/common/confRex.jsx";

async function checkEmail(email){
    const result = await getUser(email);
    if(result == null){
        //중복없음
        alert("중복없음");
        return true;
    }
    return false;
}

export default function Signup(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //TODO : 이미지 업로드하는 화면 따로 만들기
    const [image, setImage] = useState();
    const [nickname, setNickname] = useState();
    const [role, setRole] = useState('USER');

    if(signCheck()===true){
        alert("이미 로그인되어 있습니다.");
        window.location.href = "/";
    }

    const handleSubmit = async e =>{
        e.preventDefault();
        //아이디 중복확인
        //const doubleCheckEmail = await checkEmail(email);
        const doubleCheckEmail = true;
        if(!doubleCheckEmail){
            alert("이메일 중복");
        }else{
            const res = await singUp({
                    email,
                    password,
                    nickname,
                    role
            });
            try{
                if(res.status === 200 || res.status === 201){
                    alert("가입 성공");

                    window.location.href = "/signin";
                }else{
                    alert(res.message);
                }
            }catch(e){
                alert(e);
            }
        }
        
    }
    //TODO - 관리자용 페이지는 따로 만들기
    return(
        <div>
            <h1>회원가입</h1>
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
                    error={getConfRex("EMAIL",email) || email === ''? false:true}
                    helperText={"이메일 형식 확인"}
                    label="아이디(이메일)"
                    margin="normal"
                    onChange={e => {
                        if(e.target.value === ''){
                            return false;
                        }else{
                            setEmail(e.target.value)
                        }
                    }}
                    variant="standard"
                    />
            </div>
            <div>
                <TextField
                    id="standard-required"
                    error={getConfRex("PASSWORD",password) || password === ''? false:true}
                    helperText={"비밀번호 규칙 확인(8자리 이상)"}
                    label="비밀번호"
                    type="Password"
                    margin="normal"
                    onChange={e => setPassword(e.target.value)}
                    variant="standard"
                    />
            </div>
            <div>
                <TextField
                    id="standard-required"
                    label="닉네임"
                    margin="normal"
                    onChange={e => setNickname(e.target.value)}
                    variant="standard"
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
    )
}