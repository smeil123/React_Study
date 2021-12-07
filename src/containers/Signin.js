import React, {useState} from 'react';
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
// import {applyMiddleware, createStore} from 'redux';
// import { createLogger } from 'redux-logger';

// const logger = createLogger({
//     predicate: (getState, action) => action.type !== AUTH_REMOVE_TOKEN
// })

// const store = createStore(
//     reducer,
//     applyMiddleware(logger)
// )

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

// API Call
async function loginUser(credentials){
    return fetch('https://www.mecallapi.com/api/login',{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(credentials)
    })
    .then(data => data.json())
}

export default function Signin(){
    const classes = useStyles();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async e =>{
        e.preventDefault();
        const response = await loginUser({
            username,
            password
        }); //login API Call
        alert(JSON.stringify(response));
        if('accessToken' in response){
            //alert (subject, message, state)
            swal("Succeess", response.message, "success",{
                buttons : false.valueOf,
                timer : 2000,
            })
            .then((value)=> {
                // local 에 필요값들 저장해주고, profile redirect
                localStorage.setItem('token', response['accessToken']);
                localStorage.setItem('user', JSON.stringify(response['user']));

                window.location.href = "/profile";
            });
        } else{
            swal("Failed", response.message, "error");
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
                                onChange={e => setUserName(e.target.value)}
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
