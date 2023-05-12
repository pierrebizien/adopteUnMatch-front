import { Navigate } from "react-router-dom";
import "./ProtectedPages.tools.tsx"
import { ReactElement } from 'react';


function jwtDecode(t : string) {
    let token : any = {}
    token.raw = t;
    token.header = JSON.parse(window.atob(t.split('.')[0]));
    token.payload = JSON.parse(window.atob(t.split('.')[1]));
    return (token)
  }

interface ProtectedAccessProps {
    children: ReactElement ;
  }
  
export default function ProtectedAccess({children} : ProtectedAccessProps) 
{
    const token = localStorage.getItem('token');
    if (!token)
      return (<Navigate to="/Connexion" replace/>);
    else
    {
        const decodedToken = jwtDecode(token);
      if(Date.now() > decodedToken.payload.exp * 1000)
      {
            return (<Navigate to="/Connexion" replace/>)
        }
    }
    return (children);
}