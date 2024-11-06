import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SocialMediaProvider } from './context/AccountProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SocialMediaProvider>
      <App />
    </SocialMediaProvider>
  </StrictMode>,
)
