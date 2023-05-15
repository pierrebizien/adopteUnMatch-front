import style from '../styles/filter.module.scss'

interface Input 
{
    text : string,
    nameGroup : string
}

function Filter(input : Input)
{
    return (
        <>
            <div className={style.checkboxDiv}>
                <input className={style.inputFilter} id={`checkbox${input.text}`} type="radio" name={input.nameGroup}/>
                <label className={style.labelFilter} htmlFor={`checkbox${input.text}`} >{input.text}</label>
            </div>
        </>
    )
}

export default Filter