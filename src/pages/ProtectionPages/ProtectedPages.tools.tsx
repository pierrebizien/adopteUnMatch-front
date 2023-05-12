import { sendVerifToken } from "../../requests/verifToken/verifToken";

export function VerifToken() : boolean
{
    if (localStorage.getItem('token') === null)
        return false;
    sendVerifToken()
    .then(res => 
    {
        res.json()
        .then(resJSON => console.log(resJSON))
        .catch(e => console.log(e))
    })
    .catch(e => console.log(e))
    return true;   
}