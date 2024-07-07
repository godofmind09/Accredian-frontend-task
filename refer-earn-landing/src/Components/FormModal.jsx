import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const FormModal = ({ open, onClose }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [referredBy, setReferredBy] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name: userName, email: userEmail, referredBy };
    console.log('Form Data:', formData); 

    try {
      const response = await axios.post("http://localhost:3001/api/referrals", formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log("Response data:", response.data);
      setSuccess(true); 
      setTimeout(() => {
        setSuccess(false);
        onClose(); 
      }, 2000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(`Error submitting form: ${error.message}`);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        {success ? (
          <Box sx={{ textAlign: 'center', color: 'green' }}>
            <CheckCircleIcon sx={{ fontSize: 60 }} />
            <Typography variant="h6" component="div">
              Submission Successful!
            </Typography>
          </Box>
        ) : (
          <Box component="form" onSubmit={handleSubmit}>
            <Typography id="modal-title" variant="h6" component="h2" mb={2}>
              Referral Form
            </Typography>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <TextField
              label="Referred By"
              variant="outlined"
              fullWidth
              margin="normal"
              value={referredBy}
              onChange={(e) => setReferredBy(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Submit
            </Button>
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default FormModal;
