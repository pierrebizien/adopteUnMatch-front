import { useQuery, useQueryClient } from 'react-query'
import { getMatches, getMyMatches, getFreeMatches, getUpcomingMatches } from "../../requests/Global/global"
import style from "../styles/matchs.module.scss"
import MatchBox from './MatchBox';
import "../styles/matchs.module.scss"
import { joinTeamToMatch } from '../../requests/Global/global';


interface Input
{
    status : number,
    page : number,
    setPage: ((status: number) => void),
    setLastPage: ((status: boolean) => void),
}

interface Inputs {
    team1 :string,
    team1Id: number,
    team2Id: number | null, 
    team2 : string,
    date : string,
    city: string,
    matchId : number,
    userId : number,
    invalidateCallback : (matchId : number)=>void;
    
}

function Matchs(input : Input)
{
    const reqFunction = [getMatches, getMyMatches, getUpcomingMatches, getFreeMatches]
    const {isLoading, error, data } = useQuery(['fetchMatch', input.status, input.page], reqFunction[input.status])
    const queryClient = useQueryClient();

    function invalidateCallback (matchId : number)
    {
        joinTeamToMatch(matchId)
        .then (() => {
            queryClient.invalidateQueries(['fetchMatch', input.status])
        }
        )
        .catch(e => console.log(e))
    }
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
    console.log(data.length, 'LENGTH');
    if (data.length < 8)
        input.setLastPage(true);
    else
        input.setLastPage(false);
    if (data.length === 0)
        return (<p className={style.noMatch}>Pas de Match</p>)
    return (
        <>
                <h1 className={style.titleMatch} >Matchs</h1>
                <hr className={style.hr}/>
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
                         userId : item.userId,
                         invalidateCallback : invalidateCallback
                    };
                    return (<MatchBox {...datas} />)
                    
                })}
        </>
    )
}

export default Matchs