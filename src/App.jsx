import Header from './components/Header'
import AppRoutes from './routes'
import './index.css'

import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
