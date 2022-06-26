import { Link } from "react-router-dom";
import { Button, Fab, Grid, TextField, Typography, Box, Container } from "@mui/material";
import { UserCreate } from "../api/api.jsx";
import { useState } from "react";


export default function Signup () {

  const [users, setUsers] = useState({
    name: '',
    password: '',
    email: '',
    nickname: '',
  })

  const handleUserCreate = async () => {
    try {
      const createUser = await UserCreate(users.name, users.password, users.nickname, users.email, 0, 20,'','',0,0)
      console.log(createUser);
    } catch (e) {
      alert(e);
    };
  };

  const handleUser = e => {
    let { name, value } = e.target;
    setUsers({
      ...users,
      [ name ]: value,
    })
  };

  return (
    <Container sx={{ width:400, height:770 }}>
      <Box component="form" onSubmit={ handleUserCreate }>
        <Grid container direction="column">
          <Typography sx={{ mt: 10, alignSelf: 'start', fontSize: 30}}><strong>회 원 가 입</strong></Typography>
          <TextField required sx={{ my:3 }} onChange={ handleUser } value={users.nickname} name="nickname" variant="standard" type='text' placeholder="별명" />
          <TextField required sx={{ my:3 }} onChange={ handleUser } value={users.email} name="email" variant="standard" type='email' placeholder="이메일" />
          <Fab variant="extended"
            sx={{ backgroundColor: '#568D6C', alignSelf: 'start',width: '50%' }}
            >
            <Typography color='white' >이메일 중복확인</Typography>
          </Fab>
          <Grid container direction='row' sx={{ my:3 }} spacing={2}>
            <Grid item xs={6}>
              <TextField required onChange={ handleUser } value={users.password} name="password" variant="standard" type='password' placeholder="비밀번호" />
            </Grid>
            <Grid item xs={6}>
              <TextField required variant="standard" type='password' placeholder="비밀번호 확인" />
            </Grid>
          </Grid>
          <Typography sx={{ my:3, alignSelf: 'start' }}>
            계정이 이미 있으신가요?? <Link to='/login'><Button>로그인 하기</Button></Link>
          </Typography>
        </Grid>
        <Button variant="contained" sx={{ backgroundColor: '#568D6C' }} type="submit">
          회원가입
        </Button>
      </Box>
      <Button variant="contained" sx={{ backgroundColor: '#568D6C' }}>
        비밀번호를 잊어버리셨나요?
      </Button>
    </Container>
  );
};