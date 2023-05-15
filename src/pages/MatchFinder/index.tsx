import FilterBox from "../../components/MatchFinder/FilterBox";
import NavBar from "../../components/NavBars/NavBar";
import style from '../styles/matchFinder.module.scss';
import Matchs from "../../components/MatchFinder/Matchs";

function MatchFinder()
{

    return (
        <>
            <div className={style.bodyPage}>
                <NavBar />
                <FilterBox />
                <Matchs />
            </div>
        </>
    )
}
export default MatchFinder