import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 920,
      md: 950,
      lg: 1200,
      xl: 1536,
    },
  },
});
