import { Routes, Route } from 'react-router-dom'
import { PaginaDoFilme } from './pages/PaginaDoFilme'


// Rotas
export function Router() {
  <Routes>
    <Route path='/' />
    <Route path='/titulo-do-filme' element={<PaginaDoFilme />} />
  </Routes>
} 