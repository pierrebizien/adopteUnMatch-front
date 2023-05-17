import style from "../styles/inscriptionBox.module.scss"
import { createTeam } from "../../requests/Inscription/Team"
import './Inscription.tools'
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

function manageResponse(res : Response, setmessageErrServeur:  React.Dispatch<React.SetStateAction<string>>)
{
	res.json()
	.then(resJSON =>
        {
            if(resJSON.code !== 0)
            {
                setmessageErrServeur(resJSON.message);
            }
        }
	)
	.catch(e => console.log(e));
}

type Inputs = {
    login  : string,
    password: string,
    name: string,
    city: string
  };

function InscriptionBox()
{
    const {register, handleSubmit, watch, formState: { errors }, reset } = useForm<Inputs>();
    const [messageErrServeur, setmessageErrServeur] = useState("");
    
    function handleClick(data: Inputs)
    {
        reset();
        createTeam(data) // renvoie fetch
        .then ((res) => manageResponse(res, setmessageErrServeur))
        .catch((err) => console.log(err));
    
    }

    const onSubmit: SubmitHandler<Inputs> = data => handleClick(data);

    watch();
    return (
            <form onSubmit={handleSubmit(onSubmit)} className={style.form} data-testid="formInscr">
              <div className={style.elemBox}>
                  <input {...register("login", {
                    required: "Champs requis",
                    minLength: {
                      value: 4,
                      message: "Minimum 4 caracteres"
                    },
                    pattern : {
                      value: /^[a-zA-Z0-9_]+$/i,
                      message: "Que des chiffres, lettres ou underscore"
                    }
                    })}
                     className={style.inputBox} 
                     placeholder="Login de la team" />
                   {errors.login &&  <p className={style.error_message_form}>{errors.login?.message}</p>}
              </div>
              <div  className={style.elemBox}>
                  <input {...register("password", {
                    required: "Champs requis",
                    minLength: {
                        value: 8,
                        message: "Minimum 8 caracteres"
                      },
                      pattern : {
                        value: /^[a-zA-Z0-9_]+$/i,
                        message: "Que des chiffres, lettres ou underscore"
                      }
                      })}
                    type="password" className={style.inputBox} placeholder="Mot de passe" />
                    {errors.password && <p className={style.error_message_form}>{errors.password?.message}</p>}
              </div>
              <div  className={style.elemBox}>
                  <input {...register("name", {
                    required: "Champs requis",
                    minLength: {
                        value: 4,
                        message: "Minimum 4 caracteres"
                      },
                      pattern : {
                        value: /^[a-zA-Z0-9_]+$/i,
                        message: "Que des chiffres, lettres ou underscore"
                      }
                      })}
                    className={style.inputBox} placeholder="Nom de la Team" />
                    {errors.name && <p className={style.error_message_form}>{errors.name?.message}</p>}
              </div>
              <div className={style.elemBox}>
                    <select {...register("city", {
                    required: "Champs requis"})} 
                        id="cities" placeholder="Ville"
                        className={style.selectList}>
                        <option value="Paris">Paris</option>
                        <option value="Lyon">Lyon</option>
                        <option value="Le Havre">Le Havre</option>
                    </select>
                    
                    {errors.city && <p className={style.error_message_form}>{errors.city?.message}</p>}
              </div>
              <div className={style.divBoutonPrincipal}>
                  <button className={style.boutonPrincipal} type="submit">
                      S'inscrire
                  </button>
              </div>
              <div>
                  <a href="/Connexion" className={style.connexionLink}>Se connecter</a>
              </div>
              {messageErrServeur !== "" && <p>{messageErrServeur}</p>}
          </form>
    )
}

export default InscriptionBox