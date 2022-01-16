import axios from 'axios';

export default async function singUp(user){
    let form = new FormData()
    
    form.append('email',user.email)
    form.append('password',user.password)
    form.append('nickname',user.nickname)
    form.append('role',user.role)

    try{
        const res = await axios.post('/api/v1/users', form,{
            headers : {
                'Content-Type' : 'applicaton/form-data'
            }
        })
        return res;

    }catch(err){
        console.log(err);
        return  "생성 실패";
    }
}