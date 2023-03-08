import { useRef, useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import validator from '../../components/Validator';
import { Link, useNavigate, useParams } from 'react-router-dom'
import '../Form/Form.css'

function EditContact(props) {
    const [contact, setContact] = useState({})
    const [nameContact, setNameContact] = useState('')
    const [surnameContact, setSurnameContact] = useState('')
    const navigate = useNavigate();
    const params = useParams();
    const name = useRef('');
    const surname = useRef('');
    const tel = useRef('');

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/'+ params.productId)
        .then(res => res.json())
        .then(res => {
            setContact(res);
            let str = res.name;
            let arr = [str.split(' ', 1).toString(), str.split(' ').slice(1).join(' ')]
            setNameContact(arr[0])
            setSurnameContact(arr[1])
        })
  },[params])
    
    const editContacts = () => {
        let nameValid = validator('name', 'text', name.current.value)
        let surnameValid = validator('surname', 'text', surname.current.value)
        let telValid = validator('phone number','number', tel.current.value)

        if (nameValid && surnameValid && telValid) {
            const editContact = {
                name: name.current.value + " " + surname.current.value,
                phone: tel.current.value,
                id: contact.id,
            }
            props.edit(editContact, params.productId )
            navigate("/")
        }

    }
    
    return (
        <div className='form'>
            <p>Edit Contact:</p>
            <input ref={name} type='text' className="form-input" value={nameContact} onChange={(e)=>setNameContact(e.target.value)}></input>
            <input ref={surname} type='text' className="form-input" value={surnameContact} onChange={(e)=>setSurnameContact(e.target.value)}></input>
            <input ref={tel} type='tel' className="form-input"  placeholder='0xx-xxx-xx-xx' defaultValue={contact.phone}></input>
            <div>
                <Button value="Save" click={editContacts}/>
                <Link to="/" className='form-btn'>Cansel</Link>
            </div>

        </div>
     )
}

export default EditContact;