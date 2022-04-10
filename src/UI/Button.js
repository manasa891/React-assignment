import './Button.css';

const Button = (props) => {
    return (
        <div className='formGroup'>
            <button>{props.name}</button>
        </div>
    )
}

export default Button;