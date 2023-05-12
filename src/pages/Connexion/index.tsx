import {useState} from "react";
import NavBarEmpty from "../../components/NavBarEmpty"
import style from "../styles/inscription.module.scss"
import ConnexionBox from "../../components/Connexion/ConnexionBox";
import { VerifToken } from "../ProtectionPages/ProtectedPages.tools";

function Connexion()
{
    const [alertMess, setAlertMess] = useState();
    VerifToken();
    return (
    <>
        <NavBarEmpty />
        <div className={style.flexCenter} id="contentInscription">
            <h1 className={style.connexionTitle}>Connexion</h1>
            <div className={style.inscriptionBox}>
                <ConnexionBox />
            </div>
            <div id='ancreErrMess'>
            </div>
        </div>
    </>
    )
}
export default Connexion