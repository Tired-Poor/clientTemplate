import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Application
import App from './components/App/App';
import ErrorPage from './components/App/ErrorPage';
// Homepage ("Welcome Page")
import Home from './components/Home/Home';
import ContactUs from './components/Home/ContactUs';


// Drew added:
import SideOne from './components/PhotoSideOne/SideOne';
import Natours from './components/Natours/Natours';
import Electronics from './components/Electronics/Electronics';
import Beauty from './components/Beauty/Beauty';

//Zach added:
import Zach1 from './components/Portraits/Zach1';
import Contact from './components/Contact/Contact';
import LandingHome from './ProductLanding/LandingHome'


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
        path: "contact-us",
        element: <ContactUs />
      },
      {
        path: "side-one",
        element: <SideOne />
      },
      {
        path: "electronics",
        element: <Electronics />
      },
      {
        path: "beauty",
        element: <Beauty />
      },
      {
        path: 'zach1',
        index: true,
        element: <Zach1 />
      },
      {
        path: "natours",
        element: <Natours />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'landing',
        element: <LandingHome />,
        children: [
          {
            path: 'heritage',
            element: <Contact />
          }
        ]
      }
    ]
  }
]);

root.render(<RouterProvider router={router} />);