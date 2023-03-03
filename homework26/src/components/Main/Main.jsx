import { useEffect, useState } from 'react';
import './Main.css'
import List from '../List/List';
import Form from '../Form/Form'


function Main(props) {
    const [list, setList] = useState([])
    useEffect(() => { 
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => {
                setList(res);
            })
    }, [])
    
    const deleteContact = (event) => {
        let indexContact = Number(event.target.getAttribute('data-btn'));
        let newList = list.filter(item => item.id !== indexContact)
        setList(newList) 
    }
    const addContact = (newContact) => {
        const newList = [...list, newContact];
        setList(newList);
        props.showList()
    }

    if (props.page === 'List') {
        return <List list={list} delete={deleteContact} />
    } else {
        return <Form showList={props.showList} new={addContact} />
    }
}
export default Main;
