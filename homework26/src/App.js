import { useState } from 'react';
import './App.css';
import Main from './components/Main/Main'
import Button from './components/Button/Button';

const PAGES = {
  LIST: 'List',
  FORM: 'Form',
};

function App() {
  const [pages, setPeges] = useState(PAGES.LIST)
  
  const showList = () => {
    setPeges(PAGES.LIST)
    
  }

  const showForm = () => {
    setPeges(PAGES.FORM)
  }

  return (
    <div className="App">
      <Button value={PAGES.LIST} click={showList}/>
      <Button value={PAGES.FORM} click={showForm}/>
      <Main page={pages} showList={showList} />
    </div>
  );
}

export default App;
