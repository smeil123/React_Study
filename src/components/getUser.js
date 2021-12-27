import axios from 'axios';

export default async function getUser(email){
    try{
        const res = await axios.get('/api/v1/user?email=',email);
        console.log(res);
        return res.data;
    }catch(e){
        console.log(e);
        return false;
    }

}
