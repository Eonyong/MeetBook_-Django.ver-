import * as React from 'react';
import indexStore from '../modules/indexStore';
import { useObserver } from 'mobx-react';
import { Box, Fab, Grid, IconButton, InputBase, Stack, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function MainLayout () {

  const { numberStore } = indexStore();

  const onClickIncrease = () => {
    numberStore.increaseAction(1);
  };

  return useObserver(() => (
    <>
      <Stack sx={{ backgroundColor: '#568D6C', height: '100%' }}>
        <Typography sx={{ color:'white', mt: 10 }}>책으로 나누는 우리 이야기</Typography>
        <Box
          component='img' src='img/MEETBOOK_txt.svg'
          sx={{ width: { sm:200, md:450 }, alignSelf: 'center', padding: 5 }}
        />
        <Typography sx={{ color:'white', mb: 3 }}>모임을 찾으시나요? 책 제목을 입력해보세요</Typography>
        <Box component='form'>
          <InputBase
            sx={{ alignSelf: 'center', backgroundColor:'white', borderRadius: 15 }}
            variant='filled'
            value={ numberStore.num > 0 ? numberStore.num : '달러구트' }
            startAdornment={<IconButton type='submit' sx={{ p: 2}}><SearchIcon /></IconButton>}
            />
        </Box>
        <Typography sx={{ color:'white', my: 3 }}>어떤 모임이 있는지 궁금하신가요? 모임을 확인해보세요</Typography>
        <Fab
          sx={{ height: 50,
          backgroundColor:'white', alignSelf: 'center', borderRadius: 15 }}
          variant="extended" onClick={ onClickIncrease }>
            👋 도서별 모임 확인하기
        </Fab>
        <Grid sx={{ my:4 }}>
          <Box component='img' src='img/girl.svg' />
        </Grid>      
      </Stack>
    </>
    )

  );
};

export default MainLayout;