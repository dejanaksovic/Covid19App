import { BrowserRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'

import Statistic from './components/Statistic/Statistic'

//KONTEKSTI
import CasesContextProvider from './context/casesContext'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      {/* Samo copy past putanju i elemenet ubacite koji hocete, putanja tipa [/team] */}
      <Route path='/' element = {<Statistic/>}/>
      <Route path='/team' element = {<p>Test</p>}/>
    </Route>
  ))

  return (
    <>
      <CasesContextProvider>
        <RouterProvider router={router}/>
      </CasesContextProvider>
    </>
  )
}

export default App
