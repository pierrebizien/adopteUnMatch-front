import style from '../styles/buttonNavBar.module.scss'

interface Inputs {
	text : string,
	link : string
}

function ButtonNavBar(inputs : Inputs): JSX.Element
{
	return (
		<>
			<a href={inputs.link} className={style.link}>
				{inputs.text}
			</a>
		</>
	)
}

export default ButtonNavBar