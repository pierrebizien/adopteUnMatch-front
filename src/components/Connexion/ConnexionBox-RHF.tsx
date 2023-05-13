import { useForm, SubmitHandler } from "react-hook-form";
import style from "../styles/inscriptionBox.module.scss"
import { sendCreds } from "../../requests/connexion/auth";
import { manageResponseLogin } from "./Connexion.tools";
import { useState } from "react";


type Inputs = {
    login  : string,
    password: string,
  };

function ConnexionBox()
{
    const {register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const [incorrectCreds, setIncorrectCreds] = useState(false);
    
    function handleClick(data: Inputs)
    {
      sendCreds(data) // renvoie fetch
      .then ((res) => res.json().then(resJSON => manageResponseLogin(resJSON, setIncorrectCreds)))
      .catch((err) => console.log(err));
    
    }

    const onSubmit: SubmitHandler<Inputs> = data => handleClick(data);

    watch();
    return (
            <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
              <div className={style.elemBox}>
                  <input {...register("login", {
                    required: "Champs requis"
                    })}
                     className={style.inputBox} 
                     placeholder="Login de la team" />
                   {errors.login &&  <p className={style.error_message_form}>{errors.login?.message}</p>}
              </div>
              <div  className={style.elemBox}>
                  <input {...register("password", {
                    required: "Champs requis",
                    })} type="password" className={style.inputBox} placeholder="Mot de passe" />
                    {errors.password && <p className={style.error_message_form}>{errors.password?.message}</p>}
              </div>
              <div className={style.divBoutonPrincipal}>
                  <button className={style.boutonPrincipal} type="submit">
                      Se connecter
                  </button>
              </div>
              <div>
                  <a href="/" className={style.connexionLink}>S'inscrire</a>
              </div>
              {incorrectCreds && <p>Credentials incorrects</p>}
          </form>
    )
}
export default ConnexionBox