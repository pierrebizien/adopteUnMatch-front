import { useQuery } from "react-query";
import { getMyLastFive } from "../../requests/Global/global";
import style from "../styles/myMatchs.module.scss"
import MyMatch from "./MyMatch";

function MyMatchs() {
    const {isLoading, error, data } = useQuery(['fetchLastFive'], getMyLastFive)
        
        if (isLoading)
            return (<p>LOADING</p>);
        if (error)
            return (<p>error</p>)
		if (data.length === 0)
			return (<div className={style.MatchsBox}>
				<h2 className={style.titleMyMatchs}>Mes prochains matchs</h2>
				<p className={style.noMatch}>Pas de match prévu</p>
				</div>)
		console.log('MATCHS', data)
    return (
        <div className={style.MatchsBox}>
				<h2 className={style.titleMyMatchs}>Prochains matchs</h2>
			{data.map((item:any, index:number) => {
				let opponent;
				if (item.userId === item.teamAwayId)
					opponent = item.teamHome.name;
				else if (item.teamAway === null)
					opponent = null
				else
					opponent = item.teamAway.name
				return (
				<MyMatch
					key={index}
					opponent={opponent}
					city={item.city}
					date={item.date}/>
				)
				
			})}
		</div>
    )
}

export default MyMatchs