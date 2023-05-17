import style from '../styles/filter.module.scss'
import {useState} from 'react'

interface Input 
{
    text : string,
    code : number,
    nameGroup : string,
    changeStatus : (status: number) => void,
    statusFilter : number    
}

function Filter(input : Input)
{
    function handleChange() {
        input.changeStatus(input.code);
    }
    console.log('TOP',input.code, input.statusFilter)
    let bool = false;
    if (input.statusFilter === input.code)
        bool = true;
    return (
        <>
            <div className={style.checkboxDiv}>
                <input onChange={handleChange} className={style.inputFilter} id={`checkbox${input.text}`} type="radio" name={input.nameGroup} checked={bool ? true:false}/>
                <label className={style.labelFilter} htmlFor={`checkbox${input.text}`} >{input.text}</label>
            </div>
        </>
    )
}

export default Filter

// checked={input.checkedBool ? true : false }