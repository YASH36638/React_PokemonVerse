import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Pokemon} from './Pokemon/Pokemon'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PokemonDetails } from './Pokemon/PokemonDetails'

function App() {

  const router=createBrowserRouter([
      {
        path:"/",
        element:<Pokemon/>
      },
          {
            path:"/:name",
            element:<PokemonDetails  />
          }
        
        
      
    ])
  return (
    
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;
