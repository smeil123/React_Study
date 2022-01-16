import React from "react";

const deleteCookie = function(name){
    document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
}

export default deleteCookie;