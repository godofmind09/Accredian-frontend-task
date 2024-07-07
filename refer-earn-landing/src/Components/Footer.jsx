import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: '#fff', py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6">Programs</Typography>
            <Link href="#" color="inherit" sx={{ display: 'block', mt: 1 }}>Data Science & AI</Link>
            <Link href="#" color="inherit" sx={{ display: 'block', mt: 1 }}>Product Management</Link>
            <Link href="#" color="inherit" sx={{ display: 'block', mt: 1 }}>Business Analytics</Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6">Contact Us</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>Email us (For Data Science Queries): admissions@accredian.com</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>Email us (For Product Management Queries): pmp@accredian.com</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6">Why Accredian</Typography>
            <Link href="#" color="inherit" sx={{ display: 'block', mt: 1 }}>About</Link>
            <Link href="#" color="inherit" sx={{ display: 'block', mt: 1 }}>Career</Link>
            <Link href="#" color="inherit" sx={{ display: 'block', mt: 1 }}>Blog</Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6">Follow Us</Typography>
            <Box sx={{ display: 'flex', mt: 1 }}>
              <Link href="#" color="inherit" sx={{ mr: 2 }}>Facebook</Link>
              <Link href="#" color="inherit" sx={{ mr: 2 }}>LinkedIn</Link>
              <Link href="#" color="inherit" sx={{ mr: 2 }}>Twitter</Link>
              <Link href="#" color="inherit" sx={{ mr: 2 }}>Instagram</Link>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2">© 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
