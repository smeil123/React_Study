import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
import { ErrorBoundary,errorService } from 'react-error-boundary';
import axios from 'axios';

import useCookie from "../../components/common/useCookie";
import signInUser from "../../components/user/signIn";

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundSize: 'cover',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

//error logging
function MyFallbackComponent({error, resetErrorBoundary}){
    return(
        <div role="alert">
            <p>Something went wrong;</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}


export default function SignIn(){
    const classes = useStyles();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [session, updateCookie] = useCookie("SESSION",null);

    useEffect(()=>{
        //deleteCookie("SESSION");
        if (session != null || session != undefined){
            //이미 로그인되어 있으면
            alert("이미 로그인되어 있음");
            window.location.href = "/";
        }

    })

    const handleSubmit = async e =>{
        e.preventDefault();
        const res = await signInUser({
            email,
            password
        });
        try{
            console.log(res);
            if(res.status == 201){                
                swal("Succeess","로그인 성공", "success",{
                    buttons : false.valueOf,
                    timer : 2000,
                })
                .then((value)=> {
                    console.log(document.cookie.SESSION);
                    // 필요시에 로컬에 값 저장
                    localStorage.setItem('email', email);

                    window.location.href = "/";
                });
            }else{
                swal("Failed","로그인 실패", "error");
            }
        }
        catch(err){
            console.log("err", err);            
            swal("Failed","err","error");
        }
    }
    return (
        <Grid container className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} md={7} className={classes.image} />
            <Grid item xs={12} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <ErrorBoundary
                        FallbackComponent={MyFallbackComponent}
                        onError={(error, errorInfo) => errorService.log({error, errorInfo})}
                        onReset={()=>{
                            //reset the state of my app
                        }}
                    >
                        <form className={classes.form} noValidate onSubmit={handleSubmit}>
                            <TextField 
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                name="email"
                                label="Email Address"
                                onChange={e => setEmail(e.target.value)}
                            />
                            <TextField 
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                onChange={e => setPassword(e.target.value)}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In
                            </Button>             
                        </form>
                    </ErrorBoundary>
                </div>
            </Grid>
        </Grid>
    );
}
