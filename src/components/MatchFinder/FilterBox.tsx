import Filter from "./Filter"
import styles from "../styles/filterBox.module.scss"

function FilterBox(){
    return (
    <div className={styles.filterBox}>
        <p className={styles.filterTitle}>Filtres</p>
            <form className={styles.filters}>
            <Filter text="Tous les matchs" nameGroup="filtres" />
            <Filter text="Mes matchs" nameGroup="filtres" />
            <Filter text="Matchs à venir" nameGroup="filtres" />
            <Filter text="Match terminés" nameGroup="filtres" />
            </form>
    </div>
    )
}

export default FilterBox