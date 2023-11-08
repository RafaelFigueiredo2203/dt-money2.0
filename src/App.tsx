import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";


export function App() {
  
  return (
   <ThemeProvider theme={defaultTheme}>
    <GlobalStyle/>
      <div>
    <h1>Ola</h1>
      </div>
      </ThemeProvider>
  )
}


