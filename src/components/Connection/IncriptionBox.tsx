import style from "../styles/inscriptionBox.module.scss"

function InscriptionBox()
{
    return (
        <form className={style.form}>
            <div className={style.elemBox}>
                <div>
                    {/* <label>
                        Email
                    </label> */}
                    <input className={style.inputBox} placeholder="Login de la team">
                    </input>
                </div>
                <div>
                    {/* <label>
                        Mot de Passe
                    </label> */}
                    <input className={style.inputBox} placeholder="Mot de passe">
                    </input>
                </div>
                <div className={style.divBoutonSinscrire}>
                    <button className={style.boutonSinscrire}>
                        S'inscrire
                    </button>
                </div>
            </div>
        </form>
    )
}

export default InscriptionBox