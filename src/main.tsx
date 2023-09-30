import ReactDOM from 'react-dom/client'
import App from '@/App.tsx'
import store, { StoreProvider } from '@/store/index.ts'
import '@/index.css'

const node = document.getElementById('root')!

ReactDOM.createRoot(node).render(
  <StoreProvider value={store}>
    <App />
  </StoreProvider>
)
