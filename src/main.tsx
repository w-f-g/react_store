import ReactDOM from 'react-dom/client'
import { Provider as StoreProvider } from 'react-redux'
import App from './App.tsx'
import store from './store'

import './index.css'

const node = document.getElementById('root')!

ReactDOM.createRoot(node).render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
)
