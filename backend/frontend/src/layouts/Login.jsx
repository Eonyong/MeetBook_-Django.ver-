import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import indexStore from "../modules/indexStore";

const Login = observer(() => {
  const { userStore } = indexStore;
  
  const [user, setUser] = useState({
    email: userStore.email,
    password: ''
  });


  const onInputHandler = e => {
    const {name, value} = e.target;
    if (name === 'email') userStore.login(value);
    else console.log('no');
  }

  const login = (email, password) => {
    // console.log(user);
  }

  return (
    <>
      <Container sx={{ width:400, height:770 }}>
        <Box component='form' onSubmit={ login(user.email, user.password) } >
          <Grid container direction="column">
            <Typography sx={{ mt: 10, alignSelf: 'start', fontSize: 30}}><strong>로 그 인</strong></Typography>
            <TextField sx={{ my:3 }} type='email' name='email' variant='standard' placeholder="이메일" value={ user.email } onChange={ onInputHandler } />
            <TextField sx={{ my:3 }} type='password' name='password' variant='standard' placeholder="비밀번호" value={ user.password } onChange={ onInputHandler } />
            <Button type="submit"
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
    </>
  );
})

export default Login;