import * as React from 'react';
import { Box, IconButton, InputBase, Stack, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function MainLayout () {
  return (
    <Stack sx={{ backgroundColor: '#568D6C', height: '100%' }}>
      <Typography sx={{ color:'white', mt: 10 }}>책으로 나누는 우리 이야기</Typography>
      <Box
        component='img' src='img/MEETBOOK_txt.svg'
        sx={{ width: { sm:200, md:450 }, alignSelf: 'center', padding: 5 }}
      />
      <Typography sx={{ color:'white' }}>모임을 찾으시나요? 책 제목을 입력해보세요</Typography>
      <Box component='form'>
        <InputBase
          sx={{ width: {xs:100, md:300}, alignSelf: 'center', backgroundColor:'white' }}
          variant='filled'
          placeholder='달러구트'
          startAdornment={<IconButton type='submit' sx={{ p: 2}}><SearchIcon /></IconButton>}
        />
      </Box>
    </Stack>
  );
};

export default MainLayout;