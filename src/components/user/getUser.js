import axios from 'axios';

export default async function getUser(email){
    try{
        //const res = await axios.get('/api/v1/users?email=',email);
        let form = new FormData()
        //get으로 바꾼다고하니까 바꾸고 다시!
        form.append('email',email);
        const res = await axios.get('/api/v1/users',form,{
            headers : {
                'Content-Type' : 'application/form-data'
            }
        });
        return res.data;
    }catch(e){
        console.log(e);
        return false;
    }

}
