import style from '../styles/filter.module.scss'
import {useState} from 'react'

interface Input 
{
    text : string,
    code : number,
    nameGroup : string,
    checkedBool : boolean
    changeStatus : (status: number) => void;    
}

function Filter(input : Input)
{
    function handleChange() {
        input.changeStatus(input.code);
    }
    return (
        <>
            <div className={style.checkboxDiv}>
                <input onChange={handleChange} className={style.inputFilter} id={`checkbox${input.text}`} type="radio" name={input.nameGroup} checked/>
                <label className={style.labelFilter} htmlFor={`checkbox${input.text}`} >{input.text}</label>
            </div>
        </>
    )
}

export default Filter

// checked={input.checkedBool ? true : false }