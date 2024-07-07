import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import SupportIcon from '@mui/icons-material/Support';

const SupportSection = () => {
  return (
    <Box sx={{ backgroundColor: '#1a73e8', color: '#fff', p: 5, m:10, ml:20,mr: 20 , borderRadius: 5 }}>
      <Container maxWidth="md" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SupportIcon sx={{ fontSize: 40, mr: 2 }} />
          <Box>
            <Typography variant="h6">Want to delve deeper into the program?</Typography>
            <Typography variant="body1">Share your details to receive expert insights from our program team!</Typography>
          </Box>
        </Box>
        <Button variant="contained" sx={{ backgroundColor: '#fff', color: '#1a73e8'  }}>
          Get in touch
        </Button>
      </Container>
    </Box>
  );
};

export default SupportSection;
