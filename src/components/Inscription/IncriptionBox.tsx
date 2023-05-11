import style from "../styles/inscriptionBox.module.scss"
import { createTeam } from "../../requests/Inscription/Team";

function manageResponse(res : Response)
{
	res.json()
	.then(message =>
		console.log(message.err_message)
	)
	.catch(e => console.log(e));
}

function handleClick(e:Event)
{
    e.preventDefault();
	createTeam()
	.then ((res) => manageResponse(res))
	.catch((err) => console.log(err.error_code));
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
                <div className={style.divBoutonSinscrire}>
                    <button className={style.boutonSinscrire} onClick={handleClick}>
                        S'inscrire
                    </button>
                </div>
        </form>
    )
}

export default InscriptionBox