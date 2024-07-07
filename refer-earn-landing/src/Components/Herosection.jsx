import React, { useState } from 'react';
import { Box, Container, Modal } from '@mui/material';
import FormModal from './FormModal';

const HeroSection = ({ onReferClick }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ py: 8, backgroundColor: '#f4f6f8' }}>
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        {/* Image with click handler to open modal */}
        <img
          src="/image.png"
          alt="Hero"
          style={{ maxWidth: '100%', height: 'auto', cursor: 'pointer', margin: 'auto' }}
          onClick={handleOpen}
        />
      </Container>

      {/* Modal Component */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            outline: 'none',
            borderRadius: 2,
          }}
        >
          <FormModal open={handleOpen} onClose={handleClose} />
        </Box>
      </Modal>
    </Box>
  );
};

export default HeroSection;
