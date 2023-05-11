// import React from "react";
import NavBarEmpty from "../../components/NavBarEmpty"
import style from "../styles/inscription.module.scss"
import InscriptionBox from "../../components/Inscription/IncriptionBox"

function Connection()
{
    return (
    <>
        <NavBarEmpty />
        <div className={style.flexCenter}>
                <h1 className={style.connexionTitle}>Créer son Équipe</h1>
            <div className={style.inscriptionBox}>
                <InscriptionBox />
            </div>
        </div>
    </>
    )
}
export default Connection