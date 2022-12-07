import { Box, Container, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          backgroundColor: '#4169E1',
          mt: '2rem',
          height: '15rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant='h2'
          component='h1'
          sx={{ color: '#1f1e1e', fontWeight: 500 }}
        >
          Home Page
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
