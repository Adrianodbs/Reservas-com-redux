import Header from './components/Header'
import AppRoutes from './routes'
import './index.css'
import { Provider } from 'react-redux'
import store from './store'

import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  )
}

export default App
