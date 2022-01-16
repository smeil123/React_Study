import useCookie from "./useCookie";

export default function signCheck(){
    const [session, updateCookie] = useCookie("SESSION", null);
    if(!session || session === undefined){
        return false;
    }
    return true;
}
