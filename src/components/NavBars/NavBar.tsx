import LogoSpan from "../LogoSpan"; 
import style from "../styles/navBar.module.scss"
// import style from "../styles/inscriptionBox.module.scss";
import ButtonNavBar from './ButtonNavbar'

function NavBar()
{
    return (
		<>
			<div className="navbarempty-fake">
			</div>
				<nav className={style.navBar}>
					<div className={style.logo}>
					<LogoSpan />
					</div>
					<ul className={style.buttons}>
						<ButtonNavBar text="Match Creator" link="/MatchCreator"/>
						<ButtonNavBar text="Match Finder" link="/MatchFinder"/>
						<ButtonNavBar text="Manage Team" link="/ManageTeam"/>
					</ul>
				</nav>
		</>
	) ;
}

export default NavBar