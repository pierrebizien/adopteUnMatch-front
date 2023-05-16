import Filter from "./Filter"
import styles from "../styles/filterBox.module.scss"


interface FilterBoxProps {
    changeStatus: (status: number) => void;
  }

function FilterBox(input : FilterBoxProps){
    
    return (
    <div className={styles.filterBox}>
        <p className={styles.filterTitle}>Filtres</p>
            <form className={styles.filters}>
                <Filter changeStatus={input.changeStatus} text="Tous les matchs" nameGroup="filtres" checkedBool={true} code={0}/>
                <Filter changeStatus={input.changeStatus} text="Mes matchs" nameGroup="filtres" checkedBool={false} code={1}/>
                <Filter changeStatus={input.changeStatus} text="Matchs à venir" nameGroup="filtres" checkedBool={false} code={2}/>
                <Filter changeStatus={input.changeStatus} text="Match terminés" nameGroup="filtres" checkedBool={false} code={3}/>
            </form>
    </div>
    )
}

export default FilterBox