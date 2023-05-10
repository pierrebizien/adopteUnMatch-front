// import React from "react";
import NavBarEmpty from "../../components/NavBarEmpty"
import style from "../styles/connection.module.scss"
import InscriptionBox from "../../components/Connection/IncriptionBox"

function Connection()
{
    return (
    <>
        <NavBarEmpty />
        <div className={style.flexCenter}>
                <h1 className={style.connexionTitle}>Connexion</h1>
            <div className={style.inscriptionBox}>
                <InscriptionBox />
            </div>
        </div>
    </>
    )
}
export default Connection