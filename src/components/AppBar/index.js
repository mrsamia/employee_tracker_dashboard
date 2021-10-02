import { styled } from "@mui/material/styles";
import MuiAppBar from '@mui/material/AppBar';
import { drawerWidth } from "../../constants/Base";
import Typography from "@mui/material/Typography";
import { IconButton, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const AppBarBase = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));


const AppBar = ({ open = false, toggleDrawer = () => { } }) => {
    return <AppBarBase position="absolute" open={open}>

        <Toolbar
            sx={{
                pr: '24px', // keep right padding when drawer closed
            }}
        >
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                    marginRight: '36px',
                    ...(open && { display: 'none' }),
                }}
            >
                <MenuIcon />
            </IconButton>
            <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
            >
                Dashboard
            </Typography>
        </Toolbar>
    </AppBarBase>
}

export default AppBar