import { getTeamName } from "../../requests/Global/global"
import { useState } from "react";

function MatchFinder()
{
    const [nameTeam, setName] = useState('Loading...');

    function getname()
    {
        getTeamName()
        .then(resJSON => {
            console.log('hey', resJSON.name)
            setName(resJSON.name);
        })
        .catch(() => {
            console.log('erreur de json')
            return null
        })
    }
   
    getname();
    return (
        <div>
            <h1>Hello {nameTeam}</h1>
        </div>
    )
}
export default MatchFinder