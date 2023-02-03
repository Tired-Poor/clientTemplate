import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div id="app-return">
      <Outlet context />
    </div>
  )
}

export default App;