import { useForm, SubmitHandler } from "react-hook-form";
import style from "../styles/inscriptionBox.module.scss";
import { sendCreds } from "../../requests/Connexion/auth";
import { manageResponseLogin } from "./Connexion.tools";
import { useState } from "react";

type Inputs = {
  login: string;
  password: string;
};

function ConnexionBox() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const [incorrectCreds, setIncorrectCreds] = useState(false);

  function handleClick(data: Inputs) {
    reset();
    sendCreds(data) // renvoie fetch
      .then((res) =>
        res
          .json()
          .then((resJSON) => manageResponseLogin(resJSON, setIncorrectCreds))
      )
      .catch((err) => console.log(err));
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => handleClick(data);

  watch();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <div className={style.elemBox}>
        <label className={style.labels} htmlFor="loginInput">Login</label>
        <input
          {...register("login", {
            required: "Champs requis",
          })}
          className={style.inputBox}
          placeholder="Login de la team"
          id="loginInput"
        />
        {errors.login && (
          <p className={style.error_message_form}>{errors.login?.message}</p>
        )}
      </div>
      <div className={style.elemBox}>
        <label className={style.labels} htmlFor="passwordInput">Password</label>
        <input
          {...register("password", {
            required: "Champs requis",
          })}
          type="password"
          className={style.inputBox}
          placeholder="Mot de passe"
          id="passwordInput"
        />
        {errors.password && (
          <p className={style.error_message_form}>{errors.password?.message}</p>
        )}
      </div>
      <div className={style.divBoutonPrincipal}>
        <button className={style.boutonPrincipal} type="submit">
          Se connecter
        </button>
      </div>
      <div>
        <a href="/" className={style.connexionLink}>
          S'inscrire
        </a>
      </div>
      {incorrectCreds && <p className={style.wrongCreds}>Credentials incorrects</p>}
    </form>
  );
}
export default ConnexionBox;
