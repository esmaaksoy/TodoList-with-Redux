import { createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux"
import Todo from "./Todo"
import {store} from "./store/Store"
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#A5A697",
      },
      secondary: {
        main: "#FBCE3A",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
 <Provider store={store}>
  <Todo/>
 </Provider>
 </ThemeProvider>
  )
}

export default App
