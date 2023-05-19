import style from '../styles/matchBox.module.scss'
import ClosedButton from './ClosedButton';

interface Inputs {
    team1 :string,
    team2 : string | null,
    team1Id: number,
    team2Id: number | null, 
    date : string,
    city: string,
    matchId: number,
    userId: number,
    invalidateCallback : (matchId : number) => void;
}

function MatchBox (datas : Inputs) {

    function handleClick() {
       
        datas.invalidateCallback(datas.matchId);

    }
    const dataFormatted = datas.date.substring(0, datas.date.indexOf('T'));
    let team2;
    let free = false;
    let myMatch = false;
    if (datas.userId === datas.team1Id || datas.userId === datas.team2Id)
    {
        myMatch = true;
    }
    // console.log('test42', datas.userId, datas.team2Id, datas.team1Id)
    if (!datas.team2)
    {
        team2 = 'En Recherche';
        free = true;
    }
    else
    {
        team2 = datas.team2
    }
    console.log('ici BG', team2);
    return(
        <div className={style.box}>
            <p className={style.team1}>{datas.team1}</p>
            <p className={style.vs}>vs</p>
            <p className={style.team2}>{team2}</p>
            <p className={style.date}>{dataFormatted}</p>
            <p className={style.date}>{datas.city}</p>
            {free && !myMatch &&
            <button className={style.buttonPrimary}
            onClick={handleClick}>
                Rejoindre
            </button>}
            {!free && !myMatch &&
            <ClosedButton text="Complet"/>
            }
            {myMatch &&
            <ClosedButton text="Mon Match" />
            }
            
        </div>
    )
}

export default MatchBox