import Filter from "./Filter"
import styles from "../styles/filterBox.module.scss"


interface FilterBoxProps {
    changeStatus: ((status: number) => void),
    changePage: ((status: number) => void),
    changeLastPage: ((status: boolean) => void),
    statusFilter: number
  }

function FilterBox(input : FilterBoxProps){
    
    return (
    <div className={styles.filterBox}>
        <p className={styles.filterTitle}>Filtres</p>
            <form className={styles.filters}>
                <Filter statusFilter={input.statusFilter} changeStatus={input.changeStatus} changePage={input.changePage} changeLastPage={input.changeLastPage} text="Tous les matchs" nameGroup="filtres" code={0}/>
                <Filter statusFilter={input.statusFilter} changeStatus={input.changeStatus} changePage={input.changePage} changeLastPage={input.changeLastPage} text="Mes matchs" nameGroup="filtres" code={1}/>
                <Filter statusFilter={input.statusFilter} changeStatus={input.changeStatus} changePage={input.changePage} changeLastPage={input.changeLastPage} text="Matchs à venir" nameGroup="filtres" code={2}/>
                <Filter statusFilter={input.statusFilter} changeStatus={input.changeStatus} changePage={input.changePage} changeLastPage={input.changeLastPage} text="Matchs disponibles" nameGroup="filtres" code={3}/>
            </form>
    </div>
    )
}

export default FilterBox