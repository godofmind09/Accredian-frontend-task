import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)({
  backgroundColor: '#f5f5f5',
  color: '#000',
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
});

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="default">
      <Box sx={{ backgroundColor: '#c0e5f0', textAlign: 'center', py: 1 }}>
        <Typography variant="body2" color="textSecondary">
          Navigate your ideal career path with tailored expert advice{' '}
          <Link href="#" color="primary">Contact Expert</Link>
        </Typography>
      </Box>
      <Container maxWidth="lg">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                accredian
                <sub style={{ display: 'block', fontSize: '0.75rem', color: '#6b7280' }}>
                  credentials that matter
                </sub>
              </Typography>
            </Box>
            <Button variant="contained" color="primary" onClick={handleMenuClick} sx={{ ml: 2 }}>Courses</Button>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', gap: 2 }}>
            
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Course 1</MenuItem>
              <MenuItem onClick={handleMenuClose}>Course 2</MenuItem>
              <MenuItem onClick={handleMenuClose}>Course 3</MenuItem>
            </Menu>
            <Button color="inherit">Refer & Earn</Button>
            <Button color="inherit">Resources</Button>
            <Button color="inherit">About Us</Button>
            <StyledButton variant="contained">Login</StyledButton>
            <Button variant="contained" color="primary">Try for free</Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
