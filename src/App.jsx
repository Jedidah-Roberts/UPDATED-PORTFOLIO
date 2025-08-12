
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import PageLayout from './layouts/PageLayout';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Services from './pages/Services';
import AllProjects from './pages/AllProjects';
import Contact from './pages/Contact';

function App() {
 const router = createBrowserRouter([
  {
    path:"/",
    element:<PageLayout/>,
    children:[
      { index: true,
      element:<LandingPage/>},
      {
        path:"about",
        element:<About/>
      },
      {
        path:"experience",
        element:<Experience/>
      },
      {
        path:"skills",
        element:<Skills/>
      },
      {
        path:"services",
        element:<Services/>
      },
      {
        path:"projects",
        element:<AllProjects/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
     
    ]
  }
 ]);

  return (<RouterProvider router={router}/>
    
  )
}

export default App
