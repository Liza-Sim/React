import './Button.css'

function Button(props) {
    return (
        <button type='button' value={props.value} onClick={props.click} className="button">{props.value}</button>
     )
}

export default Button;