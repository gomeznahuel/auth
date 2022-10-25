import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { AppRouter } from './router/'
import { GlobalStyle } from './stylesheet/global'
import { AuthProvider } from './context/auth.provider'
import { ThemeProvider } from "styled-components";
import { Theme } from "./stylesheet/theme";

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <AuthProvider>
        <AppRouter />
        <GlobalStyle />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
)
