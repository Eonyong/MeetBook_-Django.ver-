import * as React from 'react';
import { AppBar, Button, Container, Toolbar, Box, Divider } from '@mui/material';

const Navbar = () => {

  return (
    <AppBar position="static" style={{ backgroundColor: '#568D6C' }}>
      <Container maxWidth="xl" sx={{ paddingLeft: '0px' }}>
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{
              maxHeight: 18,
            }}
            src='img/MEETBOOK.svg'
          />

          <Box
            style={{ flex: 1, textAlign:'end' }}
          >
            <Button
              color='inherit'
              sx={{ mr:3 }} style={{ color: 'white' }}
            >
              로그인
            </Button>
            <Button
              color='inherit' variant='contained'
              style={{ color: '#568D6C' }}
            >
              회원가입
            </Button>
          </Box>
        </Toolbar>
      </Container>
      <Divider color='white' />
    </AppBar>
  );
};
export default Navbar;
