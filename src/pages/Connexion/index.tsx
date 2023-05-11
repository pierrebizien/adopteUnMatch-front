import {useState} from "react";
import NavBarEmpty from "../../components/NavBarEmpty"
import style from "../styles/inscription.module.scss"
import ConnexionBox from "../../components/Connexion/ConnexionBox";

function Connexion()
{
    const [alertMess, setAlertMess] = useState();

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