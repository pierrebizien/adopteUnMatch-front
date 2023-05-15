import LogoSpan from "../LogoSpan"; 
import "../styles/navBarEmpty.modules.scss"

function NavBar()
{
    return (
		<>
			<div className="navbarempty-fake">
			</div>
			<div className="navbarempty">
				<nav>
					<LogoSpan />
				</nav>
			</div>
		</>
	) ;
}

export default NavBar