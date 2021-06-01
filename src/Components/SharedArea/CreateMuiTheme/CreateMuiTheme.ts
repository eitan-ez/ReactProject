import { createMuiTheme } from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
    
        primary: {
          main: green[900]  ,
        },
        secondary: {
          main: red[800],
        },
      }
});

export default darkTheme;