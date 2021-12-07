import * as React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    submit: {
      main: '#fff',
      contrastText: '#C7E3EE',
    },
  },
});



export default function BasicButtons() {
  return (
      <ThemeProvider theme={theme}>
      <Button variant="contained" color="submit" size="large">送出</Button>
      </ThemeProvider>
  );
}
