import React from 'react';

const logout = () => {
    localStorage.clear();

    window.location.href = "/signin";
}

export default function Logout(){
    return logout();
}

//export default withRouter(Logout);