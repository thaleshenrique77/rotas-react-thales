import React from 'react'


import Afaculdade from './pages/Afaculdade'
import Inicial from './pages/Inicial'
import Navbar from './pages/Navbar'
import DpoLGPD from './pages/Dpo'
import NoticiasAxios from './pages/NoticiasAxios'
import VisualizaNoticia from './pages/VisualizaNoticia' 


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container, Box } from '@mui/material'

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Box display="flex" alignItems="center" justifyContent="space-between" p={2}>
          <img src='uniesp.jpg' width={100} height={100} alt="Uniesp Logo" />
          <Navbar />
        </Box>
        <Box mt={4}>
          <Routes>
            <Route path='/' element={<Inicial />} />
            <Route path='/a-faculdade' element={<Afaculdade />} />
            <Route path='/dpo-lgpd' element={<DpoLGPD />} />
            <Route path='/noticias' element={<NoticiasAxios />} />
            <Route path='/visualiza-noticia/:id' element={<VisualizaNoticia />} />


          </Routes>
        </Box>
      </Container>
    </BrowserRouter>
  )
}

export default App