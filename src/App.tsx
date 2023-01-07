import { GlobalStyles, CssBaseline, AppBar, Toolbar, Typography, Container, Box, Paper, Link as Lank } from '@mui/material';
import React from 'react';
import {
	BrowserRouter,
	Route,
	Routes,
} from "react-router-dom";
import { Home as HomeIcon, Man, WomanTwoTone } from '@mui/icons-material';
import './App.css';
import Edward from './pages/edward';
import Home from './pages/home';
import Ida from './pages/ida';
import { ThemeProvider } from '@emotion/react';
import { ctaTheme } from './themes/cta-theme';
import Family from './pages/family';

function App() {
	return (
		<ThemeProvider theme={ctaTheme}>
		<React.Fragment>
			<GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
			<CssBaseline />
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
						<Lank
							className='nav-home-icon'
							variant="button"
							href="/"
							sx={{ my: 1, mx: 1.5 }}>
							<HomeIcon color='info' />
						</Lank>

						<Lank
							color="secondary"
							href="/edward"
							sx={{ my: 1, mx: 1.5 }}
						>
							<Man color='info' className='nav-home-icon'/>
							Edward
						</Lank>
						<Lank
							color="secondary"
							href="/ida"
							sx={{ my: 1, mx: 1.5 }}
						>
							<WomanTwoTone color='info' className='nav-home-icon'/>
							Ida
						</Lank>
					</nav>
				</Toolbar>
			</AppBar>

			<Container maxWidth="lg" component="main" className="content">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="edward" element={<Edward />} />
						<Route path="ida" element={<Ida />} />
						<Route path="family" element={<Family />} />
					</Routes>
				</BrowserRouter>
			</Container>

			{/* Footer */}
			<Paper sx={{
				marginTop: 'calc(10% + 60px)',
				width: '100%',
				position: 'fixed',
				bottom: 0,
			}} component="footer" square variant="outlined">
				<Container maxWidth="lg">
					<Box
						sx={{
							flexGrow: 1,
							justifyContent: "center",
							display: "flex",
							my: 1
						}}
					>
					</Box>

					<Box
						sx={{
							flexGrow: 1,
							justifyContent: "center",
							display: "flex",
							mb: 2,
						}}
					>
						<Typography variant="caption" color="initial">
							Copyright ©2022, John Wefler, progeny
						</Typography>
					</Box>
				</Container>
			</Paper>
			{/* End footer */}
		</React.Fragment>
		</ThemeProvider>
	);
}

export default App;
