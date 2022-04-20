import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };


  return (
    <AppBar position="static">
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
              color='info' variant='contained'
              sx={{ mr:3 }} style={{ color: 'white' }}
            >
              로그인
            </Button>
            <Button
              color='inherit' variant='contained'
              style={{ color: 'blue' }}
            >
              회원가입
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
