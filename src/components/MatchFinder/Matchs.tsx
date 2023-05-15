import { useQuery } from 'react-query'
import { getTeamName } from "../../requests/Global/global"


function Matchs()
{
    const {isLoading, error, data } = useQuery('fetchTest', getTeamName)
    
    
    if (isLoading)
    {
        return (<h1>LOADING</h1>)
    }
    else if (error)
        return (<h1>ERROR</h1>)
    else    
        console.log(data)
    return (
        <>
        </> 
    )
}

export default Matchs