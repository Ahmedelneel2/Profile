import './App.css'
import Footer from './assets/Pages/Footer/Footer'

    import"@fortawesome/fontawesome-free/css/all.min.css"
import MainLayout from './assets/Pages/MainLayout/MainLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './assets/Pages/About/About'
import Portoflio from './assets/Pages/Poroflio/Portoflio'
import Contact from './assets/Pages/Contact/Contact'
import Home from './assets/Pages/Home/Home';
function App() {
const router = createBrowserRouter(
 [ {path:"/" , element:<MainLayout/> ,children:[
  {index:true,element:<Home/>},
{path:'about',element:<About/>},
{path:"portfolio",element:<Portoflio/>},
{path:"contact",element:<Contact/>}
    ]
  }]
)
  return ( <> 
  <RouterProvider router={router}/>   
 </>)
}

export default App
