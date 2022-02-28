import { useNavigate } from "react-router"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography 
            variant="h6" 
            noWrap 
            component="div" 
            sx={{ mr: 2, cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            Home
          </Typography>
          <Box>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
              onClick={() => navigate('/writepost')}
            >
              게시글 작성
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
