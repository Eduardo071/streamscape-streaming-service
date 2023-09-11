import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

//resetei o app com as routas nn sei se ta funfando
export function App() {

  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  )
}


