import { Link } from "react-router-dom";
import { Button, Fab, Grid, TextField, Typography, Box, Container } from "@mui/material";

export default function Signup () {
  return (
    <Container sx={{ width:400, height:770 }}>
      <Box component="form">
        <Grid container direction="column">
          <Typography sx={{ mt: 10, alignSelf: 'start', fontSize: 30}}><strong>회 원 가 입</strong></Typography>
          <TextField required sx={{ my:3 }} variant="standard" type='text' placeholder="별명" />
          <TextField required sx={{ my:3 }} variant="standard" type='email' placeholder="이메일" />
          <Fab variant="extended"
            sx={{ backgroundColor: '#568D6C', alignSelf: 'start',width: '50%' }}
            >
            <Typography color='white' >이메일 중복확인</Typography>
          </Fab>
          <Grid container direction='row' sx={{ my:3 }} spacing={2}>
            <Grid item xs={6}>
              <TextField required variant="standard" type='password' placeholder="비밀번호" />
            </Grid>
            <Grid item xs={6}>
              <TextField required variant="standard" type='password' placeholder="비밀번호 확인" />
            </Grid>
          </Grid>
          <Typography sx={{ my:3, alignSelf: 'start' }}>
            계정이 이미 있으신가요?? <Link to='/login'><Button>로그인 하기</Button></Link>
          </Typography>
          <Button variant="contained" sx={{ backgroundColor: '#568D6C' }}>
            비밀번호를 잊어버리셨나요?
          </Button>
        </Grid>
      </Box>
    </Container>
  );
};