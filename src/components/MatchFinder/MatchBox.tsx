import style from '../styles/matchBox.module.scss'

interface Inputs {
    team1 :string,
    team2 : string | null,
    date : string,
    city: string
}

function MatchBox (datas : Inputs) {
    
    const dataFormatted = datas.date.substring(0, datas.date.indexOf('T'));
    let team2;
    if (!datas.team2)
        team2 = 'En Recherche'
    else   
        team2 = datas.team2
    return(
        <div className={style.box}>
            <p className={style.team1}>{datas.team1}</p>
            <p className={style.vs}>vs</p>
            <p className={style.team2}>{team2}</p>
            <p className={style.date}>{dataFormatted}</p>
            <p className={style.date}>{datas.city}</p>
            <button className={style.buttonPrimary}>
                Rejoindre
            </button>
        </div>
    )
}

export default MatchBox