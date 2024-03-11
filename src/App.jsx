import './App.css';
import React from 'react';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './components/Pages/Home.jsx';
import Error404 from './components/Error404.jsx';
import WebApp from "./components/Pages/services/WebApp.jsx";
import OneCDev from './components/Pages/services/1c.jsx';
import Analytics from "./components/Pages/services/Analytics.jsx";
import BusinessProcess from "./components/Pages/services/BusinessProcess.jsx"
import JavaScriptDev from './components/Pages/services/JavaScript.jsx';
import TechDoc from './components/Pages/services/TechDoc.jsx';
import Module1CEIS from './components/Pages/products/Module1CEIS.jsx';
import AboutPage from './components/Pages/AboutPage.jsx';


function App() {

  const router = createBrowserRouter([{
    path:"/",
    element:<Home/>,
  },
  {
    path:"/products",
    element:<Module1CEIS/>
  },
  {
    path:"/services/web-app-development",
    element:<WebApp/>
  },
  {
    path:"/services/1c-development",
    element:<OneCDev/>,
  },
  {
    path:"/services/analytics",
    element:<Analytics/>,
  },
  {
    path:"/services/business-process-description",
    element:<BusinessProcess/>,
  },
  {
    path:"/services/javascript",
    element:<JavaScriptDev/>,
  },
  {
    path:"/services/tech-documentation",
    element:<TechDoc/>
  },
  {
    path:"/about",
    element: <AboutPage/>
  },
  {
  path: "/*",
  element: <Error404 />
  }
])

  return (
        <RouterProvider router={router}>
        </RouterProvider>
  );
}

export default App;
