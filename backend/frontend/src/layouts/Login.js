import { Button, Container, Grid, Input, Link, Typography } from "@mui/material";

function Login () {
  return (
    <Container sx={{ width:400, height:770 }}>
      <Grid container direction="column">
        <Typography sx={{ mt: 10, alignSelf: 'start', fontSize: 30}}><strong>로 그 인</strong></Typography>
        <Input sx={{ my:3 }} placeholder="이메일" />
        <Input sx={{ my:3 }} placeholder="비밀번호" />
        <Button variant="contained" sx={{ backgroundColor: '#568D6C', alignSelf: 'start' }}>
          로그인하기
        </Button>
        <Typography sx={{ my:3, alignSelf: 'start' }} >계정이 없으신가요? <Link>회원가입 하기</Link></Typography>
        <Button variant="contained" sx={{ backgroundColor: '#568D6C' }}>
          비밀번호를 잊어버리셨나요?
        </Button>
      </Grid>
    </Container>
  );
};
export default Login;