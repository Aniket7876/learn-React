import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Layout from './Layout.jsx';
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact.jsx';
import User from './components/User/User.jsx';
import Github, { githubInfoLoader } from './components/Github/Github.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/user/:id',
        element: <User />,
      },
      {
        loader: githubInfoLoader,
        path: '/github',
        element: <Github />,
      },
    ],
  },
]);

// const router = createBrowserRouter([
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route index element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />
//     </Route>
//   ),
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
