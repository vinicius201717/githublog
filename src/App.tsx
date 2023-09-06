import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from "styled-components"
import { DefaultTheme } from "./styles/DefaultTheme"
import { GlobalStyle } from "./styles/Global"
import { Router } from "./Router"
import { IssuesProvider } from './contexts/IssuesContext'

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <IssuesProvider>
          <Router />
        </IssuesProvider>        
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
