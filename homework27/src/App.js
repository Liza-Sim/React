import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { useEffect, useState } from 'react';
import List from './pages/List/List'
import Form from './pages/Form/Form'
import Menu from './components/Menu/Menu'
import EditContact from './pages/EditContact/EditContact'



function App() {
  const [list, setList] = useState([]);
  const [deleteCont, setDeleteCont] = useState(false)
  const [deleteId, setDeleteId] = useState()
  useEffect(() => { 
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res => {
            setList(res);
        })
  }, [])
  const modal = (event) => {
    setDeleteCont(true)
    let indexContact = Number(event.target.getAttribute('data-btn'));
    setDeleteId(indexContact)
  };
  const deleteContact =() => {
    let newList = list.filter(item => item.id !== deleteId)
    setList(newList)
    setDeleteCont(false)
  }

  const addContact = (newContact) => {
    const newList = [...list, newContact];
    setList(newList);
  };

  const editContact =(edit, id) => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === +id) {
        list[i].name = edit.name;
        list[i].phone = edit.phone;
      }
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path='/' element={<List list={list} delete={modal} />} />
          <Route path='/form' element={<Form new={addContact} />} />
          <Route path='/edit/:productId' element={<EditContact list={list} edit={editContact} />} />
        </Routes>
        {deleteCont && 
          <div className='modal'>
            <div className="content">
            <button type="button" class="close-button" onClick={()=>{setDeleteCont(false)}}>&#215;</button>
            <h3 className="title">are you sure it needs to be removed?</h3>
            <div className="button_box">
                <button className="button" type="button" onClick={deleteContact}>yes</button>
                <button className="button" type="button" onClick={()=>{setDeleteCont(false)}}>no</button>
            </div>
          </div>
          </div>
        
        }
      </BrowserRouter>
    </div>
  );
}

export default App;

