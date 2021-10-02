import * as React from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '../components/AppBar';
import Drawer from '../components/Drawer';
import RootRoute from '../routes';
import { topbarHeight } from '../constants/Base';
import '../styles/base.css';


const mdTheme = createTheme();
function App() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };


  return (
    <ThemeProvider theme={mdTheme}>
      <Box minHeight='100vh' sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar open={open} toggleDrawer={toggleDrawer} />
        <Drawer open={open} toggleDrawer={toggleDrawer} />
        <div style={{ maxHeight: `calc(100vh - ${topbarHeight}px)`, marginTop: topbarHeight, overflow: 'hidden', overflowY: 'auto', width: '100%' }}>
          <RootRoute />
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
