import React from 'react';

const logout = () => {
    localStorage.clear();

    window.location.href = "/signin";
}

export default function Logout(){
    const handlClick = () =>{
        alert("logout");
        logout();
    };
    return <button onClick={handlClick}>Logout</button>;
}

//export default withRouter(Logout);