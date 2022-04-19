import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import NotifyContext from '../../notify/NotifyContext'


export default function withRoot(Component) {
  function WithRoot(props) {
    return (
      <NotifyContext>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...props} />
        </ThemeProvider>
      </NotifyContext>

    );
  }

  return WithRoot;
}
