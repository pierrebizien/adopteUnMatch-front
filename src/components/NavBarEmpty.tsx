import React from "react";
import LogoSpan from "./LogoSpan";
import "./styles/navBarEmpty.css"

function NavBarEmpty()
{
    return (
    <nav>
        <div className="navbarempty">
            <LogoSpan />
        </div>
    </nav>
    );
}
export default NavBarEmpty