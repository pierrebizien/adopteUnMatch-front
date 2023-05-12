import NavBarEmpty from "../../components/NavBarEmpty"
import style from "../styles/inscription.module.scss"
import InscriptionBox from "../../components/Inscription/IncriptionBox"

function Inscription()
{
    return (
    <>
        <NavBarEmpty />
        <div className={style.flexCenter} id="contentInscription">
            <h1 className={style.connexionTitle}>Créer son Équipe</h1>
            <div className={style.inscriptionBox}>
                <InscriptionBox />
            </div>
            <div id='ancreErrMess'>
            </div>
        </div>
    </>
    )
}
export default Inscription