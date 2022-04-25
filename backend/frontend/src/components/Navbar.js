import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Button, Container, Toolbar, Box, Divider } from '@mui/material';

const Navbar = () => {

  return (
    <AppBar position="static" style={{ backgroundColor: '#568D6C' }}>
      <Container maxWidth="xl" sx={{ paddingLeft: '0px' }}>
        <Toolbar>
          <Link to='/'>
            <Box
              component="img" sx={{ maxHeight: 18 }} src='img/MEETBOOK.svg'
              />
          </Link>

          <Box
            style={{ flex: 1, textAlign:'end' }}
          >
            <Link to='/login'>
              <Button
                color='inherit' sx={{ mr:3 }} style={{ color: 'white' }}
              >
                로그인
              </Button>
            </Link>
            
            <Link to='/signup'>
              <Button
                color='inherit' variant='contained' style={{ color: '#568D6C' }}
                >
                회원가입
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
      <Divider color='white' />
    </AppBar>
  );
};
export default Navbar;
