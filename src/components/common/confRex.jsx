//비밀번호 : 숫자,문자,특수문자 무조건 1개이상, 최소8~16자허용
//PASSWORD : /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,16}$/,

//비밀번호 : 숫자,문자 무조건 1개이상, 최소8자~20자
const confRex = {
    NUMBER : /^[0-9]*$/,
    PASSWORD : /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d~!@#$%^&*()+|=]{8,20}$/,
    EMAIL : /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
}

export function getConfRex(key,text) {
    return confRex[key].test(text);
}