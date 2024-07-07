import React,{useState} from 'react';
import { Container, Typography, Box, Button, Paper, Grid } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import {styled} from '@mui/system'
import FormModal from './FormModal';

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(1.5, 4),
  fontSize: '1rem',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const HowToRefer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Box sx={{ backgroundColor: '#e3f2fd', py: 3 }}>
    <Container maxWidth="md" sx={{ textAlign: 'center', py: 4 }}>
      <Typography variant="h4" gutterBottom>
        How Do I Refer?
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <AddCircleOutlineIcon color="primary" sx={{ fontSize: 50 }} />
            <Typography variant="h6" gutterBottom>
              Submit referrals easily via our website’s referral section.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <EmojiEventsIcon color="primary" sx={{ fontSize: 50 }} />
            <Typography variant="h6" gutterBottom>
              Earn rewards once your referral joins an Accredian program.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <WorkOutlineIcon color="primary" sx={{ fontSize: 50 }} />
            <Typography variant="h6" gutterBottom>
              Both parties receive a bonus 30 days after program enrollment.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <StyledButton variant="contained" onClick={handleOpenModal}>
        Refer Now
      </StyledButton>
    </Container>
    <FormModal open={isModalOpen} onClose={handleCloseModal} />
    </Box>
  );
};

export default HowToRefer;
