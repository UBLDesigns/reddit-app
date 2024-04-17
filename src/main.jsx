import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/store'
import AppContainer from './container/AppContainer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <AppContainer />
    </Provider>
)
