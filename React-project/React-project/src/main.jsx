import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthContext.jsx'
import UserProvider from './context/UserContext.jsx'
import AlbumProvider from './context/AlbumContext.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <UserProvider>
      <AlbumProvider>
        <App />
      </AlbumProvider>
    </UserProvider>
  </AuthProvider>,
)
