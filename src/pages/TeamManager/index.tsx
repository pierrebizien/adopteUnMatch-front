import NavBar from "../../components/NavBars/NavBar"
import avatar from '../../assets/avatar.png'
import style from '../styles/teamManager.module.scss'
import { useQuery } from "react-query"
import { getMyTeam } from "../../requests/Global/global"
import MyMatchs from "./MyMatchs"
import MyPlayers from "./MyPlayers"
function TeamManager()
{
    const {isLoading, error, data } = useQuery(['fetchTeamInfos'], getMyTeam)
    
    if (isLoading)
        return (<p>LOADING</p>);
    if (error)
        return (<p>error</p>)
    console.log('user info', data);
    return (
        <div>
            <NavBar />
            <div className={style.header}>
                <div>
                 <img className={style.avatar} src={avatar}/>
                </div>
                <div className={style.textHeader}>
                 <h1 className={style.nameTeam} >{data.name}</h1>
                 <h2 className={style.cityTeam}>{data.city}</h2>
                </div>
            </div>
            <MyPlayers data={data}/>
            <MyMatchs />
                
                {/* <MyMatchs />
                <MyPlayers /> */}
        </div>
    )
}
export default TeamManager