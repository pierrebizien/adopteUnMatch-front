import NavBarEmpty from "../../components/NavBars/NavBarEmpty"
import style from "../styles/inscription.module.scss"
import ConnexionBox from "../../components/Connexion/ConnexionBox-RHF";
// import { VerifToken } from "../ProtectionPages/ProtectedPages.tools";



function Connexion()
{
    // VerifToken();
    return (
    <div className={style.bodyPage}>
        <NavBarEmpty />
        <div className={style.flexCenter} id="contentInscription">
            <h1 className={style.connexionTitle}>Connexion</h1>
            <div className={style.inscriptionBox}>
                <ConnexionBox />
            </div>
            <div id='ancreErrMess'>
            </div>
        </div>
    </div>
    )
}
export default Connexion