import axios from 'axios';

export default async function getUser(email){
    try{
        const res = await axios.get('/api/v1/users?email=',email,{
            headers : {
                'Content-Type' : 'application/json'
            }
        });
        return res.data.content;
    }catch(e){
        console.log(e);
        return false;
    }

}
