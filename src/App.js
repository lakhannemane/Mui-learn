import { ThemeProvider } from "@mui/material";
import Header from "./component/ui/Header";
import theme from "./component/ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      helloo!
    </ThemeProvider>
  );
}

export default App;
