import React from 'react';
import PropTypes from 'prop-types';
import ApiList from './components/ApiList';
import { MuiThemeProvider , createMuiTheme} from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: { 
      main: '#2376B6',
      dark: '#2376B6',
      contrastText: '#fff',
    },
    gray: { main: '#2376B6' }
  },
  spacing: 4,
  typography: {
    fontWeightLight: 300,
    fontWeightRegular: 300,
    fontWeightMedium: 300,
    
  }
});


function App() {
  return (
    <MuiThemeProvider theme={theme}>
        <ApiList />
    </MuiThemeProvider>
  );
}

App.propTypes = {
  ApiList: PropTypes.element,
};

export default App;
