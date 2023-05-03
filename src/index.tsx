import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter } from 'react-router-dom'

import { App } from './components/App/App'
import { AppStylesProvider } from './styles/AppStylesProvider'

const queryClient = new QueryClient()

const RootComponent = () => {
  return (
    <StrictMode>
      <AppStylesProvider>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools />
          </QueryClientProvider>
        </BrowserRouter>
      </AppStylesProvider>
    </StrictMode>
  )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container as HTMLElement)
root.render(<RootComponent />)
