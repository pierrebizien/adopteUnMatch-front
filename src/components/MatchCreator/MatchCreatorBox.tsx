import { useForm, SubmitHandler } from "react-hook-form";
import style from "../styles/matchCreatorBox.module.scss";
import { useState } from "react";
import { createMatch } from "../../requests/MatchCreator/matchCreator";

type Inputs = {
  date: Date;
  city: string;
};

function MatchCreatorBox() {
  
    const today = new Date();
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 1);

  
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const [statusCreation, setStatusCreation] = useState(false);

  function handleClick(data: Inputs) {
    reset();
    createMatch(data)
    .then(() => {
      setStatusCreation(true);
      console.log('HELLOO')
    })
    .catch(e => console.log(e))



  }

  const onSubmit: SubmitHandler<Inputs> = (data) => handleClick(data);

  watch();
  return (
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <div className={style.elems}>
          <div className={style.elemBox}>
            <input
              {...register("date", {
                required: "Champs requis",
              })}
              className={style.inputBox}
              placeholder="Date du match"
              type="date"
              min={today.toISOString().split("T")[0]} 
              max={maxDate.toISOString().split("T")[0]} 
              id="dateMatch"
              />
            {errors.date && (
              <p className={style.error_message_form}>{errors.date?.message}</p>
            )}
          </div>
          <div className={style.elemBox}>
            <select {...register("city", {
            required: "Champs requis"})} 
                id="cityMatch" placeholder="Ville"
                className={style.selectList}>
                <option value="Paris">Paris</option>
                <option value="Lyon">Lyon</option>
                <option value="Le Havre">Le Havre</option>
            </select>
            {errors.city && <p className={style.error_message_form}>{errors.city?.message}</p>}
          </div>
          <div className={style.divBoutonPrincipal}>
            <button className={style.boutonPrincipal} type="submit">
              Créer le match
            </button>
          </div>
          {statusCreation && <p className={style.infoCreation}>Match créé</p>}
       </div>
      </form>
  );
}
export default MatchCreatorBox