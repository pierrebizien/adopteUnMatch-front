import style from '../styles/myPlayers.module.scss'
import Player from './Player'

function MyPlayers({data} : any)
{
    return (
        <div className={style.playersBox}>
            <h2 className={style.titlePlayers}>Mon Equipe</h2>
            <Player player={data.player1}/>
            <Player player={data.player2}/>
            <Player player={data.player3}/>
            <Player player={data.player4}/>
            <Player player={data.player5}/>
        </div>
    )
}
export default MyPlayers