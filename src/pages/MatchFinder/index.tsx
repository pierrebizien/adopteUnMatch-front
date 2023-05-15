import FilterBox from "../../components/MatchFinder/FilterBox";
import NavBar from "../../components/NavBars/NavBar";
import { getTeamName } from "../../requests/Global/global"
import { useState } from "react";
import style from '../styles/matchFinder.module.scss'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Matchs from "../../components/MatchFinder/Matchs";


function MatchFinder()
{
    const {isLoading, error, data } = useQuery('fetchTest', getTeamName)
    const [nameTeam, setName] = useState('Loading...');

    // function getname()
    // {
    //     getTeamName()
    //     .then(resJSON => {
    //         console.log('hey', resJSON.name)
    //         setName(resJSON.name);
    //     })
    //     .catch(() => {
    //         console.log('erreur de json')
    //         return null
    //     })
    // }
   
    // getname();
    return (
        <>
        <div className={style.bodyPage}>
            <NavBar />
            <FilterBox />
            <Matchs />
        </div>
        {/* <h1>Hello {nameTeam}</h1> */}
        </>
    )
}
export default MatchFinder