import style from "../styles/inscriptionBox.module.scss"
import { sendCreds } from "../../requests/connexion/auth";
import './Connexion.tools'
import { deleteErrorMessage, parseInputCo, manageResponseLogin } from "./Connexion.tools";

function handleClick(e:Event)
{
    deleteErrorMessage();
    e.preventDefault();
    if (parseInputCo() === 1)
        return ;
    const output = parseInputCo();
    console.log(output);
	sendCreds(output) // renvoie fetch
	.then ((res) => res.json().then(resJSON => manageResponseLogin(resJSON)))
	.catch((err) => console.log(err));
    document.forms.namedItem('connectionForm')?.reset();

}

function ConnexionBox()
{
	

    return (
        <form name="connectionForm" className={style.form}>
                <div className={style.elemBox}>
                    <input name="login" className={style.inputBox} placeholder="Login de la team">
                    </input>
                </div>
                <div  className={style.elemBox}>
                    <input name="password" type="password" className={style.inputBox} placeholder="Mot de passe">
                    </input>
                </div>
                <div className={style.divBoutonPrincipal}>
                    <button className={style.boutonPrincipal} onClick={handleClick}>
                        Se connecter
                    </button>
                </div>
                <div>
                    <a href="/" className={style.connexionLink}>S'inscrire</a>
                </div>
        </form>
    )
}

export default ConnexionBox