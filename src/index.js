import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import About from './components/About';

// Drew added:
import SideOne from './components/SideOne';

//Zach added:
import Zach1 from './components/Zach1';


const appElement = document.getElementById('app');
const root = createRoot(appElement);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        index: "about",
        element: <About />
      },
      {
        index: "side-one",
        element: <SideOne />
      },
      {
        path: 'zach1',
        element: <Zach1 />
      }
    ]
  }
]);

root.render(<RouterProvider router={router} />);