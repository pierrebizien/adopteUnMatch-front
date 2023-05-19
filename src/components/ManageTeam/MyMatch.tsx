import style from '../styles/myMatch.module.scss'

interface Input {
	opponent:string,
	city: string,
	date: string,
}

function MyMatch (input : Input) {
	let realOpponent = input.opponent;
	if (input.opponent === null)
		realOpponent = "En recherche"

		return (
			<div className={style.MatchBox}>
				<p className={style.important}>{realOpponent}</p>
				<p>{input.city}</p>
				<p>{input.date.split('T')[0]}</p>
			</div>
		)
	}

export default MyMatch