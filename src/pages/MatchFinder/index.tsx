import FilterBox from "../../components/MatchFinder/FilterBox";
import NavBar from "../../components/NavBars/NavBar";
import style from '../styles/matchFinder.module.scss';
import Matchs from "../../components/MatchFinder/Matchs";
import { useState } from 'react'

function MatchFinder()
{
    const [statusFilter, setStatusFilter] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const [lastPage, setLastPage] = useState<boolean>(false);

    function handleClickNext ()
    {
        setPage(page + 1);
    }
    function handleClickPrev ()
    {
        setPage(page - 1);
    }
    return (
        <>
            <div className={style.bodyPage}>
                <NavBar />
                <FilterBox changeStatus={setStatusFilter} statusFilter={statusFilter}/>
                <Matchs status={statusFilter} page={page} setPage={setPage} setLastPage={setLastPage}/>
                <div className={style.pagination}>
                    {page !== 1 &&
                    <a onClick={handleClickPrev}>Page précédente</a>
                    }
                    {!lastPage &&
                    <a onClick={handleClickNext}>Page suivante</a>
                    }
                </div>
            </div>
        </>
    )
}
export default MatchFinder