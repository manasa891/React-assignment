
const Input = (props) => {

    return(
        <>
            <div className='formGroup'>
                <label htmlFor={props.name}>{props.label}:</label>
                <input type={props.type} onChange={(e) => props.inputHandler(e)} id={props.name} name={props.name} value={props.value}/>
            </div>
        </>
    )
}

export default Input;