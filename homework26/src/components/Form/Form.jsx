import { useRef } from 'react';
import './Form.css'
import Button from '../Button/Button';
import validator from '../Validator';


function Form(props) {

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
        }

    }
    
    const cansel = () => {
        props.showList() 
    }
    return (
        <div className='form'>
            <input ref={name} type='text' className="form-input" placeholder='name'></input>
            <input ref={surname} type='text' className="form-input" placeholder='uername'></input>
            <input ref={tel} type='tel' className="form-input"  placeholder='0xx-xxx-xx-xx'></input>
            <div>
                <Button value="save" click={saveContact}/>
                <Button value="cansel" click={cansel}/>
            </div>

        </div>
     )
}

export default Form;