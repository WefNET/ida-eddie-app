import { GlobalStyles, CssBaseline, Container } from '@mui/material';
import React from 'react';

import './App.css';

import { ThemeProvider } from '@emotion/react';
import { ctaTheme } from './themes/cta-theme';
import { Router } from './routes/router';

import { AppHeader, AppFooter } from './components/chrome';

const App = () => {

	return (
		<ThemeProvider theme={ctaTheme}>
			<React.Fragment>
				<GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
				<CssBaseline />
				<AppHeader />

				<Container maxWidth="lg" component="main" className="content">
					<Router />
				</Container>

				<AppFooter />
			</React.Fragment>
		</ThemeProvider>
	);
}

export default App;
