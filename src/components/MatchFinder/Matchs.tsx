import { useQuery } from 'react-query'
import { getMatches, getMyMatches, getPastMatches, getUpcomingMatches } from "../../requests/Global/global"
import style from "../styles/matchs.module.scss"
import MatchBox from './MatchBox';


interface Input
{
    status : number,
}

interface Inputs {
    team1 :string,
    team2 : string,
    date : string,
    city: string
}

function Matchs(input : Input)
{
    console.log("status vaut", input.status);
    let reqFunction = [getMatches, getMyMatches, getUpcomingMatches, getPastMatches]
    const {isLoading, error, data } = useQuery(['fetchTest', input.status], reqFunction[input.status])

    if (isLoading)
    {
        return (<h1>LOADING</h1>)
    }
    else if (error)
        return (<h1>ERROR</h1>)
    else
        console.log(data)
    if (data.length === 0)
        return (<p>Pas de Match</p>)
    // const dataSorted = data.sort((a,b) => {
    //     return (a.date - b.date)
    // })
    return (
        <>
                <h1 className={style.titleMatch}>Matchs</h1>
                {/* <MatchBox /> */}
                {data.map((item:any, index:number) => {
                   let nameAway;
                   if (!item.teamAway)
                        nameAway = null;
                    else
                        nameAway = item.teamAway;
                    const datas : Inputs = {
                        team1 : item.teamHome.name,
                        team2 : nameAway,
                         date : item.date,
                         city: item.city
                    };
                    return (<MatchBox {...datas} />)
                    
                })}
        </>
    )
}

export default Matchs