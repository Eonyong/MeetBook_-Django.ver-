import { Stack, Typography } from "@mui/material";


function Footer () {
  return (
    <footer>
        <Stack sx={{ height: 50, pt:3, backgroundColor:'white', textAlign:'center'}}>
          <Typography>Meetbook © 2022</Typography>
        </Stack>
    </footer>
  );
};

export default Footer;