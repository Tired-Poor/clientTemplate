import { Outlet } from 'react-router-dom';
import './style.css';

const App = () => {
  return (
    <div id="app-return">
      <Outlet context />
    </div>
  )
}

export default App;