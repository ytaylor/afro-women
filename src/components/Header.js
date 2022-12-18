
import CssBaseline from '@mui/material/CssBaseline';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Header() {
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <CameraIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" noWrap>
                        Album layout
                        </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;