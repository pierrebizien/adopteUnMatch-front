import style from '../styles/player.module.scss'

interface Input {
	player:string
}

function Player (infos : Input) {
	return (
	<div className={style.playerBox}>
		<p className={style.important}>{infos.player}</p>
		<p>Age</p>
		<p>Poste</p>
	</div>
	)
}
export default Player