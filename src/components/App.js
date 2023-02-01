import { useOutletContext } from 'react-router-dom';
import './style.css';

const App = () => {
  return(
    <div>
      App PAGE
      <header>TEMPLATE Header</header>

      <Outlet context />


    </div>
  )
}

export default App;