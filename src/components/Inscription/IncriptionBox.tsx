import style from "../styles/inscriptionBox.module.scss"

function handleClick(e:Event)
{
    e.preventDefault();
    const login = document.forms['connectionForm']['login'];
    const mdp = document.forms['connectionForm']['password'];
    const city = document.forms['connectionForm']['city'];
    const name = document.forms['connectionForm']['name'];
    // console.log(login, mdp)
    fetch("http://localhost:5175/api/stuff", {
     method: "post",
     headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  //make sure to serialize your JSON body
  body: JSON.stringify({
    login: login.value,
    name: name.value,
    password: mdp.value,
    city: city.value
  })
})
.then ((res) => console.log(res))
.catch((error) => console.log(error));

    document.forms['connectionForm'].reset();

}

function InscriptionBox()
{
    return (
        <form name="connectionForm" className={style.form}>
            <div className={style.elemBox}>
                <div>
                    <input name="login" className={style.inputBox} placeholder="Login de la team">
                    </input>
                </div>
                <div>
                    <input name="password" type="password" className={style.inputBox} placeholder="Mot de passe">
                    </input>
                </div>
                <div>
                    <input name="name" className={style.inputBox} placeholder="Nom de la team">
                    </input>
                </div>
                <div>
                    <input name="city" className={style.inputBox} placeholder="Ville">
                    </input>
                </div>
                <div className={style.divBoutonSinscrire}>
                    <button className={style.boutonSinscrire} onClick={handleClick}>
                        S'inscrire
                    </button>
                </div>
            </div>
        </form>
    )
}

export default InscriptionBox