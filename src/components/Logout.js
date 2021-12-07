import React from 'react';
import {withRouter} from 'react-router-dom';

const logout = () => {
    localStorage.setItem('accessToken', null);
}

export default function Logout(){
    const handlClick = () =>{
        logout();
    };
    alert("logout");
    return <button onClick={handlClick}>Logout</button>;
}

//export default withRouter(Logout);