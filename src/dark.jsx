import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Card, CardContent, CardMedia, Switch, Typography } from "@mui/material"
 function darkMode() {

    // applying the primary and secondary theme colors
    const darkTheme = createTheme({})
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  
          //Adding the switch button
          <Switch checked={darkMode} onChange={toggleSwitchFunction} />
           
        </div>
      </ThemeProvider>
    )
  }
  export default darkMode;