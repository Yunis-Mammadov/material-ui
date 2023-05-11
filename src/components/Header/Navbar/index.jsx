import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

export default function Navbar() {
  return (
    <Box >
      <AppBar position="static">
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
          </IconButton>
          <CameraAltIcon sx={{mr:3}}/> 
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Albom layout
          </Typography>
            <MenuIcon />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
