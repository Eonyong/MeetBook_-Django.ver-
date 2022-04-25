import { Link } from "react-router-dom";
import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";

export default function Login () {
  return (
    <Container sx={{ width:400, height:770 }}>
      <Box component='form'>
        <Grid container direction="column">
          <Typography sx={{ mt: 10, alignSelf: 'start', fontSize: 30}}><strong>로 그 인</strong></Typography>
          <TextField sx={{ my:3 }} type='email' variant='standard' placeholder="이메일" />
          <TextField sx={{ my:3 }} type='password' variant='standard' placeholder="비밀번호" />
          <Button
            variant="contained" sx={{ backgroundColor: '#568D6C', alignSelf: 'start', width: '30%' }}
          >
            로그인하기
          </Button>
          <Typography sx={{ my:3, alignSelf: 'start' }}>
            계정이 없으신가요? <Link to='/signup'><Button variant='text'>회원가입 하기</Button></Link>
          </Typography>
          <Button variant="contained" sx={{ backgroundColor: '#568D6C' }}>
            비밀번호를 잊어버리셨나요?
          </Button>
        </Grid>
      </Box>
    </Container>
  );
};