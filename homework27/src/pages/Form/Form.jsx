import { useRef } from 'react';
import './Form.css'
import Button from '../../components/Button/Button';
import validator from '../../components/Validator';
import { Link, useNavigate } from 'react-router-dom'


function Form(props) {
    const navigate = useNavigate();
    const name = useRef('');
    const surname = useRef('');
    const tel = useRef('');

    const saveContact = () => {
        let nameValid = validator('name', 'text', name.current.value)
        let surnameValid = validator('surname', 'text', surname.current.value)
        let telValid = validator('phone number','number', tel.current.value)

        if (nameValid && surnameValid && telValid) {
            const newContact = {
                name: name.current.value + " " + surname.current.value,
                phone: tel.current.value,
                id: Date.now(),
                key: Date.now(),
            }
            props.new(newContact)
            navigate("/")
        }
    }
    
    return (
        <div className='form'>
            <p>New contact:</p>
            <input ref={name} type='text' className="form-input" placeholder='name'></input>
            <input ref={surname} type='text' className="form-input" placeholder='uername'></input>
            <input ref={tel} type='tel' className="form-input"  placeholder='0xx-xxx-xx-xx'></input>
            <div>
                <Button value="Save" click={saveContact}/>
                <Link to="/" className='form-btn'>Cansel</Link>
            </div>

        </div>
     )
}

export default Form;