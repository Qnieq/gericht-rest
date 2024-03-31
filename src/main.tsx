import ReactDOM from 'react-dom/client'
import '../src/assets/gl_styles/_global.scss'
import Routing from './components/Routing/Routing'
import { Provider } from 'react-redux'
import { persistor, store } from './store/store'
import { Analytics } from "@vercel/analytics/react"
import AuthProvider from './Provider/AuthProvider'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <Provider store={store}>
    <AuthProvider>
      <PersistGate loading={null} persistor={persistor}>
        <Routing />
      </PersistGate>
    </AuthProvider>
    <Analytics />
  </Provider>
)
