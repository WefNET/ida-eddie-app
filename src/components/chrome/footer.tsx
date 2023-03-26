import { Paper, Container, Box, Typography } from "@mui/material"

export const AppFooter = () => {
    const year = new Date().getFullYear();

    return (
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
                    <Typography variant="caption" sx={{ color: 'white' }}>
                        Copyright ©{year}, John Wefler, progeny
                    </Typography>
                </Box>
            </Container>
        </Paper>
    )
}