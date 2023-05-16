import FilterBox from "../../components/MatchFinder/FilterBox";
import NavBar from "../../components/NavBars/NavBar";
import style from '../styles/matchFinder.module.scss';
import Matchs from "../../components/MatchFinder/Matchs";
import { useState } from 'react'

function MatchFinder()
{
    const [statusFilter, setStatusFilter] = useState<number>(0);

    return (
        <>
            <div className={style.bodyPage}>
                <NavBar />
                <FilterBox changeStatus={setStatusFilter}/>
                <Matchs status={statusFilter}/>
            </div>
        </>
    )
}
export default MatchFinder