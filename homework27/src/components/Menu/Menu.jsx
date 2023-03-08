import { Link } from 'react-router-dom'
import './Menu.css'



function Menu() {
    return (
        <ul className='menu'>
            <li>
                <Link to="/" className='menu-link'>List</Link>
            </li>
            <li>
                <Link to="/form" className='menu-link'>To create</Link>
            </li>
        </ul>
  );


}
export default Menu;