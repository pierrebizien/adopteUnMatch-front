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
                    <input placeholder="Login de la team">
                    </input>
                </div>
                <div>
                    {/* <label>
                        Mot de Passe
                    </label> */}
                    <input placeholder="Mot de passe">
                    </input>
                </div>
                <div>
                    <button>
                        S'inscrire
                    </button>
                </div>
            </div>
        </form>
    )
}

export default InscriptionBox