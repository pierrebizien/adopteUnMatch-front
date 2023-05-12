import { getTeamName } from "../../requests/Global/global"


function getname()
{
    getTeamName()
    .then(name => {
    return name;
    })
    .catch(e => {return null})
}
function MatchFinder()
{
    
   const name = getname();
    console.log(name);
    return (
        <div>
            <h1>{'Match Finder' + {name}}</h1>
        </div>
    )
}
export default MatchFinder