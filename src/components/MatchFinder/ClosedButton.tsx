import style from '../styles/closedButton.module.scss'

interface Inputs {
    text : string
}

function ClosedButton(text : Inputs) {
    
    return (
    <div className={style.divClosedButton}>
        <button className={style.closedButton}>
          {text.text}
        </button>
    </div>);
}

export default ClosedButton;