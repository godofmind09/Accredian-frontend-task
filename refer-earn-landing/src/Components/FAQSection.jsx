import React from 'react';
import { Container, Typography, Box, Button, Accordion, AccordionSummary, AccordionDetails, Tabs, Tab, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';

const faqs = [
  {
    question: "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
    answer: "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work."
  },
  {
    question: "What is the minimum system configuration required?",
    answer: "A basic computer with internet access is sufficient to participate in the program."
  },
];

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  marginTop: theme.spacing(2),
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


const FAQSection = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ backgroundColor: '#e3f2fd', py: 3 }}>
    <Container maxWidth="md" sx={{backgroundColor: '#e3f2fd', color: '#000', py: 4 }}>
      <Typography variant="h4" gutterBottom textAlign="center" sx={{ mb: 4, fontWeight: '400', color: 'black' }}>
        Frequently Asked <span style={{ color: 'blue' }}>Questions</span>
      </Typography>

      
      <Paper square elevation={3} sx={{ borderRadius: 2 }}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="FAQ Tabs"
          centered
        >
          <Tab label="Eligibility" />
          <Tab label="How To Use?" />
          <Tab label="Terms & Conditions" />
        </Tabs>
      </Paper>
      {faqs.map((faq, index) => (
        <StyledAccordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
            <Typography variant="subtitle1" sx={{ fontWeight: '300' }}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body" sx={{fontWeight: '300', color: 'text.secondary' }}>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </StyledAccordion>
      ))}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <StyledButton variant="contained">
          Get in touch
        </StyledButton>
      </Box>
    </Container>
    </Box>
  );
};

export default FAQSection;
