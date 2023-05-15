import LogoSpan from "../LogoSpan";
import "../styles/navBarEmpty.modules.scss"

function NavBarEmpty()
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
    );
}
export default NavBarEmpty