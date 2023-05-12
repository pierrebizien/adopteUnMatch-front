import { Navigate } from "react-router-dom";
import Connection from "../Connexion/index.tsx"
import "./ProtectedPages.tools.tsx"
import { ReactElement } from 'react';
import { VerifToken } from "./ProtectedPages.tools.tsx";
import jwt from 'jsonwebtoken'


function jwtDecode(t) {
    let token = {raw : String, header : Object, payload : Object};
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
    if (!localStorage.getItem('token'))
     return (<Navigate to="/Connexion" replace/>);
    else
    {
      const decodedToken = jwtDecode(localStorage.getItem('token'));
      if(Date.now() > decodedToken.payload.exp * 1000)
      {
            return (<Navigate to="/Connexion" replace/>)
        }
    }
    return (children);
}