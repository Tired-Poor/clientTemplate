import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import About from './components/About';

// Drew added:
import SideOne from './components/PhotoSideOne/SideOne';
import Natours from './components/Natours/Natours';

//Zach added:
import Zach1 from './components/Portraits/Zach1';


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
        path: "about",
        element: <About />
      },
      {
        path: "side-one",
        element: <SideOne />
      },
      {
        path: 'zach1',
        index: true,
        element: <Zach1 />
      },
      {
        path: "natours",
        element: <Natours />
      }
    ]
  }
]);

root.render(<RouterProvider router={router} />);