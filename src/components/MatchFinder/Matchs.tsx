import { useQuery } from 'react-query'
import { getMatches, getMyMatches, getFreeMatches, getUpcomingMatches } from "../../requests/Global/global"
import style from "../styles/matchs.module.scss"
import MatchBox from './MatchBox';
import "../styles/matchs.module.scss"



interface Input
{
    status : number,
}

interface Inputs {
    team1 :string,
    team1Id: number,
    team2Id: number | null, 
    team2 : string,
    date : string,
    city: string,
    matchId : number,
    userId : number
    
}

function Matchs(input : Input)
{
    console.log("status vaut", input.status);
    const reqFunction = [getMatches, getMyMatches, getUpcomingMatches, getFreeMatches]
    const {isLoading, error, data } = useQuery(['fetchTest', input.status], reqFunction[input.status])

    if (isLoading)
    {
        return (<div className={style.loader}></div>)
    }
    else if (error)
    {
        return (<p>ERROR</p>)
    }
    else
        console.log(data)
    if (data.length === 0)
        return (<p>Pas de Match</p>)
    return (
        <>
                <h1 className={style.titleMatch}>Matchs</h1>
                {/* <MatchBox /> */}
                {data.map((item:any, index:number) => {
                   let nameAway;
                   if (!item.teamAway)
                        nameAway = null;
                    else
                        nameAway = item.teamAway.name;
                    const datas : Inputs = {
                        team1 : item.teamHome.name,
                        team1Id: item.teamHomeId,
                        team2 : nameAway,
                        team2Id: item.teamAwayId,
                         date : item.date,
                         city: item.city,
                         matchId : item.id,
                         userId : item.userId
                    };
                    return (<MatchBox {...datas} />)
                    
                })}
        </>
    )
}

export default Matchs