import { Button, TextField } from '@material-ui/core';
import React,{useState} from 'react';

export default function Signup(){
    const [name, setUserName] = useState();
    const handleSubmit = async e =>{

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required 
                    fullWidth
                    id="name"
                    name="name"
                    label="your name"
                    onChange={e => setUserName(e.target.value)}
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