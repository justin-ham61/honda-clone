import * as ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
/* import {Provider} from 'react-redux'
import store from './store' */
import App from './App.tsx'
import './index.scss'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider>, */}
  </QueryClientProvider>
)
