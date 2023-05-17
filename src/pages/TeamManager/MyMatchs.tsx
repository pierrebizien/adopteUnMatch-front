import { useQuery } from "react-query";
import { getMyLastFive } from "../../requests/Global/global";


function MyMatchs() {
    const {isLoading, error, data } = useQuery(['fetchLastFive'], getMyLastFive)
        
        if (isLoading)
            return (<p>LOADING</p>);
        if (error)
            return (<p>error</p>)
    console.log('MyLastFive', data)
    return (
        <h2>Mes 5 prochains matchs</h2>
    )
}

export default MyMatchs