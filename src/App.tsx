import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from "styled-components"
import { DefaultTheme } from "./styles/DefaultTheme"
import { GlobalStyle } from "./styles/Global"
import { Router } from "./Router"

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <Router /> 
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
