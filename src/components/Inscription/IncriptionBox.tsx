import style from "../styles/inscriptionBox.module.scss"
import { createTeam } from "../../requests/Inscription/Team.ts"
import './Inscription.tools.tsx'
import { deleteErrorMessage, parseInputInscr, setErrorMessage } from "./Inscription.tools.tsx";

function manageResponse(res : Response)
{
    console.log('test 3', res);
	res.json()
	.then(resJSON =>
        {
            if(resJSON.code !== 0)
            {
                console.log('on doit voir s afficher un message');
                setErrorMessage(resJSON.message);
            }
        }
	)
	.catch(e => console.log(e));
}

function handleClick(e:Event)
{
    deleteErrorMessage();
    e.preventDefault();
    if (parseInputInscr() === 1)
        return ;
    const output = parseInputInscr();
    console.log(output);
	createTeam(output) // renvoie fetch
	.then ((res) => manageResponse(res))
	.catch((err) => console.log(err));
    document.forms['connectionForm'].reset();

}

function InscriptionBox()
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
                <div  className={style.elemBox}>
                    <input name="name" className={style.inputBox} placeholder="Nom de la team">
                    </input>
                </div>
                <div  className={style.elemBox}>
                    <input name="city" className={style.inputBox} placeholder="Ville">
                    </input>
                </div>
                <div className={style.divBoutonPrincipal}>
                    <button className={style.boutonPrincipal} onClick={handleClick}>
                        S'inscrire
                    </button>
                </div>
                <div>
                    <a href="/Connexion" className={style.connexionLink}>Se connecter</a>
                </div>
        </form>
    )
}

export default InscriptionBox