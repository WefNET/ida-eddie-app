import { Home, Man, WomanTwoTone } from "@mui/icons-material";
import { AppBar, Toolbar, Typography, Link } from "@mui/material";

export const AppHeader = () => {
    return (
        <AppBar
        position="static"
        color="primary"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
            <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                The Vandenburghs in Chicago: 1868-1920
            </Typography>
            <nav>
                <Link
                    className='nav-home-icon'
                    variant="button"
                    href="/"
                    sx={{ my: 1, mx: 1.5 }}>
                    <Home color='info' />
                </Link>

                <Link
                    color="secondary"
                    href="/edward"
                    sx={{ my: 1, mx: 1.5 }}
                >
                    <Man color='info' className='nav-home-icon' />
                    Edward
                </Link>
                <Link
                    color="secondary"
                    href="/ida"
                    sx={{ my: 1, mx: 1.5 }}
                >
                    <WomanTwoTone color='info' className='nav-home-icon' />
                    Ida
                </Link>
            </nav>
        </Toolbar>
    </AppBar>
    );
};