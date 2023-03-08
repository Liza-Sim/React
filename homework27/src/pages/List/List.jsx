import './List.css'
import { Link } from 'react-router-dom'

function List(props) {
    const showSplit = (a, str) => {
        let arr = [str.split(' ', 1).toString(), str.split(' ').slice(1).join(' ')];
        if (a === 'name') {
            const name = arr[0]
            return name
        } else {
            const surname = arr[1]
            return surname
        } 
    }

    const listArr = props.list;
        return listArr.map(participant => (
            <div id={participant.id} key={participant.id} className="contact">
                <p className='text'>{showSplit('name',participant.name)}</p>
                <p className='text'>{showSplit('surname',participant.name)}</p>
                <p className='text'>{participant.phone}</p>
                <button className='delete-btn' type='button' data-btn={participant.id} onClick={props.delete}>Delete</button>
                <Link to={ `/edit/${participant.id}`} className='delete-btn' onClick={props.edit} >Edit</Link>
            </div>
        ))
}

export default List;