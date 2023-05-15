import MatchCreatorBox from "../../components/MatchCreator/MatchCreatorBox.tsx"
import NavBar from "../../components/NavBars/NavBar.tsx"
import style from "../styles/matchCreator.module.scss"
function MatchCreator()
{
	return (
		<>
			<NavBar />
			<div className={style.titleDiv}>
				<h1 className={style.title}>Créez votre Match !</h1>
			</div>
			<MatchCreatorBox />
		</>
	)
}

export default MatchCreator