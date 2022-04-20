import './App.css';
import { AppBar, Button, Link, Toolbar, Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <AppBar position='fixed'color='secondary'>
        <Toolbar>
          <Button><Typography color='white'>로그인</Typography></Button>
          <Button >회원가입</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
