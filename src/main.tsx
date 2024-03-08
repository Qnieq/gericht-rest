import ReactDOM from 'react-dom/client'
import '../src/assets/gl_styles/_global.scss'
import Routing from './components/Routing/Routing'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Analytics } from "@vercel/analytics/react"

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <Routing />
      <Analytics />
    </Provider>
)
