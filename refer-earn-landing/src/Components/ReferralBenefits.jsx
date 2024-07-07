import React,{useState} from 'react';
import { 
  Container, Typography, Button, Paper, Grid, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow
} from '@mui/material';
import { styled } from '@mui/system';
import FormModal from './FormModal';

const programs = [
  { name: "Professional Certificate Program in Product Management", referrerBonus: "₹ 7,000", refereeBonus: "₹ 9,000" },
  { name: "PG Certificate Program in Strategic Product Management", referrerBonus: "₹ 9,000", refereeBonus: "₹ 11,000" },
  { name: "Executive Program in Data Driven Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
  { name: "Executive Program in Product Management and Digital Transformation", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
  { name: "Advanced Certification in Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
  { name: "Executive Program in Product Management and FinTech Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
];

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  textAlign: 'center',
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  marginTop: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
}));

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

const ReferralBenefits = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <StyledContainer maxWidth="lg">
      <Typography variant="h4" gutterBottom sx={{ fontWeight: '400', mb: 4 }}>
        What Are The <Typography variant="h4" component="span" color="primary" sx={{ fontWeight: '400' }}>Referral Benefits?</Typography>
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: '100', backgroundColor: 'lightblue', p: 2, borderTopLeftRadius: 4, borderTopRightRadius: 4 }}>
            Program Categories
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                {['Product Management', 'Strategy & Leadership', 'Business Management', 'FinTech', 'Senior Management', 'Data Science', 'Digital Transformation', 'Business Analytics'].map(category => (
                  <TableRow key={category}>
                    <TableCell component="th" scope="row" sx={{ fontWeight: '300' }}>
                      {category}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} md={8}>
          <StyledTableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ width: '45%', fontWeight: '300', color: 'primary.main', backgroundColor: 'lightblue' }}>
                    <Typography variant="h6">Programs</Typography>
                  </TableCell>
                  <TableCell sx={{ width: '27.5%', fontWeight: '300', color: 'primary.main', backgroundColor: 'lightblue' }} align="right">
                    <Typography variant="h6">Referrer Bonus</Typography>
                  </TableCell>
                  <TableCell sx={{ width: '27.5%', fontWeight: '300', color: 'primary.main', backgroundColor: 'lightblue' }} align="right">
                    <Typography variant="h6">Referee Bonus</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {programs.map((program) => (
                  <TableRow key={program.name}>
                    <TableCell>{program.name}</TableCell>
                    <TableCell align="right">{program.referrerBonus}</TableCell>
                    <TableCell align="right">{program.refereeBonus}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </StyledTableContainer>
          <StyledButton variant="contained" onClick={handleOpenModal}>
            Refer Now
          </StyledButton>
        </Grid>
      </Grid>
      <FormModal open={isModalOpen} onClose={handleCloseModal} />
    </StyledContainer>
  );
};

export default ReferralBenefits;
